import MostPopularCarousel from "../MostPopularCarousel";
import { useEffect } from "react";

const BeautyPage_4 = () => {
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
            Beauty Trends
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
            The 3 Newest and Most Popular Cosmetic Procedures in Korea
          </h1>

          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/beauty_img/Procedures_in_Korea.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="The 3 Newest and Most Popular Cosmetic Procedures in Korea"
                data-pin-media="https://virlama.com/assets/beauty_img/Procedures_in_Korea.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/beauty/2"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
            Korea has long been a global leader in beauty innovations, and its
            cosmetic procedures are no exception. From subtle enhancements to
            non-invasive treatments, the Korean beauty industry is pushing the
            boundaries of what’s possible in skincare and aesthetics. In this
            article, we’ll take a look at three of the newest and most popular
            cosmetic procedures in Korea that are trending right now.
          </p>

          {/* First Procedure */}
          <div className="flex flex-col w-full">
            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              1. Glass Skin Boosters: The Ultimate Dewy Glow
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Glass skin has been a major beauty trend in Korea for years, and
              the latest cosmetic innovation designed to achieve it is the{" "}
              <strong>Glass Skin Booster</strong> treatment. This procedure uses
              microinjections of hyaluronic acid and skin-boosting serums to
              deeply hydrate and plump the skin from within, creating a
              flawless, glowing complexion that looks smooth and dewy.
              <br />
              <br />
              <strong>How It Works:</strong> The treatment involves using a
              mesotherapy device to inject tiny amounts of hyaluronic acid and
              other hydrating agents directly into the skin's dermal layer.
              These injections help lock in moisture and rejuvenate the skin,
              giving it that signature dewy "glass" appearance. The process also
              stimulates collagen production, which helps in maintaining skin
              elasticity and firmness.
              <br />
              <br />
              <strong>Why It’s Popular:</strong> Many people in Korea opt for
              this treatment because it offers a non-invasive way to achieve
              that radiant, youthful glow without needing heavy makeup or
              invasive procedures. It's especially favored by those who want
              long-lasting hydration and a poreless look that mimics healthy,
              radiant skin.
              <br />
              <br />
              <strong>Benefits:</strong> Deep hydration, smoother skin texture,
              reduction in fine lines, and a glowing, glass-like finish.
              <br />
              <br />
              <strong>Downtime:</strong> Minimal to none. Slight redness may
              occur, but it disappears within a few hours.
            </p>

            {/* Second Procedure */}
            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              2. Petit Cheek Lifting: Subtle Yet Youthful
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              As we age, sagging skin and loss of elasticity are inevitable.
              However, <strong>Petit Cheek Lifting</strong> offers a
              non-surgical alternative that lifts the cheeks and redefines
              facial contours. This procedure targets the mid-face area,
              especially for those looking for a youthful, natural lift without
              going under the knife.
              <br />
              <br />
              <strong>How It Works:</strong> Petit Cheek Lifting utilizes{" "}
              <strong>PDO threads</strong> (polydioxanone), which are inserted
              under the skin with a fine needle. These threads act as
              scaffolding for sagging skin, lifting and repositioning it to
              create a more youthful appearance. Over time, the threads dissolve
              naturally, while stimulating the body’s own collagen production,
              resulting in firmer, tighter skin.
              <br />
              <br />
              <strong>Why It’s Popular:</strong> People love this procedure
              because it offers immediate results without the long recovery
              period associated with traditional facelifts. The natural lift is
              subtle, making it a great option for those who want to enhance
              their appearance without looking overdone.
              <br />
              <br />
              <strong>Benefits:</strong> Lifts sagging skin, stimulates
              collagen, and offers a more youthful, contoured look.
              <br />
              <br />
              <strong>Downtime:</strong> There may be slight bruising or
              swelling, but most people can return to daily activities within a
              few days.
            </p>

            {/* Third Procedure */}
            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              3. Water Shine Injection: The Ultimate Hydration Therapy
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              The <strong>Water Shine Injection</strong>, also known as Skin
              Hydration Therapy, is one of the most sought-after non-invasive
              procedures in Korea. It's designed to deliver intense hydration
              and nutrients directly to the skin, giving it a luminous,
              "glass-like" shine and improving overall texture and elasticity.
              <br />
              <br />
              <strong>How It Works:</strong> Tiny amounts of hyaluronic acid,
              vitamins, and peptides are injected into the dermis layer of the
              skin. These ingredients work together to deeply hydrate and
              nourish the skin, locking in moisture and promoting collagen
              production. The result is plumper, smoother, and glowing skin that
              looks healthy from within.
              <br />
              <br />
              <strong>Why It’s Popular:</strong> This procedure has become
              incredibly popular because it addresses multiple skin
              concerns—dryness, dullness, and loss of elasticity—while offering
              a long-lasting hydration boost. It’s especially favored by those
              who want to achieve a glowing, dewy complexion without the need
              for heavy makeup.
              <br />
              <br />
              <strong>Benefits:</strong> Intense hydration, improved skin
              elasticity, reduced fine lines, and a natural glow.
              <br />
              <br />
              <strong>Downtime:</strong> Minimal. Some redness may appear after
              the injections, but it typically fades within a few hours,
              allowing most people to return to their regular activities
              quickly.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Whether you're looking for a subtle lift, a glowing complexion, or
              deeply hydrated skin, these non-invasive treatments offer
              effective and natural results with minimal downtime. Korea
              continues to lead the way in beauty innovations, and these
              procedures are some of the most popular choices right now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyPage_4;
