import React from "react";

const DecorPage_5 = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <div className="w-full lg:w-[60vw] xl:w-[35vw] flex flex-col items-center px-6">
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
            Home & Design
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
            7 Simple Bedroom Refresh Ideas for a Stylish and Cozy Retreat
          </h1>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
            Want to refresh your bedroom without a complete overhaul? These
            seven simple ideas can help transform your space into a cozy and
            stylish retreat. From updating your nightstand to adding soft rugs
            and modern furniture, these tips will give your room a whole new
            vibe.
          </p>

          {[
            {
              title: "Nightstand Refresh",
              text: "Style your modern nightstand with a sleek lamp, a small stack of books, a scented candle, and a ceramic tray for essentials. The room features neutral tones with soft textures, creating a balanced and stylish look that’s both functional and decorative.",
              imgSrc: "/assets/decor_img/4/8.png",
              altText: "Nightstand Refresh",
            },
            {
              title: "Cozy Rug Addition",
              text: "Place a large, soft area rug under the bed, extending out on all sides for a cozy vibe. The plush texture of the rug creates warmth, and combined with layered bedding, soft throws, and natural lighting, it makes the room a perfect retreat.",
              imgSrc: "/assets/decor_img/4/9.png",
              altText: "Cozy Rug Addition",
            },
            {
              title: "Furniture Upgrade",
              text: "Update your bedroom with sleek, modern furniture like a dresser or bedside table in dark wood or bold colors like navy blue. Minimalist decor like a vase or framed photo adds a chic touch, while the clean lines of the furniture give the room a fresh look.",
              imgSrc: "/assets/decor_img/4/10.png",
              altText: "Furniture Upgrade",
            },
            {
              title: "Bench or Ottoman at Foot of Bed",
              text: "Add an upholstered bench or ottoman at the foot of the bed for extra seating or storage. This piece not only provides functionality but also adds a layer of coziness and style to the room, balancing neutral bedding with soft lighting.",
              imgSrc: "/assets/decor_img/4/11.png",
              altText: "Bench or Ottoman",
            },
            {
              title: "Scent Refresh",
              text: "Introduce calming scents like lavender or eucalyptus using a diffuser or scented candles. These elements, paired with natural materials and soft lighting, enhance the peaceful and inviting ambiance of your bedroom.",
              imgSrc: "/assets/decor_img/4/12.png",
              altText: "Scent Refresh",
            },
            {
              title: "Mixing Patterns and Textures",
              text: "Mixing patterns and textures in your bedding and decor can bring depth and personality to your bedroom. Layer patterned throw pillows, textured blankets, and a colorful area rug to create a cozy, layered look.",
              imgSrc: "/assets/decor_img/4/13.png",
              altText: "Mixing Patterns and Textures",
            },
            {
              title: "Statement Mirror",
              text: "A large, eye-catching mirror with a gold or silver frame can brighten your bedroom and make it feel more spacious. Whether hung on the wall or leaning against it, a statement mirror adds elegance and sophistication to the room.",
              imgSrc: "/assets/decor_img/4/14.png",
              altText: "Statement Mirror",
            },
          ].map(({ title, text, imgSrc, altText }, index) => (
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
              <img
                className="max-h-[450px] md:max-h-[500px] lg:max-h-[800px] xl:max-[900px] mb-3"
                src={imgSrc}
                alt={altText}
              />

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

export default DecorPage_5;
