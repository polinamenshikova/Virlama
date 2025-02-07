import React from "react";

const DecorPage_3 = () => {
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
            Bedroom Refresh: 7 Simple Ways to Revitalize Your Space
          </h1>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
            Your bedroom should be a peaceful retreat where you can relax and
            recharge. If your space feels outdated or no longer reflects your
            style, a refresh could be just what you need. Here are seven simple
            ideas to give your bedroom a new look without a full makeover.
          </p>

          {[
            {
              title: "Update Your Bedding",
              text: "Swapping out your bedding is an easy way to refresh your bedroom. Opt for soft neutral tones for a calming feel or bold patterns to inject personality. Layer different textures, such as cotton and linen, for a luxurious finish. Adding throw pillows and a cozy blanket at the foot of the bed can instantly elevate the look.",
              imgSrc: "/assets/decor_img/4/1.png",
              altText: "Updated Bedding",
            },
            {
              title: "Add a Statement Headboard",
              text: "A statement headboard can transform the look of your bed. Choose an upholstered design in a bold color like navy or emerald green for a luxe, cozy feel. Wooden or metal headboards bring a rustic or industrial edge. The right headboard can be both stylish and functional, adding comfort and visual interest.",
              imgSrc: "/assets/decor_img/4/2.png",
              altText: "Statement Headboard",
            },
            {
              title: "Cozy Lighting",
              text: "Lighting plays a crucial role in the ambiance of your bedroom. Replace harsh overhead lights with softer, layered lighting. Table lamps, wall sconces, or string lights add warmth and make the room feel more intimate. Opt for bulbs with a warm glow to create a cozy, restful atmosphere.",
              imgSrc: "/assets/decor_img/4/3.png",
              altText: "Cozy Lighting",
            },
            {
              title: "Refresh Your Wall Décor",
              text: "Updating your wall art is an easy way to revitalize your space. A gallery wall with framed prints or photos can give your room a personal touch. If you prefer a simpler look, choose one large statement piece for above your bed. Consider repainting your walls in soft, calming colors to create a serene backdrop.",
              imgSrc: "/assets/decor_img/4/4.png",
              altText: "Wall Décor Refresh",
            },
            {
              title: "Incorporate Natural Elements",
              text: "Bringing nature indoors with houseplants or fresh flowers can breathe new life into your bedroom. Indoor plants, like a fiddle-leaf fig or small succulents, purify the air and add a vibrant, natural touch. For a low-maintenance option, try faux plants or decorate with natural textures like wood.",
              imgSrc: "/assets/decor_img/4/5.png",
              altText: "Natural Elements",
            },
            {
              title: "Declutter and Reorganize",
              text: "A clutter-free bedroom is key to a peaceful, relaxing environment. Get rid of items you no longer need and reorganize the rest using baskets, under-bed storage, or multi-functional furniture. Decluttering will make your space feel more open, organized, and calming.",
              imgSrc: "/assets/decor_img/4/6.png",
              altText: "Declutter and Reorganize",
            },
            {
              title: "Change Your Curtains or Blinds",
              text: "Updating your window treatments can instantly refresh your space. Choose light, airy curtains to let natural light in, or opt for blackout curtains for better sleep. Blinds offer a sleek, modern look, and the right treatment can tie the whole room together while improving the ambiance.",
              imgSrc: "/assets/decor_img/4/7.png",
              altText: "New Curtains",
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

export default DecorPage_3;
