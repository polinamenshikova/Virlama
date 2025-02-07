import React from "react";

const DecorPage_6 = () => {
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
            7 Bathroom Design Features for a Luxurious and Relaxing Space
          </h1>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
            Create a luxurious and relaxing bathroom with these design ideas.
            From rain showerheads to heated floors, these tips will help you
            transform your space into a calming retreat with both style and
            functionality.
          </p>

          {[
            {
              title: "Rain Showerhead",
              text: "A rain showerhead installed in the ceiling of a walk-in shower delivers a gentle rainfall effect, enhancing the spa-like experience. Paired with textured stone tiles, the shower becomes a calming retreat, perfect for relaxation.",
              imgSrc: "/assets/decor_img/3/8.png",
              altText: "Rain Showerhead",
            },
            {
              title: "Open Shelving for Towels",
              text: "Open shelving made of natural wood or metal provides easy access to towels and toiletries while adding visual interest to the bathroom. Position the shelves above the toilet or near the shower for a functional and stylish design.",
              imgSrc: "/assets/decor_img/3/9.png",
              altText: "Open Shelving for Towels",
            },
            {
              title: "Free-Standing Basin Sink",
              text: "A freestanding basin sink mounted on a pedestal or standalone unit adds a chic, sculptural look to the bathroom. It’s perfect for small, minimalist spaces and pairs beautifully with a sleek mirror and wall-mounted fixtures.",
              imgSrc: "/assets/decor_img/3/10.png",
              altText: "Free-Standing Basin Sink",
            },
            {
              title: "Heated Floors",
              text: "Heated floors provide a sense of luxury and comfort, especially in colder climates. The tiles, often ceramic or porcelain, conduct heat well, ensuring that your bathroom stays warm and cozy.",
              imgSrc: "/assets/decor_img/3/11.png",
              altText: "Heated Floors",
            },
            {
              title: "Accent Wall with Bold Tile",
              text: "A bold accent wall with patterned or brightly colored tiles adds personality and style to the bathroom. Keep the rest of the design neutral to let the accent wall stand out, creating a focal point behind the vanity or shower.",
              imgSrc: "/assets/decor_img/3/12.png",
              altText: "Accent Wall with Bold Tile",
            },
            {
              title: "Natural Stone Vanity",
              text: "A natural stone vanity made from materials like granite or quartz adds an earthy, luxurious touch to the bathroom. Pair it with wooden cabinetry and brass or black fixtures for a blend of modern luxury and organic warmth.",
              imgSrc: "/assets/decor_img/3/13.png",
              altText: "Natural Stone Vanity",
            },
            {
              title: "Skylight for Natural Light",
              text: "A skylight positioned over the shower or bathtub floods the bathroom with natural light, enhancing the sense of openness and tranquility. Paired with light-colored tiles and minimalist design, the skylight creates a bright, airy atmosphere.",
              imgSrc: "/assets/decor_img/3/14.png",
              altText: "Skylight for Natural Light",
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

export default DecorPage_6;
