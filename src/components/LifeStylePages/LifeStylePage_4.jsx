import { useEffect } from "react";

const LifeStylePage_4 = () => {
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
            Beauty & Wellness
          </span>

          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published September 19, 2024
          </span>

          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            The Beauty Benefits of Verisol Collagen
          </h1>

          <div className="flex mb-6 relative group">
            {/* The Image */}
            <img
              className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] hover:bg-white"
              src="https://virlama.com/assets/lifestyle_img/Collagen.jpg"
              alt="skincare_collage"
            />
            {/* The Pinterest Save Button */}
            <button className="absolute pin-button right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href="https://www.pinterest.com/pin/create/button/"
                data-pin-do="buttonPin"
                data-pin-hover="true"
                data-pin-description="The Beauty Benefits of Verisol Collagen"
                data-pin-media="https://virlama.com/assets/lifestyle_img/Collagen.jpg?resize=1600:*"
                data-pin-url="https://virlama.com/lifestyle/4"
                target="_blank"
                data-pin-height="26"
              ></a>
            </button>
          </div>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-8">
            When it comes to maintaining youthful, glowing skin, collagen is
            key. As we age, our natural collagen production decreases, leading
            to wrinkles, sagging, and a loss of elasticity. That’s where{" "}
            <strong>Verisol Collagen</strong> comes in—a special form of
            collagen that works wonders for your skin, hair, and nails. Let’s
            dive into why Verisol is so effective and how the{" "}
            <strong>Leanfit Collagen and Beauty</strong> supplement combines two
            types of collagen to help you achieve that healthy, radiant look.
          </p>

          <div className="flex flex-col w-full">
            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              What Is Verisol Collagen?
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>Verisol Collagen</strong> is a bioactive collagen peptide
              specifically designed to target skin health from the inside out.
              Unlike regular collagen, Verisol is easier for the body to absorb,
              making it more effective at boosting skin elasticity, reducing
              wrinkles, and improving overall skin appearance.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              How the Combination of Two Types of Collagen Works
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>
                {" "}
                <a
                  href="https://i.refs.cc/o1OGs5M8?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoyNDI3MzQ4Nzg0fQ%3D%3D"
                  className=" hover:text-n-5 transition-colors"
                >
                  Leanfit Collagen and Beauty
                </a>
              </strong>{" "}
              takes your beauty routine to the next level by combining two types
              of collagen: <strong>Hydrolyzed Bovine Collagen</strong> and{" "}
              <strong>Verisol Collagen</strong>. These two forms of collagen
              work together to deliver even better results for your skin, hair,
              and nails.
              <br />
              <br />
              <strong>Hydrolyzed Bovine Collagen</strong> focuses on general
              skin, hair, and nail health. It’s broken down into smaller
              peptides, making it easy to absorb and use throughout the body.
              This collagen works on the deeper layers of the skin, promoting
              firmness, hydration, and overall structure.
              <br />
              <br />
              <strong>Verisol Collagen</strong> targets the skin specifically,
              stimulating the body’s own collagen production in the upper layers
              of the skin. This helps smooth wrinkles, increase skin elasticity,
              and improve hydration levels. Verisol’s effectiveness has been
              clinically proven to reduce fine lines and wrinkles.
              <br />
              <br />
              Together, these two types of collagen provide a comprehensive
              approach to skin health. While hydrolyzed collagen strengthens and
              nourishes the skin’s deeper layers, Verisol focuses on the
              surface, giving you a visible glow and more youthful appearance.
            </p>

            <h2
              className="text-3xl mb-3"
              style={{
                WebkitTextStroke: "0.5px black",
                textStroke: "0.5px black",
              }}
            >
              Leanfit Collagen and Beauty: The Perfect Blend for Skin Health
            </h2>
            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              <strong>
                <a
                  href="https://i.refs.cc/o1OGs5M8?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoyNDI3MzQ4Nzg0fQ%3D%3D"
                  className=" hover:text-n-5 transition-colors"
                >
                  Leanfit Collagen and Beauty
                </a>
              </strong>{" "}
              combines Verisol with other powerful ingredients to support not
              just your skin, but also your hair and nails. Here’s why it works:
            </p>

            <ul className="list-disc ml-6 mb-6 font-code tracking-[0.1rem] font-light text-[18px] text-n-3">
              <li className="mb-4">
                <strong>Hydrolyzed Collagen (Bovine - Skin) 7.5g:</strong> This
                collagen helps restore the skin’s natural structure, promoting
                firmness and hydration. It also strengthens hair and nails,
                making it a great all-rounder for beauty.
              </li>
              <li className="mb-4">
                <strong>Verisol Collagen 2.5g:</strong> The star ingredient!
                Verisol boosts skin elasticity, smooths wrinkles, and helps
                maintain a youthful glow by stimulating your body’s own collagen
                production.
              </li>
              <li className="mb-4">
                <strong>Vitamin C (60mg):</strong> Known for its role in
                collagen synthesis, Vitamin C helps your body produce more
                collagen and protects your skin from damage caused by free
                radicals. It’s also key for brightening and maintaining an even
                complexion.
              </li>
              <li className="mb-4">
                <strong>Hyaluronic Acid (10mg):</strong> Hyaluronic Acid is your
                skin’s hydration hero. It helps your skin retain moisture, which
                keeps it plump, smooth, and radiant. Regular intake can improve
                skin hydration and reduce the appearance of fine lines.
              </li>
              <li className="mb-4">
                <strong>Silicon (6.25mg):</strong> Derived from bamboo, Silicon
                supports skin structure and elasticity. It works with collagen
                to strengthen not only your skin, but also your hair and nails,
                reducing brittleness and encouraging growth.
              </li>
            </ul>

            <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
              Overall,{" "}
              <strong>
                <a
                  href="https://i.refs.cc/o1OGs5M8?smile_ref=eyJzbWlsZV9zb3VyY2UiOiJzbWlsZV91aSIsInNtaWxlX21lZGl1bSI6IiIsInNtaWxlX2NhbXBhaWduIjoicmVmZXJyYWxfcHJvZ3JhbSIsInNtaWxlX2N1c3RvbWVyX2lkIjoyNDI3MzQ4Nzg0fQ%3D%3D"
                  className=" hover:text-n-5 transition-colors"
                >
                  Leanfit Collagen and Beauty
                </a>
              </strong>{" "}
              offers a complete solution for enhancing your skin’s appearance,
              promoting hair and nail health, and boosting overall collagen
              production. By combining <strong>Hydrolyzed Collagen</strong> and{" "}
              <strong>Verisol</strong>, along with essential nutrients like{" "}
              <strong>Vitamin C</strong>, <strong>Hyaluronic Acid</strong>, and{" "}
              <strong>Silicon</strong>, this supplement helps you achieve a
              radiant, youthful glow from the inside out. Whether you're looking
              to reduce wrinkles, improve skin elasticity, or strengthen your
              hair and nails, this comprehensive blend of ingredients provides
              powerful support for your beauty goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeStylePage_4;
