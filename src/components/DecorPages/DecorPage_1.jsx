import React from "react";
import RecipeCarousel from "../RecipePages/RecipeCarousel";

const DecorPage_1 = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <div className="w-full lg:w-[60vw] xl:w-[35vw] flex flex-col items-center px-6">
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
            Home & Design
          </span>
          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published September 25, 2024
          </span>
          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            Modern and Elegant Living Room Inspirations
          </h1>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
            Creating a stunning living room that balances comfort and style is a
            true art form. Whether you’re drawn to sleek modern designs or
            classic opulence, the right combination of colors, textures, and
            decor can transform any space into a sophisticated retreat. In this
            collection, we explore a range of elegant living room designs that
            capture the essence of modern luxury. From urban glamour with
            breathtaking city views to serene minimalism that emphasizes
            tranquility, each space is thoughtfully curated to inspire your next
            interior makeover. Discover how subtle details and bold statements
            come together to create rooms that are not only visually striking
            but also welcoming and functional.
          </p>

          {[
            {
              title: "Minimalist Tranquility",
              text: "This living room perfectly embodies minimalist luxury with its expansive floor-to-ceiling windows and serene outdoor view. The neutral color palette of soft beige and cream tones enhances the sense of calm, while the sleek, low-profile furniture provides a sophisticated aesthetic. The coffered ceiling adds architectural interest, subtly drawing the eye upward and contributing to the spacious feel of the room. The carefully placed abstract artwork and understated decor maintain the minimalist vibe without compromising on style, creating an elegant space that invites relaxation and introspection.",
              imgSrc: "/assets/decor_img/11.png",
              altText: "Bold Blue Elegance",
            },
            {
              title: "Serene Minimalism",
              text: "Soft neutrals and clean lines define this serene living room. The delicate sheer curtains allow natural light to flood the space, while the abstract artwork and sculptural decor add a touch of elegance to the otherwise understated setting.",
              imgSrc: "/assets/decor_img/2.png",
              altText: "Serene Minimalism",
            },
            {
              title: "Rustic Dining Charm",
              text: "A large dining table with black chairs and an oak rug anchors this rustic dining room. The vaulted ceilings and open layout create a sense of spaciousness, making it an ideal spot for family gatherings and entertaining.",
              imgSrc: "/assets/decor_img/3.png",
              altText: "Rustic Dining Charm",
            },
            {
              title: "Urban Glamour",
              text: "This living room exudes modern sophistication with its breathtaking cityscape backdrop and luxurious interior design. The mirrored wall panels and crystal chandeliers enhance the sense of opulence, reflecting light and adding depth to the space. The plush seating arrangement in pristine white creates a striking contrast against the bold black-and-white area rug, anchoring the room with a touch of drama. The use of metallic accents and the glass coffee table contribute to the sleek, contemporary vibe, while the delicate floral arrangements soften the overall look, adding an element of natural beauty to this glamorous urban retreat.",
              imgSrc: "/assets/decor_img/12.png",
              altText: "Modern Gray Chic",
            },
            {
              title: "Luxurious High Ceilings",
              text: "This luxurious space features high ceilings and expansive windows, filling the room with natural light. The crystal chandelier and plush furnishings add a touch of opulence, making this the epitome of elegant living.",
              imgSrc: "/assets/decor_img/5.png",
              altText: "Luxurious High Ceilings",
            },
            {
              title: "Minimalist Monochrome",
              text: "This living room embraces minimalist aesthetics with its monochrome palette. The round coffee table and abstract artwork provide visual interest, while the soft furnishings and subtle decor add warmth to the clean, modern look.",
              imgSrc: "/assets/decor_img/6.png",
              altText: "Minimalist Monochrome",
            },
            {
              title: "Contemporary Comfort",
              text: "Featuring a cozy sectional sofa and a sleek marble coffee table, this living room combines comfort with contemporary style. The built-in shelves and geometric artwork add structure, making the space both functional and visually appealing.",
              imgSrc: "/assets/decor_img/7.png",
              altText: "Contemporary Comfort",
            },
            {
              title: "Subtle Earth Tones",
              text: "This space highlights the beauty of subtle earth tones. The soft gray sofa and wooden accents create a calm and inviting atmosphere, perfect for relaxing or hosting guests.",
              imgSrc: "/assets/decor_img/8.png",
              altText: "Subtle Earth Tones",
            },
            {
              title: "Grand Opulence",
              text: "A luxurious living room with high ceilings and floor-to-ceiling windows, this space is defined by its grandeur. The sparkling chandelier and plush seating make it an ideal spot for sophisticated gatherings.",
              imgSrc: "/assets/decor_img/9.png",
              altText: "Grand Opulence",
            },
            {
              title: "Floral Sophistication",
              text: "This elegant living room beautifully combines modern and traditional elements. The sleek marble coffee table with gold accents serves as a luxurious centerpiece, while the plush sofa and artful cushions add a cozy touch. The carefully curated floral arrangements bring a burst of freshness and color to the space, creating a harmonious balance between contemporary design and natural beauty.",
              imgSrc: "/assets/decor_img/10.png",
              altText: "Floral Sophistication",
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

export default DecorPage_1;
