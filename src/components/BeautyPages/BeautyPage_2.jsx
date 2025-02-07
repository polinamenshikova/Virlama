import MostPopularCarousel from "../MostPopularCarousel";
import { useEffect } from "react";
const BeautyPage_2 = () => {
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
        <div className="w-full md:w-[60vw] xl:w-[35vw] flex flex-col items-center px-6">
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
            Haircare
          </span>

          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published September 9, 2024
          </span>
          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            The Best Haircare Combo for Deep Repair and Moisture
          </h1>

          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/beauty_img/fino_3.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="The Best Haircare Combo for Deep Repair and Moisture"
                data-pin-media="https://virlama.com/assets/beauty_img/fino_3.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/beauty/1"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
            If you’re struggling with dry, damaged, or color-treated hair,
            finding the right combination of products can make all the
            difference. Whether it’s from coloring, perming, sun exposure, or
            environmental factors, damaged hair needs deep nourishment and
            repair. Enter the{" "}
            <strong>Fino Premium Touch Penetration Essence Hair Mask</strong>{" "}
            and the <strong>Fino Premium Touch Hair Shampoo</strong>—the
            ultimate duo for revitalizing and strengthening your hair.
          </p>

          <div className="flex flex-col w-full">
            <h1
              className="text-3xl"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              1. Fino Premium Touch Penetration Essence Hair Mask
            </h1>
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px]"
              src="/assets/beauty_img/fino_4.webp"
              alt="haircare_combo"
            />
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              The{" "}
              <strong>Fino Premium Touch Penetration Essence Hair Mask</strong>{" "}
              is packed with seven nourishing ingredients to deeply hydrate,
              repair, and strengthen your hair. Designed for fast, effective
              hair repair, this mask is perfect for anyone dealing with damage
              from heat styling, chemical treatments, or environmental exposure.
              It penetrates deep into the hair, smoothing and preventing color
              fading, making your hair healthier and shinier.
              <br />
              <br />
              <strong>What We Loved:</strong> This mask works wonders in just
              5-10 minutes! It’s perfect for a twice-weekly treatment that
              leaves your hair soft, smooth, and vibrant.
              <br />
              <br />
              <strong>How to Use:</strong> After shampooing, semi-dry your hair
              and apply an appropriate amount of the mask to the damaged areas.
              Let it sit for 5-10 minutes before rinsing thoroughly. Use twice a
              week for optimal results.
            </p>

            <h1
              className="text-3xl"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              2. Fino Premium Touch Hair Shampoo Moist
            </h1>
            <img
              className="max-h-[700px]"
              src="/assets/beauty_img/fino_6.png"
              alt="haircare_combo"
            />
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Pair the hair mask with the{" "}
              <strong>Fino Premium Touch Hair Shampoo</strong>, a gentle yet
              powerful shampoo that targets dryness, damage, and split ends.
              This rejuvenating formula offers three essential benefits: deep
              hydration, strengthening, and internal repair. Perfect for
              color-treated or permed hair, it restores hair health, leaving
              your strands smooth, soft, and less prone to breakage.
              <br />
              <br />
              <strong>What We Loved:</strong> This shampoo not only repairs
              damaged hair but also adds a silky texture without weighing it
              down. It’s ideal for everyday use, helping to maintain the
              softness and shine between hair mask treatments.
              <br />
              <br />
              <strong>How to Use:</strong> Apply 1-2 pumps of shampoo to wet
              hair, massage into the scalp, and rinse thoroughly. Follow up with
              the hair mask for best results.
            </p>

            <h1
              className="text-3xl"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Why This Combo Works
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Using the <strong>Fino Premium Touch Hair Mask</strong> and{" "}
              <strong>Shampoo</strong> together is the perfect way to restore
              and maintain healthy, vibrant hair. The shampoo prepares your hair
              by gently cleansing and adding moisture, while the mask delivers
              intense repair and protection. This powerful duo not only
              strengthens and nourishes your hair but also improves its overall
              texture and appearance, leaving it smooth, manageable, and deeply
              hydrated.
              <br />
              <br />
              Whether your hair is suffering from environmental stress,
              coloring, or heat styling, this combo is designed to give you
              salon-worthy results at home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyPage_2;
