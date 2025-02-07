import React, { useEffect, useState } from "react";
import Button from "../Button";
import RecipeCarousel from "./RecipeCarousel";
import { cookingTime } from "../../constants/index"; // Import cookingTime

const AllRecipesPage = () => {
  const [allRecipes, setAllRecipes] = useState([]); // State to hold all recipes

  useEffect(() => {
    // Fetch data from your API
    const fetchRecipeData = async () => {
      try {
        const response = await fetch(
          "https://recipes-db.mensikovapolina.workers.dev/api/recipes"
        );
        const data = await response.json();
        setAllRecipes(data); // Store all recipes in state
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    fetchRecipeData();
  }, []);

  if (allRecipes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-8">
      {allRecipes.map((recipe, index) => {
        // Find the cooking time for each recipe using recipe_id
        const recipeCookingTime = cookingTime.find(
          (time) => String(time.id) === String(recipe.recipe_id)
        ) || { prep: "N/A", cook: "N/A", total: "N/A", servings: "N/A" };

        return (
          <div key={index} className="flex justify-center mb-12">
            <div className="w-full lg:w-[45vw] xl:w-[35vw] flex flex-col items-center px-6">
              <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-4 mr-5">
                recipes
              </span>

              <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
                Published September {recipeCookingTime.published}, 2024
              </span>
              <h1
                className="text-4xl xl:text-5xl mb-5"
                style={{
                  WebkitTextStroke: "0.5px black",
                  textStroke: "0.5px black",
                }}
              >
                {recipe.recipe_name}
              </h1>
              <div className="flex mb-6">
                <img
                  className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px]"
                  src={recipe.image_url}
                  alt={recipe.recipe_name}
                />
              </div>

              <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
                {recipe.description}
              </p>

              <div className="flex w-full mb-6">
                <table className="w-full bg-n-5 bg-opacity-20 text-center border border-black border-opacity-50">
                  <thead className="border-b border-b-black border-opacity-50">
                    <tr
                      className="text-[1rem]"
                      style={{
                        WebkitTextStroke: "0.1px black",
                        textStroke: "0.1px black",
                      }}
                    >
                      <th scope="col" className="px-2 lg:px-4 py-4 uppercase">
                        Prep
                      </th>
                      <th scope="col" className="px-2 lg:px-4 py-4 uppercase">
                        Cook
                      </th>
                      <th scope="col" className="px-2 lg:px-4 py-4 uppercase">
                        Total
                      </th>
                      <th scope="col" className="px-2 lg:px-4 py-4 uppercase">
                        Serves
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-code tracking-[0.1rem] font-light text-sm">
                    <tr className="border-b border-b-black border-opacity-50">
                      <td className="whitespace-nowrap px-2 lg:px-4 py-4 ">
                        {recipeCookingTime.prep_time} min
                      </td>
                      <td className="whitespace-nowrap px-2 lg:px-4 py-4">
                        {recipeCookingTime.cook_time} min
                      </td>
                      <td className="whitespace-nowrap px-2 lg:px-4 py-4">
                        {recipeCookingTime.prep_time +
                          recipeCookingTime.cook_time}{" "}
                        min
                      </td>
                      <td className="whitespace-nowrap px-2 lg:px-4 py-4">
                        {recipeCookingTime.servings} servings
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Ingredients */}
              <div className="flex flex-col w-full">
                <h2
                  className="text-3xl mb-4"
                  style={{
                    WebkitTextStroke: "0.5px black",
                    textStroke: "0.5px black",
                  }}
                >
                  Ingredients
                </h2>
                <ul className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-4">
                      {ingredient.quantity} {ingredient.ingredient_name}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2
                  className="text-3xl mb-4"
                  style={{
                    WebkitTextStroke: "0.5px black",
                    textStroke: "0.5px black",
                  }}
                >
                  Directions
                </h2>
                <ol className="list-decimal pl-5 mb-8 font-code tracking-[0.1rem] font-light text-[18px] text-n-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="mb-4">
                      {instruction.instruction_text}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        );
      })}
      <div className="bg-n-8">
        <div className="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-[1500px]">
          <RecipeCarousel title={"More Recipes You'll Love"} />
        </div>
      </div>
    </div>
  );
};

export default AllRecipesPage;
