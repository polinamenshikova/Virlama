import { useEffect } from "react";

const LifeStylePage_5 = () => {
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
            Fashion & Care
          </span>
          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published October 1, 2024
          </span>
          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            How to Care for Your Cashmere: Keep Your Luxury Garments Looking New
          </h1>

          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/lifestyle_img/cashmere_care.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="How to Care for Your Cashmere: Keep Your Luxury Garments Looking New"
                data-pin-media="https://virlama.com/assets/lifestyle_img/cashmere_care.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/lifestyle/5"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
            Cashmere is a luxurious and delicate fabric, known for its softness
            and warmth. However, it requires special care to maintain its beauty
            and longevity. Taking proper care of your cashmere garments ensures
            they stay as soft and beautiful as the day you bought them. Here are
            some essential tips to keep your cashmere in pristine condition for
            years to come.
          </p>

          {[
            {
              title: "1. Hand Wash with Care",
              text: "While it might be tempting to toss your cashmere sweater into the washing machine, hand washing is the best method to preserve the delicate fibers. Fill a basin with cold water and add a small amount of gentle detergent specifically designed for wool or cashmere. Gently submerge the garment and swirl it for a few minutes, avoiding harsh scrubbing or twisting. After rinsing, carefully squeeze out the water without wringing the fabric.",
            },
            {
              title: "2. Dry Flat to Avoid Stretching",
              text: "Cashmere can easily lose its shape if not dried properly. After washing, lay the garment flat on a clean towel, gently pressing to absorb excess moisture. Reshape the item and allow it to air dry on a flat surface away from direct sunlight or heat sources. Avoid hanging cashmere, as it can stretch the delicate fibers.",
            },
            {
              title: "3. Pilling Prevention: Gentle De-pilling",
              text: "Pilling is a natural occurrence in cashmere due to friction, but it’s easy to manage. Use a cashmere comb or fabric shaver to gently remove pills that form over time. Regular maintenance will keep your cashmere looking smooth and fresh.",
            },
            {
              title: "4. Store Properly",
              text: "Cashmere should be stored with care, especially during off-seasons. Fold your garments neatly, avoiding hanging them, which can cause stretching. For long-term storage, place them in breathable cotton bags to keep them fresh while preventing moth damage. Consider using lavender sachets or cedar balls to deter moths without harsh chemicals.",
            },
            {
              title: "5. Spot Clean for Small Stains",
              text: "If you notice a small stain on your cashmere, try spot cleaning it immediately. Use a clean, damp cloth and gently blot the area, avoiding vigorous rubbing that could damage the fabric. For stubborn stains, it’s best to consult a professional dry cleaner.",
            },
            {
              title: "6. Rotate Your Cashmere",
              text: "Wearing the same cashmere item repeatedly without giving it a rest can cause it to wear out faster. Rotate your cashmere pieces to extend their lifespan and give them time to recover between wears.",
            },
            {
              title: "7. Avoid Heat and Friction",
              text: "High heat can damage cashmere fibers, so avoid hot water, high-temperature washing machines, and dryers. Also, minimize friction by not wearing cashmere with rough fabrics or accessories that may rub against it.",
            },
            {
              title: "8. Opt for Professional Cleaning When Necessary",
              text: "While hand washing is ideal, there are times when professional care is needed, especially for larger items like coats or heavily soiled garments. Look for a dry cleaner experienced with cashmere to ensure your items are treated with care.",
            },
            {
              title: "9. Minimize Perfume and Lotion Contact",
              text: "Perfume and lotions can weaken cashmere fibers over time. To avoid this, apply them to your skin before putting on your cashmere garment and let them dry completely. This helps prevent any chemical reactions that could harm the delicate fabric.",
            },
            {
              title: "10. Handle with Love",
              text: "Cashmere is an investment in comfort and luxury. Handling your cashmere with care, from washing to storage, will reward you with beautiful, long-lasting garments that maintain their softness and shape.",
            },
          ].map(({ title, text }, index) => (
            <div key={index} className="flex flex-col w-full mb-6">
              <h2
                className="text-3xl mb-6"
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

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
            By incorporating these simple care steps into your routine, your
            cashmere garments will remain cozy, stylish, and luxurious for years
            to come. Taking the time to care for this delicate fabric ensures it
            continues to look and feel its best, allowing you to enjoy its
            timeless elegance season after season.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifeStylePage_5;
