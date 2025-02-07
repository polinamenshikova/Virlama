import React, { useEffect, useState } from "react";
import Button from "../Button";
import { PiArrowRightLight } from "react-icons/pi";
import { RxTriangleRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const RecipeCarousel = ({ title }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchTitle() {
      try {
        const response = await fetch(
          "https://recipes-db.mensikovapolina.workers.dev/api/recipes"
        ); // Adjust this URL based on your API route
        const data = await response.json();

        setRecipes(data); // If you fetch more recipe details
      } catch (error) {
        console.error("Error fetching recipe title:", error);
      }
    }

    fetchTitle();
  }, []);

  console.log(recipes);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center ">
        <Link to={"/recipes"}>
          <h2 className="font-gistesy uppercase text-center text-3xl lg:text-4xl mb-4 inline-flex items-center">
            {title}{" "}
            <span>
              <RxTriangleRight className="w-8 text-color-1 hover:text-n-5 transition-colors " />
            </span>
          </h2>
        </Link>
      </div>
      <div className="w-full h-[1px] bg-black mb-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id} className="bg-white overflow-hidden">
            <Link to={`/recipes/${recipe.recipe_id}`}>
              <img
                src={recipe.image_url} // Ensure you have an imageSrc field
                alt={recipe.recipe_name}
                className="w-full h-80 object-cover scale-90 hover:scale-95 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <div className="p-4">
              <Link to={`/recipes/${recipe.recipe_id}`}>
                <h3 className="font-code text-[22px] font-light">
                  {recipe.recipe_name}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCarousel;
