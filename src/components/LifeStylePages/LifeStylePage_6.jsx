import { useEffect } from "react";

const LifeStylePage_6 = () => {
  useEffect(() => {
    // Load Pinterest script after the component mounts
    const loadPinterest = () => {
      if (window.PinUtils) {
        window.PinUtils.build(); // If Pinterest script is already loaded, initialize it.
      } else {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.src = "//assets.pinterest.com/js/pinit.js";
        script.onload = () => {
          if (window.PinUtils) {
            window.PinUtils.build(); // Initialize Pinterest once script is loaded.
          }
        };
        document.body.appendChild(script);
      }
    };

    // Delay loading the Pinterest button to make sure everything is rendered.
    const timer = setTimeout(loadPinterest, 300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <div className="w-full lg:w-[60vw] xl:w-[35vw] flex flex-col items-center px-6">
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
            Health & Nutrition
          </span>
          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published October 3, 2024
          </span>
          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            The Top High-Protein Foods to Supercharge Your Diet
          </h1>

          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/lifestyle_img/protein_rich_food.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="The Top High-Protein Foods to Supercharge Your Diet"
                data-pin-media="https://virlama.com/assets/lifestyle_img/protein_rich_food.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/lifestyle/6"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
            Protein is essential for muscle building, weight management, and
            overall health. Here are the top high-protein foods to add to your
            diet, ranked from highest to lowest protein content.
          </p>

          {[
            {
              title: "Tuna",
              text: "Tuna is one of the highest-protein fish, offering 30g of protein per 100g serving. It's a lean option that's great for salads, sandwiches, or enjoying on its own. Rich in omega-3 fatty acids, tuna supports heart health and brain function. Opt for fresh or canned tuna in water for a convenient and nutritious addition to your meals.",
            },
            {
              title: "Chicken Breast",
              text: "A 100g serving of cooked chicken breast contains about 31g of protein. It's lean, versatile, and easy to prepare for any meal. Grill, bake, or stir-fry it with your favorite herbs and spices for a quick, satisfying meal. Chicken breast is a staple for athletes and fitness enthusiasts due to its high protein and low fat content.",
            },
            {
              title: "Beef",
              text: "A 100g serving of beef provides approximately 26g of protein. It's a rich source of high-quality protein, along with essential nutrients like iron and zinc, which are crucial for maintaining healthy blood and immune function. Choose lean cuts like sirloin or tenderloin to keep saturated fat intake in check while still enjoying its benefits.",
            },
            {
              title: "Salmon",
              text: "Salmon is not only rich in protein, providing 25g per 100g serving, but also packed with heart-healthy omega-3 fatty acids. These fats help reduce inflammation and improve cholesterol levels, making salmon an excellent choice for those looking to boost cardiovascular health. Enjoy it baked, grilled, or even raw in sushi.",
            },
            {
              title: "Greek Yogurt",
              text: "Greek yogurt is a protein-rich dairy option, with about 15-20g of protein per 170g serving. It's also packed with calcium and probiotics, which support digestive health and bone strength. Add it to smoothies, pair with fresh fruit, or use it as a creamy base for dips and dressings.",
            },
            {
              title: "Lentils",
              text: "Lentils are an excellent plant-based protein source, with around 18g of protein per cooked cup. They're also rich in fiber, iron, and folate, making them ideal for maintaining a healthy heart and digestive system. Lentils are versatile in soups, stews, or as a meat substitute in dishes like lentil burgers.",
            },
            {
              title: "Quinoa",
              text: "Quinoa is a complete plant-based protein, offering 8g of protein per cup. It's versatile and works well in salads, bowls, or as a side dish. Packed with all nine essential amino acids, quinoa is especially beneficial for vegetarians and vegans looking to increase their protein intake. Plus, it's gluten-free, making it suitable for those with gluten sensitivities.",
            },
            {
              title: "Cottage Cheese",
              text: "Cottage cheese contains about 11g of protein per 100g serving. It's a slow-digesting protein, making it ideal for snacking or adding to meals. High in casein protein, it helps in maintaining muscle mass and promoting recovery, especially when consumed before bed. Pair it with fresh fruit or use it as a savory topping on toast.",
            },
            {
              title: "Eggs",
              text: "Each large egg contains about 6g of protein. Eggs are a complete protein source, offering all essential amino acids in a convenient, nutrient-packed package. They are perfect for breakfast, or add them to salads, sandwiches, or stir-fries. Rich in choline, eggs also support brain health and memory function.",
            },
            {
              title: "Almonds",
              text: "A 28g (1-ounce) serving of almonds contains around 6g of protein, making them a great plant-based snack that's also rich in healthy fats and vitamin E. Almonds are great for maintaining skin health and providing sustained energy throughout the day. Enjoy them raw, roasted, or as almond butter on toast or fruit.",
            },
          ].map(({ title, text }, index) => (
            <div key={index} className="flex flex-col w-full mb-6">
              <h2
                className="text-3xl mb-3"
                style={{
                  WebkitTextStroke: "0.5px black",
                  textStroke: "0.5px black",
                }}
              >
                {title}
              </h2>

              <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeStylePage_6;
