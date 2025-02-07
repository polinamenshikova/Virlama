import MostPopularCarousel from "../MostPopularCarousel";
import { useEffect } from "react";

const BeautyPage_1 = () => {
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
      <div className="flex justify-center ">
        <div className=" w-full md:w-[60vw] xl:w-[35vw] flex flex-col items-center px-6">
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3 mr-5">
            Fashion
          </span>

          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published September 8, 2024
          </span>
          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            How to Stay with Perfect Nails on a Budget in This Current Economy
          </h1>

          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/beauty_img/nails-collage.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="How to Stay with Perfect Nails on a Budget in This Current Economy"
                data-pin-media="https://virlama.com/assets/beauty_img/nails-collage.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/beauty/5"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
            In today's challenging economy, maintaining your beauty routine
            without breaking the bank can be a struggle. Thankfully, press-on
            nails have emerged as a budget-friendly solution for achieving
            salon-worthy manicures at home. One brand that consistently delivers
            style and quality is KISS. Known for offering a wide range of
            affordable and fashionable press-on nails, KISS nails provide an
            easy way to keep your nails looking flawless. However, not all
            press-on nails are created equal. We put three popular KISS nail
            sets to the test to evaluate their design, durability, and overall
            value. Plus, we’ll share a cost-saving tip to help your press-ons
            last even longer—so you can keep your nails perfect without
            stretching your budget!
          </p>

          <div className="flex flex-col w-full">
            <h1
              className="text-3xl"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              1. Classy Wedding: Dashing
            </h1>
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px]"
              src="/assets/beauty_img/KISS-Classy-Premium-Medium.webp"
              alt="sunscreen_collage"
            />
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              If you love the timeless look of a French manicure, but want
              something a little more modern, KISS Classy Wedding nails are your
              perfect match. This set reimagines the classic French mani with a
              contemporary twist, featuring a medium-length, almond-shaped
              design. The high-shine gel top coat gives the nails a
              salon-quality finish, and the waterproof and smudge-proof formula
              ensures they last up to a week.
              <br />
              <br />
              <strong>What We Loved:</strong> These nails are not only stylish
              but also incredibly easy to remove without damaging your natural
              nails. The flexible fit makes them comfortable to wear, and the
              included kit has everything you need for a flawless at-home
              manicure.
              <br />
              <br />
              <strong>The Drawback:</strong> While the nails themselves are
              durable, the white tips tend to scratch easily, which can take
              away from their initial pristine look.
            </p>

            <h1
              className="text-3xl"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              2. Majestic Heirloom: Your Grace
            </h1>
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px]"
              src="/assets/beauty_img/nails.jpg"
              alt="sunscreen_collage"
            />
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Majestic Heirloom nails by KISS are designed for those who love to
              make a bold statement. These long, coffin-shaped nails with a
              jewel-encrusted finish radiate luxury. They’re perfect for special
              occasions when you want your nails to stand out. What makes them
              even more impressive is their reusability – you can wear them up
              to three times by using adhesive tabs for the first two wears and
              glue for the final application.
              <br />
              <br />
              <strong>What We Loved:</strong> The high-end look and feel of
              these nails are unmatched. The combination of durability, shine,
              and design makes them ideal for anyone wanting a glamorous,
              salon-like manicure at home.
              <br />
              <br />
              <strong>The Drawback:</strong> Because of their long length, these
              nails might not be the most practical for everyday tasks, but
              they’re certainly worth it for an event or special occasion.
            </p>

            <h1
              className="text-3xl"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              3. Bare but Better: Nudies
            </h1>
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px]"
              src="/assets/beauty_img/2023-10-03.webp"
              alt="sunscreen_collage"
            />
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              For those who prefer a natural, understated look, Bare But Better
              nails are designed to offer a “no-makeup” vibe. These short,
              square-shaped nails are meant to blend seamlessly with your
              natural nails. While the idea of a TruNude nail that flatters all
              skin tones sounds appealing, this set fell short of expectations.
              <br />
              <br />
              <strong>What We Loved:</strong> The nails are easy to apply, and
              the design is minimalistic, perfect for someone who wants a subtle
              manicure without the effort of going to the salon.
              <br />
              <br />
              <strong>The Drawback:</strong> The biggest issue is transparency.
              Many users found that their natural nails were visible through the
              fake ones, making them appear too thin and ineffective at creating
              the flawless nude look they promised.
            </p>

            <h1
              className="text-3xl"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              The Secret to Long-Lasting Press-On Nails: Upgrade Your Glue!
            </h1>
            <img
              className="max-h-[600px]"
              src="/assets/beauty_img/Group-18231.png"
              alt="sunscreen_collage"
            />
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              While KISS nails come with a convenient glue, it typically holds
              your manicure in place for around four days. If you're someone who
              needs their nails to last longer, we've discovered a superior
              alternative that will make your press-ons last up to two weeks –
              the <strong>NYK1 Super Strong Nail Glue</strong>.
              <br />
              <br />
              This salon-grade glue dries quickly, offers a waterproof hold, and
              has a built-in precision brush for easy application. Not only does
              it work seamlessly with KISS nails, but it’s also compatible with
              other brands of press-ons, nail tips, and even nail art. Whether
              you prefer short almond-shaped nails or long coffin styles, NYK1
              ensures that your manicure stays flawless and secure through
              everyday wear.
              <br />
              <br />
              With NYK1, you no longer have to worry about your nails popping
              off or lifting. It’s the perfect solution for anyone looking to
              extend the life of their manicure, whether you're headed to an
              event or just want long-lasting nails that won’t budge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyPage_1;
