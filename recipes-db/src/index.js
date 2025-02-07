const ALLOW_LIST = [
  "Spaghetti_Carbonara.jpg", "Beef_Stroganoff.jpg", "Chicken_Alfredo.jpg",
  "Chicken_Parmesan.jpg", "Shrimp_Scampi.jpg", "Vegetable_Stir_Fry.jpg",
  "Chicken_Tikka_Masala.jpg", "Beef_Tacos.jpg", "Margherita_Pizza.jpg", "sliced-avocado-toast.jpg", "A_plate_of_freshly_baked_Christmas_cookies.png", 
  "salted_caramel_chocolate_chip.png", "festive_tray_of_peppermint_Christmas_bark.png", "A_festive_glass_of_non-alcoholic_cranberry_orange.png"
];

// Check requests for a pre-shared secret
const hasValidHeader = (request, env) => {
  return request.headers.get("X-Custom-Auth-Key") === env.AUTH_KEY_SECRET;
};

function authorizeRequest(request, env, key) {
  // Bypass authorization for the /api/recipes endpoint
  if (key === "api/recipes") {
    return true;
  }

  switch (request.method) {
    case "PUT":
    case "DELETE":
      return hasValidHeader(request, env);
    case "GET":
      return ALLOW_LIST.includes(key);
    default:
      return false;
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);

    // Authorization check
    if (!authorizeRequest(request, env, key)) {
      return new Response("Forbidden", { status: 403 });
    }

    console.log("URL Pathname:", url.pathname);  // Log the pathname for debugging

    // Match the exact pathname "/api/recipes"
    if (url.pathname === "/api/recipes") {
      try {
        const db = env.MY_DB;  // Access the D1 database
        console.log("Connected to DB");  // Log when connected to the DB

        // Query to fetch all recipes with their ingredients and instructions
        const { results } = await db.prepare(`
          SELECT 
            r.recipe_id,
            r.recipe_name, 
            r.description, 
            r.image_url,
            json_group_array(DISTINCT json_object('ingredient_name', i.ingredient_name, 'quantity', i.quantity)) as ingredients,
            json_group_array(DISTINCT json_object('step_number', ins.step_number, 'instruction_text', ins.instruction_text)) as instructions
          FROM Recipes r
          LEFT JOIN Ingredients i ON r.recipe_id = i.recipe_id
          LEFT JOIN Instructions ins ON r.recipe_id = ins.recipe_id
          GROUP BY r.recipe_id
          ORDER BY r.recipe_name, ins.step_number;
        `).all();

        console.log("DB Results:", results);  // Log the results from the DB

        // Parsing the grouped JSON data into proper arrays
        const parsedResults = results.map(row => ({
          recipe_id: row.recipe_id,
          recipe_name: row.recipe_name,
          description: row.description,
          image_url: row.image_url,
          ingredients: JSON.parse(row.ingredients || '[]'),
          instructions: JSON.parse(row.instructions || '[]')
        }));

        return new Response(JSON.stringify(parsedResults), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",  // Allow all origins
          },
        });
      } catch (error) {
        console.error("Error occurred:", error);  // Log the error for debugging
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",  // Ensure CORS headers are returned on errors too
            "Content-Type": "application/json",
          },
        });
      }
    }

    // Match the pathname "/api/recipe-image"
    if (url.pathname.startsWith("/api/recipe-image")) {
      const imageKey = url.pathname.split("/api/recipe-image/")[1];
      try {
        const object = await env.MY_BUCKET.get(imageKey);
        if (!object) {
          return new Response("Object Not Found", { status: 404 });
        }
        return new Response(object.body, {
          headers: {
            "Content-Type": "image/jpeg",  // Set the appropriate content type
            "Access-Control-Allow-Origin": "*",  // Allow all origins
          },
        });
      } catch (error) {
        console.error("Error occurred:", error);  // Log the error for debugging
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
      }
    }

    // Handle PUT, GET, DELETE requests for other bucket operations
    if (!url.pathname.startsWith("/api/recipe-image") && url.pathname !== "/api/recipes") {
      switch (request.method) {
        case "PUT":
          await env.MY_BUCKET.put(key, request.body);
          return new Response(`Put ${key} successfully!`);
        case "GET":
          const object = await env.MY_BUCKET.get(key);

          if (object === null) {
            return new Response("Object Not Found", { status: 404 });
          }

          const headers = new Headers();
          object.writeHttpMetadata(headers);
          headers.set("etag", object.httpEtag);

          return new Response(object.body, {
            headers,
          });
        case "DELETE":
          await env.MY_BUCKET.delete(key);
          return new Response("Deleted!");

        default:
          return new Response("Method Not Allowed", {
            status: 405,
            headers: {
              Allow: "PUT, GET, DELETE",
            },
          });
      }
    }

    // Handle preflight requests (CORS)
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Return 404 if no matching route is found
    return new Response("Not Found", {
      status: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
};
