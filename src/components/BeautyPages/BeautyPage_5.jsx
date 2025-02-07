import Button from "../Button";
import { RxPlusCircled } from "react-icons/rx";
import MostPopularCarousel from "../MostPopularCarousel";
import { RxCrossCircled } from "react-icons/rx";
import { useEffect } from "react";

const BeautyPage = () => {
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
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
            Fashion
          </span>

          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published May 27, 2024
          </span>
          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            Top Korean Sunscreens to Elevate Your Skincare Routine
          </h1>

          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/beauty_img/collage_sunscreen.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="Top Korean Sunscreens to Elevate Your Skincare Routine"
                data-pin-media="https://virlama.com/assets/beauty_img/collage_sunscreen.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/beauty/3"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
            Korean sunscreens have taken the skincare world by storm, offering
            innovative formulas that cater to various skin types and concerns.
            Whether you’re in need of a sunscreen that’s lightweight and
            hydrating, one that’s perfect for sensitive skin, or a portable
            option for on-the-go protection, these top picks have something for
            everyone.
          </p>

          <div className="flex flex-col w-full">
            <h1
              className="text-3xl "
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              1. Best Overall: Innisfree Daily UV Defense Sunscreen SPF 36
            </h1>
            <div className="flex justify-center">
              <img
                className="max-h-[450px] mb-3"
                src="/assets/beauty_img/IF_SUN-D_Packshot_2024_01_1080x1080_e1af2b43-895d-4e77-ac50-03a97421dcbd_1080x.webp"
                alt=""
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Innisfree’s Daily UV Defense Sunscreen is a standout choice for
              anyone seeking a sunscreen that does more than just protect—it
              enhances your skin's natural glow while keeping it deeply
              hydrated. This sunscreen is incredibly lightweight, making it an
              excellent choice for daily wear, especially under makeup. The
              water-based formula ensures it won’t leave a white cast, a common
              concern with sunscreens. Instead, it gives your skin a radiant,
              glowy finish. Infused with green tea extract, cica, and sunflower
              seed oil, it hydrates and provides vitamins. While some users love
              its hydrating feel, those with oily skin may find it slightly
              greasy.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">Price:</span> $15 - $20 (varies by
              retailer) <br />{" "}
              <span className="font-semibold">Key Ingredients:</span> Green tea
              extract, cica, sunflower seed oil <br />{" "}
              <span className="font-semibold">Size:</span> 50ml
            </p>

            <div className="hidden w-full mb-6">
              <table className="w-full bg-white bg-opacity-20 text-left border border-black border-opacity-50">
                <thead className="border-b border-b-black border-opacity-50 ">
                  <tr
                    className="text-[1rem]"
                    style={{
                      WebkitTextStroke: "0.1px black",
                      textStroke: "0.1px black",
                    }}
                  >
                    <th scope="col" className="pl-4 py-4 uppercase w-1/2">
                      Pros
                    </th>
                    <th scope="col" className=" py-4 uppercase w-1/2">
                      Cons
                    </th>
                  </tr>
                </thead>

                <tbody className="font-code tracking-[0.1rem] font-light text-sm">
                  <tr className="border-b border-b-black border-opacity-50 ">
                    <td className="whitespace-nowrap pl-4 py-4 w-1/2">
                      <div className="flex items-center">
                        <RxPlusCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1 "
                        />{" "}
                        {/* Adds margin to the right of the icon */}
                        Silicone-free
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 w-1/2">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1 "
                        />{" "}
                        {/* Adds margin to the right of the icon */}
                        Takes time to see results
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-b-black border-opacity-50">
                    <td className="whitespace-nowrap pl-4 py-4 w-1/2">
                      <div className="flex items-center">
                        <RxPlusCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1 "
                        />{" "}
                        {/* Adds margin to the right of the icon */}
                        Thin texture
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

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
                        Affordable Price Range
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
                        Lightweight and Non-Greasy
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
                        Hydrating Ingredients
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
                        No White Cast
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
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Lower SPF Compared to Others: SPF 36 may be less
                        protective than products with SPF 50+.
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h1
              className="text-3xl "
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              2. Best for Sensitive Skin: HaruHaru Wonder Black Rice Pure
              Mineral Relief Daily Sunscreen SPF 50+
            </h1>
            <div className="flex justify-center">
              <img
                className="max-h-[450px] mb-3"
                src="/assets/beauty_img/HARUHARUWONDERBlackRicePureMineralReliefDailySunscreen_50ml.webp"
                alt=""
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Innisfree’s Daily UV Defense Sunscreen is a standout choice for
              anyone seeking a sunscreen that does more than just protect—it
              enhances your skin's natural glow while keeping it deeply
              hydrated. This sunscreen is incredibly lightweight, making it an
              excellent choice for daily wear, especially under makeup. The
              water-based formula ensures it won’t leave a white cast, a common
              concern with sunscreens. Instead, it gives your skin a radiant,
              glowy finish. Infused with green tea extract, cica, and sunflower
              seed oil, it hydrates and provides vitamins. While some users love
              its hydrating feel, those with oily skin may find it slightly
              greasy.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">Price:</span> $15 - $20 (varies by
              retailer) <br />{" "}
              <span className="font-semibold">Key Ingredients:</span> Green tea
              extract, cica, sunflower seed oil <br />{" "}
              <span className="font-semibold">Size:</span> 50ml
            </p>

            {/* {-------------------------------------------------} */}
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
                        Mineral Formula
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
                        High SPF Protection
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
                        Antioxidant-Rich Ingredients
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
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Slight White Cast
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-b-black border-opacity-50">
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Takes Time to Absorb
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h1
              className="text-3xl "
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              3. TikTok Sensation: Beauty of Joseon Relief Sun Sunscreen
            </h1>
            <div className="flex justify-center">
              <img
                className="max-h-[450px] mb-3"
                src="/assets/beauty_img/Group-18230.png"
                alt=""
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Beauty of Joseon’s Relief Sun Rice + Probiotics Sunscreen has
              gained viral fame on TikTok, becoming a staple in many K-beauty
              routines. Known for its lightweight, non-greasy formula, this
              sunscreen provides a dewy, fresh look that absorbs quickly,
              offering all-day comfort. Unlike heavier sunscreens, it leaves no
              sticky residue, making it a popular choice for everyday wear. Its
              formula is packed with rice extract, probiotics, and niacinamide.
              Rice extract brightens and evens skin tone, while probiotics
              strengthen the skin's barrier against environmental stress.
              Niacinamide is a multitasking ingredient that helps brighten the
              skin, reduce pores, and improve texture. With SPF 50+ and a PA++++
              rating, this sunscreen offers strong protection from harmful UV
              rays. It’s loved for creating a glass-like, glowing finish that
              enhances natural radiance year-round.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">Price:</span> $18 - $22 (varies by
              retailer) <br />{" "}
              <span className="font-semibold">Key Ingredients:</span> Rice
              extract, probiotics, niacinamide <br />{" "}
              <span className="font-semibold">Size:</span> 50ml
            </p>
            {/* {-------------------------------------------------} */}
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
                        Viral Fame and Proven Results
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
                        Brightening and Skin-Strengthening Ingredients
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
                        Lightweight, Quick-Absorbing
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
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Dewy Finish May Not Suit Oily Skin
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h1
              className="text-3xl "
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              4. Best for Dry Skin: Round Lab Birch Juice Moisturizing Sun Cream
              SPF 50+
            </h1>
            <div className="flex justify-center">
              <img
                className="max-h-[450px] mb-3"
                src="/assets/beauty_img/sun_screen4.avif"
                alt=""
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              For those with dry skin, finding a sunscreen that doesn’t worsen
              dryness can be tough. Round Lab’s Birch Juice Moisturizing Sun
              Cream solves this problem by doubling as both a sunscreen and a
              moisturizer. It delivers deep hydration, making it perfect for
              those with dry or dehydrated skin. This sun cream contains key
              hydrating ingredients such as hyaluronic acid, niacinamide, amino
              acids, and birch tree sap. Hyaluronic acid retains moisture,
              keeping the skin plump and hydrated, while niacinamide brightens
              and improves skin elasticity. Birch tree sap adds a nourishing
              touch with its vitamins and minerals, promoting overall skin
              health. In addition to its SPF 50+ and PA++++ protection against
              UV rays, this sunscreen soothes and refreshes the skin, reducing
              inflammation while locking in moisture. Lightly fragranced with
              natural extracts, it provides a subtle, pleasant scent without
              being overwhelming.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">Price:</span> $20 - $25 (varies by
              retailer) <br />{" "}
              <span className="font-semibold">Key Ingredients:</span> Hyaluronic
              acid, niacinamide, birch tree sap <br />{" "}
              <span className="font-semibold">Size:</span> 50ml
            </p>

            {/* {-------------------------------------------------} */}
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
                        Deep Hydration
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
                        Soothing and Calming
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
                        High SPF and PA++++ Protection
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
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Light Fragrance May Not Suit Everyone
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h1
              className="text-3xl "
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              5. Most Convenient: Abib Airy Sunstick Smoothing Bar SPF 50+
            </h1>
            <div className="flex justify-center">
              <img
                className="max-h-[450px] mb-3"
                src="/assets/beauty_img/Group-18229.png"
                alt=""
              />
            </div>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              The Abib Airy Sunstick Smoothing Bar is a game-changer for those
              who need sun protection on the go. Its convenient stick design
              makes it perfect for quick touch-ups throughout the day. The
              sunstick’s unique curved shape fits comfortably in your hand,
              ensuring precise application on the face, neck, and other exposed
              areas. This sunscreen stick isn’t just about convenience—it
              provides effective sun protection with SPF 50+ and PA++++,
              offering strong defense against UVA and UVB rays. The formula is
              enriched with skin-calming ingredients like ecotin, camellia
              japonica seed oil, and allantoin, which help soothe irritation and
              reinforce the skin barrier, making it ideal for sensitive skin.
              The Abib Airy Sunstick is also water-resistant for up to 80
              minutes, perfect for outdoor activities or busy days. It leaves a
              natural, non-greasy finish without a white cast, and can easily be
              reapplied throughout the day—even over makeup.
            </p>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <span className="font-semibold">Price:</span> $22 - $28 (varies by
              retailer) <br />{" "}
              <span className="font-semibold">Key Ingredients:</span> Ecotin,
              camellia japonica seed oil, allantoin <br />{" "}
              <span className="font-semibold">Size:</span> 22g
            </p>

            {/* {-------------------------------------------------} */}
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
                        Convenient Stick Format
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
                        Water-Resistant
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
                        Non-Greasy Finish
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
                    <td className="pl-4 py-4 w-full">
                      <div className="flex items-center">
                        <RxCrossCircled
                          size={"16px"}
                          className="mr-[6px] relative bottom-1"
                        />
                        Potential for Over-Application
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
export default BeautyPage;
