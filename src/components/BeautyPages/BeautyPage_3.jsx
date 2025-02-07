import MostPopularCarousel from "../MostPopularCarousel";
import { useEffect } from "react";

const BeautyPage_3 = () => {
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
        <div className="w-ful md:w-[60vw] xl:w-[35vw] flex flex-col items-center px-6">
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
            Skincare
          </span>

          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published September 10, 2024
          </span>
          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            The Ultimate Guide to Applying Skincare: What Goes First and How
            Long to Wait
          </h1>
          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className=" max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/beauty_img/skincare_routine.jpg"
              alt="skincare_routine"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity ">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="The Ultimate Guide to Applying Skincare: What Goes First and How Long to Wait"
                data-pin-media="https://virlama.com/assets/beauty_img/skincare_routine.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/beauty/6"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
            Knowing the correct order of applying skincare products can make a
            big difference in how effective they are. With so many serums,
            toners, moisturizers, and more, it can be tricky to figure out what
            should go first and how much time to wait between each step. Here’s
            a simple guide to help you build a skincare routine that works
            effectively and delivers real results.
          </p>

          <div className="flex flex-col w-full">
            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              1. Cleanser
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              The foundation of every good skincare routine starts with a clean
              canvas. Cleansing removes impurities, makeup, and excess oil from
              your skin, allowing the rest of your products to work more
              effectively.
              <br />
              <br />
              <strong>How to Use:</strong> Choose a gentle cleanser suitable for
              your skin type. Wash your face with lukewarm water, gently
              massaging the cleanser into your skin for 30-60 seconds. Rinse and
              pat dry.
              <br />
              <br />
              <strong>Tip:</strong> If you wear makeup or sunscreen, consider
              doing a <strong>double cleanse</strong>. Use an oil-based cleanser
              first, followed by your regular water-based cleanser to ensure
              your skin is thoroughly clean.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              2. Toner
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Next up is toner, a step many overlook but shouldn’t. A toner
              helps to balance your skin’s pH, remove any leftover impurities
              from cleansing, and prep your skin to better absorb the following
              products.
              <br />
              <br />
              <strong>How to Use:</strong> Apply toner with a cotton pad or pat
              it directly onto your skin with clean hands. Let it absorb for a
              few seconds.
              <br />
              <br />
              <strong>Tip:</strong> Choose a hydrating toner with ingredients
              like <strong>hyaluronic acid</strong> or{" "}
              <strong>rose water</strong> for extra moisture or an exfoliating
              toner with <strong>AHAs</strong> or <strong>BHAs</strong> if you
              need to target acne or texture.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              3. Serums
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Now comes the targeted treatment part of your routine – serums.
              These concentrated formulations are designed to address specific
              skin concerns, from brightening and anti-aging to hydration and
              acne prevention.
              <br />
              <br />
              <strong>How to Use:</strong> Apply 1-2 drops of serum directly
              onto your face, then gently press and pat it into your skin. Give
              your skin time to absorb the serum, about 30 seconds to 1 minute,
              before moving to the next step.
              <br />
              <br />
              <strong>Tip:</strong> When layering serums, apply the{" "}
              <strong>thinnest, most lightweight</strong> formula first, such as
              a <strong>hyaluronic acid</strong> serum, followed by thicker
              serums like <strong>retinol</strong> or <strong>vitamin C</strong>
              .
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              4. Eye Cream
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              The skin around your eyes is thinner and more delicate than the
              rest of your face, which is why it’s essential to use an eye cream
              to keep this area hydrated and target concerns like dark circles
              or puffiness.
              <br />
              <br />
              <strong>How to Use:</strong> Use your ring finger to gently dab a
              small amount of eye cream under your eyes, being careful not to
              tug at the skin. Let it absorb for about 1 minute.
              <br />
              <br />
              <strong>Tip:</strong> Look for an eye cream with ingredients like{" "}
              <strong>caffeine</strong> for puffiness or{" "}
              <strong>peptides</strong> for firming and anti-aging.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              5. Moisturizer
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Moisturizer locks in all the goodness from your previous skincare
              steps, keeping your skin hydrated and protected throughout the day
              or night. Even if you have oily skin, using a lightweight
              moisturizer is essential to maintain your skin’s balance.
              <br />
              <br />
              <strong>How to Use:</strong> Apply a dime-sized amount of
              moisturizer, spreading it evenly across your face and neck.
              Massage it in with upward motions to encourage circulation.
              <br />
              <br />
              <strong>Tip:</strong> If your skin tends to be dry, opt for a{" "}
              <strong>richer cream</strong> at night, and use a{" "}
              <strong>lighter gel-based</strong> moisturizer during the day.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              6. Face Oil (Optional)
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              If you have dry skin or want to lock in extra hydration, face oils
              can be a fantastic addition to your routine. Face oils help to
              seal in moisture and provide a natural glow.
              <br />
              <br />
              <strong>How to Use:</strong> After applying your moisturizer, warm
              a few drops of oil in your hands and press it gently onto your
              face and neck.
              <br />
              <br />
              <strong>Tip:</strong> For an extra dewy look, mix a few drops of
              face oil into your foundation for a luminous finish.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              7. Sunscreen (Daytime Routine Only)
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              The final and <strong>most crucial step</strong> of your morning
              skincare routine is sunscreen. Sunscreen protects your skin from
              harmful UV rays that cause premature aging, hyperpigmentation, and
              skin cancer. No matter what, this step should never be skipped!
              <br />
              <br />
              <strong>How to Use:</strong> Apply a generous amount (about a
              nickel-sized amount) of sunscreen to your face and neck. Reapply
              every 2 hours if you’re spending extended time outdoors.
              <br />
              <br />
              <strong>Tip:</strong> Use a{" "}
              <strong>broad-spectrum sunscreen</strong> with at least{" "}
              <strong>SPF 30</strong> for daily wear. If you’re layering makeup,
              opt for a sunscreen mist for easy reapplication.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              How Long Should You Wait Between Products?
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              In general, it’s a good idea to give your skin about{" "}
              <strong>30 seconds to 1 minute</strong> between each step to allow
              for proper absorption. You don’t want to rush through your routine
              or layer products too quickly, as this can lead to pilling or less
              effective results.
              <br />
              <br />
              However, certain products like{" "}
              <strong>retinol or chemical exfoliants</strong> may need a bit
              more time to absorb, especially if they are more active
              treatments. In those cases, waiting about{" "}
              <strong>5-10 minutes</strong> before applying the next product can
              ensure the ingredients are fully absorbed and don’t clash with
              others.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Final Thoughts
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Following the correct order of applying skincare is crucial for
              getting the most out of your products. Serums, moisturizers, and
              treatments all have specific roles to play, and when used
              properly, they can give you glowing, healthy skin. Always remember
              to give your skin time to absorb each product and adjust your
              routine based on your skin’s needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyPage_3;
