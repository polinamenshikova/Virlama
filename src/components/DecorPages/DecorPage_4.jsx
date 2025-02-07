import React from "react";

const DecorPage_4 = () => {
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
            7 Luxurious Bathroom Design Ideas for a Spa-Like Retreat
          </h1>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
            Transform your bathroom into a spa-like retreat with these seven
            luxurious design ideas. From freestanding bathtubs to elegant
            backlit mirrors, these tips will help you create a space that’s both
            functional and stylish.
          </p>

          {[
            {
              title: "Freestanding Bathtub",
              text: "A freestanding bathtub serves as the focal point of a luxurious bathroom, offering a spa-like feel. Whether you choose a modern, minimalist tub or a vintage clawfoot design, this element adds elegance and sophistication to your space. Position it near large windows for natural light or in the center of the room to make a bold statement.",
              imgSrc: "/assets/decor_img/3/1.png",
              altText: "Freestanding Bathtub",
            },
            {
              title: "Floating Vanity",
              text: "A floating vanity creates a sense of openness in the bathroom, especially in smaller spaces. This design feature is sleek and modern, with the cabinet mounted on the wall and ample storage beneath. Pair it with vessel sinks and a large mirror for a clean, minimalist look.",
              imgSrc: "/assets/decor_img/3/2.png",
              altText: "Floating Vanity",
            },
            {
              title: "Walk-in Shower with Glass Enclosure",
              text: "A walk-in shower with frameless glass doors offers a clean, contemporary look. This shower design is ideal for creating an open, airy feel. Add rainfall showerheads and built-in niches for a truly luxurious, spa-like experience.",
              imgSrc: "/assets/decor_img/3/3.png",
              altText: "Walk-in Shower with Glass Enclosure",
            },
            {
              title: "Double Sink Vanity",
              text: "A double sink vanity is ideal for couples or families, offering both functionality and style. Choose sleek, modern lines for a contemporary look or opt for traditional wood cabinetry with vintage fixtures for a classic, elegant design.",
              imgSrc: "/assets/decor_img/3/15.png",
              altText: "Double Sink Vanity",
            },
            {
              title: "Statement Tile Flooring",
              text: "Bold, patterned tile flooring adds personality and flair to any bathroom. Geometric or intricate designs become a key design element, allowing you to keep the rest of the decor neutral while still making a bold statement.",
              imgSrc: "/assets/decor_img/3/5.png",
              altText: "Statement Tile Flooring",
            },
            {
              title: "Marble Walls and Countertops",
              text: "Marble walls and countertops provide an elegant, timeless look that enhances the luxurious feel of your bathroom. The veined marble pairs beautifully with gold or brass fixtures, creating a sophisticated and opulent atmosphere.",
              imgSrc: "/assets/decor_img/3/6.png",
              altText: "Marble Walls and Countertops",
            },
            {
              title: "Backlit Mirrors",
              text: "Backlit mirrors add a modern, futuristic touch to any bathroom. The LED lights around the edges provide a soft, ambient glow, perfect for tasks like makeup application or shaving, while contributing to the overall sleek design.",
              imgSrc: "/assets/decor_img/3/7.png",
              altText: "Backlit Mirrors",
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

export default DecorPage_4;
