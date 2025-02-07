/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { RxPlusCircled, RxCrossCircled } from "react-icons/rx";

import MostPopularCarousel from "../MostPopularCarousel";

const BeautyPage_6 = () => {
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
            Beauty
          </span>
          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published October 8, 2024
          </span>
          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            PDRN and Microneedling Serums: The Secret Duo for Radiant Skin
          </h1>
          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/beauty_img/salmon_dna.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="PDRN and Microneedling Serums: The Secret Duo for Radiant Skin"
                data-pin-media="https://virlama.com/assets/beauty_img/salmon_dna.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/beauty/1"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
            In the quest for radiant, youthful skin, skincare enthusiasts are
            always on the lookout for the next big thing. Enter PDRN serums and
            microneedling serums—two powerful skincare solutions that promise to
            transform your complexion. From intense hydration to deeper skin
            rejuvenation, these products are becoming staples in advanced beauty
            routines. Let’s explore what makes these serums so effective and how
            combining them can unlock your skin’s full potential.
          </p>

          <div className="flex flex-col w-full">
            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              What is PDRN: The Secret to Skin Regeneration
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              PDRN (Polydeoxyribonucleotide) is a cutting-edge skincare
              ingredient that has captivated the beauty industry. Extracted from
              DNA molecules found in salmon, PDRN boasts a structure that
              closely resembles human DNA, allowing it to integrate seamlessly
              with the skin’s natural processes. This molecular match enables
              PDRN to work deep within the skin, offering remarkable benefits
              such as enhanced skin repair, reduced inflammation, and boosted
              collagen production, all of which contribute to a more youthful
              and resilient complexion.
            </p>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">How It Works:</span> PDRN serums
              can be used topically or in more intensive treatments like
              mesotherapy, where small amounts are injected directly into the
              skin’s deeper layers. Once applied, PDRN acts as a powerful
              catalyst for skin renewal, encouraging the repair of micro-damages
              and stimulating the growth of new cells. This makes it an ideal
              choice for those looking to diminish fine lines, acne scars, and
              dullness. With consistent use, PDRN serums help to improve skin
              elasticity and firmness, creating a complexion that is plumper,
              smoother, and more radiant.
            </p>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">Why It’s Popular:</span> The
              growing popularity of PDRN serums can be attributed to their
              ability to hydrate the skin deeply while supporting its natural
              healing processes—all without the need for invasive procedures.
              They have become a go-to for individuals seeking to revitalize
              their skin’s appearance with minimal downtime, making them a
              favorite among those who crave a dewy, refreshed look without the
              hassle of complex treatments.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              VT PDRN Essence 100: Deep Hydration and Regeneration
            </h1>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              One of the most popular PDRN-based products on the market is the
              <strong> VT PDRN Essence 100</strong>, a powerful essence designed
              to deliver intense hydration and promote skin regeneration. With
              its high concentration of PDRN, the essence is highly effective in
              revitalizing tired, dull skin and improving overall texture. It
              deeply replenishes moisture levels, making it ideal for dry or
              dehydrated complexions by locking in hydration to leave the skin
              plump and smooth. Additionally, the essence supports the skin’s
              natural healing process, helping to repair micro-damages and
              stimulate the growth of new, healthy skin cells, resulting in
              improved elasticity and a firmer, more youthful appearance. Beyond
              its regenerative benefits, the{" "}
              <strong>VT PDRN Essence 100</strong> includes soothing ingredients
              that calm the skin, reducing redness and irritation, making it a
              suitable choice for those with sensitive skin. The combined
              effects of hydration, regeneration, and soothing care make it a
              versatile and rejuvenating addition to any skincare routine.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Microneedling in a Bottle: The Innovation Behind Enhanced
              Absorption
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Microneedling in a bottle is a revolutionary approach that has
              captivated skincare enthusiasts, particularly on social media.
              These products use micro-sized needles derived from marine
              sponges, known as spicules, to enhance the penetration of active
              ingredients. Unlike traditional microneedling devices, this method
              delivers similar benefits without physical devices or professional
              sessions.
            </p>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">How It Works:</span> The
              micro-spicules in these serums serve two main purposes. First,
              they create a gentle exfoliating effect, reducing the thickness of
              the skin's outer layer and helping to remove dead skin cells. This
              process temporarily weakens the skin barrier, allowing active
              ingredients such as hyaluronic acid, peptides, and PDRN to
              penetrate more deeply. The second mechanism is through the
              formation of micro-channels, which allow active ingredients to
              seep into the deeper layers of the skin, enhancing their
              absorption and efficacy. Studies have shown that these
              micro-spicules can increase the penetration of active ingredients
              by up to 400%, delivering results faster than traditional topical
              applications.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              VT Cica Reedle Shot 100: A Game-Changing Microneedling Serum
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              One of the most talked-about products in this category is the{" "}
              <strong> VT Cica Reedle Shot 100</strong>, which leverages the
              concept of microneedling in a bottle. This serum uses the
              aforementioned micro-spicules to achieve the effects of a
              microneedling session in a gentle, needle-free format. The
              spicules derived from marine sponge not only create micro-channels
              but also encourage the skin to produce more collagen, offering a
              dual benefit of enhanced absorption and skin renewal.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">How It Works:</span> The{" "}
              <strong>VT Cica Reedle Shot 100</strong> is enriched with soothing
              centella asiatica, an ingredient known for its ability to reduce
              redness and irritation. When applied, the serum’s spicules provide
              a gentle pricking sensation, signaling the skin to heal and
              regenerate. This creates a perfect environment for deeper
              absorption of active ingredients, allowing them to work more
              effectively on concerns like uneven texture, fine lines, and
              enlarged pores. The result is smoother, more radiant skin that
              looks refreshed and rejuvenated.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">Why It’s Popular:</span> The VT
              Cica Reedle Shot 100 offers a way to enjoy the benefits of
              microneedling without needles, making it an excellent option for
              those with sensitive skin. It helps improve skin texture and
              elasticity, providing noticeable results with regular use.
            </p>

            <h1
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              VT PDRN Essence 100 and VT Cica Reedle Shot 100: A Powerful Duo
            </h1>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              When it comes to achieving transformative skin results, the
              combination of the <strong>VT PDRN Essence 100</strong> and the
              <strong> VT Cica Reedle Shot 100</strong> can elevate your
              skincare routine. Using the VT Cica Reedle Shot 100 first prepares
              the skin for deeper absorption, allowing the PDRN molecules from
              the VT PDRN Essence 100 to reach the deeper layers.
            </p>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">Why Use Them Together:</span> This
              combination ensures maximum hydration, improved texture, and
              enhanced elasticity, providing professional-grade results from the
              comfort of home. Together, they create a synergistic effect,
              leaving your skin smooth, firm, and glowing.
            </p>

            <div className="flex flex-col w-full mb-6 space-y-4">
              {/* Pros Table */}
              <table className="w-full bg-white bg-opacity-20 text-left border border-black border-opacity-50">
                <thead className="border-b border-b-black border-opacity-50">
                  <tr
                    className="text-[1rem]"
                    style={{
                      WebkitTextStroke: "0.1px black",
                      textStroke: "0.1px black",
                    }}
                  >
                    <th scope="col" className="pl-4 py-4 uppercase w-full">
                      Pros
                    </th>
                  </tr>
                </thead>
                <tbody className="font-code tracking-[0.1rem] font-light text-sm">
                  <tr className="border-b border-b-black border-opacity-50">
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxPlusCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Enhanced Skin Regeneration
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-b-black border-opacity-50">
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxPlusCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Intense Hydration
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-b-black border-opacity-50">
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxPlusCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Boosted Collagen Production
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-b-black border-opacity-50">
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxPlusCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Non-Invasive Skin Renewal
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Cons Table */}
              <table className="w-full bg-white bg-opacity-20 text-left border border-black border-opacity-50">
                <thead className="border-b border-b-black border-opacity-50">
                  <tr
                    className="text-[1rem]"
                    style={{
                      WebkitTextStroke: "0.1px black",
                      textStroke: "0.1px black",
                    }}
                  >
                    <th scope="col" className="pl-4 py-4 uppercase w-full">
                      Cons
                    </th>
                  </tr>
                </thead>
                <tbody className="font-code tracking-[0.1rem] font-light text-sm">
                  <tr className="border-b border-b-black border-opacity-50">
                    <td className=" pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Mild Irritation Possible
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-b-black border-opacity-50">
                    <td className=" pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Consistent Use Required
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-b-black border-opacity-50">
                    <td className="whitespace-nowrap pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Potential for Over-Exfoliation
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyPage_6;
