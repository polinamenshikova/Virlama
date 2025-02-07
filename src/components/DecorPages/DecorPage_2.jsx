import React from "react";

const DecorPage_2 = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <div className="w-full lg:w-[60vw] xl:w-[35vw] flex flex-col items-center px-6">
          <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
            Home & Design
          </span>
          <span className="font-code tracking-[0.1rem] font-light text-color-1 uppercase text-[11px] mb-4">
            Published October 1, 2024
          </span>
          <h1
            className="text-4xl mb-5 text-center leading-normal"
            style={{
              WebkitTextStroke: "0.5px black",
              textStroke: "0.5px black",
            }}
          >
            Trending Kitchen Design Elements
          </h1>

          <p className="font-code tracking-[0.1rem] font-light text-[18px] text-n-3 mb-6">
            A well-designed kitchen is a perfect blend of form and function,
            offering a space that is both beautiful and highly practical. From
            modern minimalist looks to vintage-inspired charm, the design
            elements you choose can elevate the overall atmosphere of your
            kitchen. In this collection, we explore some of the hottest trends
            in kitchen decor, each adding its unique touch to the heart of your
            home.
          </p>

          {[
            {
              title: "Transparent Flower Vase",
              text: "A transparent flower vase is a simple yet elegant way to add freshness and a touch of nature to your kitchen. Whether filled with seasonal blooms or leafy greenery, the transparency of the vase allows the focus to be on the plants themselves, complementing both modern and rustic kitchen styles. Its understated beauty makes it versatile enough to work in any kitchen setup.",
              imgSrc: "/assets/decor_img/2/1.png",
              altText: "Transparent Flower Vase",
            },
            {
              title: "Built-in Wall Oven",
              text: "A built-in wall oven is a space-saving and sleek appliance choice for modern kitchens. It integrates seamlessly into your cabinetry, offering a clean, streamlined look. Not only is it practical for cooking at an ergonomic height, but it also adds a professional, polished finish to any kitchen design.",
              imgSrc: "/assets/decor_img/2/2.png",
              altText: "Built-in Wall Oven",
            },
            {
              title: "Matte Black Fixtures",
              text: "Matte black fixtures are making a bold statement in modern kitchens. From faucets to drawer pulls, this sleek, sophisticated look provides a striking contrast to lighter countertops and cabinetry. Matte black adds a touch of drama and contemporary edge to your kitchen without being overly flashy.",
              imgSrc: "/assets/decor_img/2/3.png",
              altText: "Matte Black Fixtures",
            },
            {
              title: "Marble Countertops",
              text: "Marble countertops remain a timeless and luxurious choice for kitchens. Known for their elegance and natural beauty, marble surfaces add a refined, polished look to any kitchen. Though they require more maintenance than other materials, their sophisticated finish makes them a popular choice for those looking to elevate their kitchen design.",
              imgSrc: "/assets/decor_img/2/4.png",
              altText: "Marble Countertops",
            },
            {
              title: "Open Shelving",
              text: "Open shelving is a trend that combines style with practicality. It allows you to showcase your best dishes, glassware, or cookbooks while also keeping frequently used items within easy reach. The openness adds a sense of airiness to the kitchen, making it feel more spacious and inviting.",
              imgSrc: "/assets/decor_img/2/5.png",
              altText: "Open Shelving",
            },
            {
              title: "Vintage Appliances",
              text: "Vintage appliances bring a nostalgic charm to modern kitchens. Whether you’re opting for a retro-style fridge or a vintage stove, these appliances add personality and character to your kitchen. Blending old-world charm with modern functionality, they are perfect for creating a unique and memorable kitchen space.",
              imgSrc: "/assets/decor_img/2/6.png",
              altText: "Vintage Appliances",
            },
            {
              title: "Hanging Pot Rack",
              text: "A hanging pot rack is both functional and stylish, especially in kitchens with limited cabinet space. It provides easy access to your cookware while doubling as a decorative feature. The visual impact of hanging pots and pans adds a rustic, farmhouse feel to the kitchen, making it a cozy and practical space.",
              imgSrc: "/assets/decor_img/2/7.png",
              altText: "Hanging Pot Rack",
            },
            {
              title: "Hanging Lamps",
              text: "Hanging lamps are a trendy lighting choice for kitchens, offering both function and style. Whether placed above an island or dining area, pendant lights add a focal point to the room. From industrial metal shades to modern glass designs, these lamps enhance the ambiance and provide task lighting in key areas.",
              imgSrc: "/assets/decor_img/2/8.png",
              altText: "Hanging Lamps",
            },
            {
              title: "Farmhouse Sink",
              text: "The farmhouse sink, known for its deep basin and front-facing design, is a popular choice in both rustic and modern kitchens. Its size and functionality make it perfect for handling large dishes, while its charming, timeless design adds a warm, inviting element to the kitchen space.",
              imgSrc: "/assets/decor_img/2/9.png",
              altText: "Farmhouse Sink",
            },
            {
              title: "Large Flower Vase",
              text: "A large flower vase can make a bold, decorative statement in your kitchen. Positioned on a countertop or dining table, it adds height, color, and texture to the space. The use of oversized blooms or branches enhances the overall elegance and sophistication of the room, making it feel more welcoming and curated.",
              imgSrc: "/assets/decor_img/2/10.png",
              altText: "Large Flower Vase",
            },
            {
              title: "Pantry with Sliding Door",
              text: "A pantry with a sliding door is a functional yet stylish solution for keeping your kitchen organized. Sliding doors save space while adding a sleek, modern touch. Whether you choose a rustic barn-style door or a more contemporary option, this feature can enhance both the practicality and design of your kitchen.",
              imgSrc: "/assets/decor_img/2/11.png",
              altText: "Pantry with Sliding Door",
            },
            {
              title: "Bifold Glass Doors",
              text: "Bifold glass doors are a great way to blur the line between indoor and outdoor spaces. They allow natural light to flood into your kitchen and provide an expansive view of the outdoors. When opened, these doors create a seamless transition between your kitchen and outdoor entertaining area, perfect for modern homes that prioritize open-concept living.",
              imgSrc: "/assets/decor_img/2/12.png",
              altText: "Bifold Glass Doors",
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

export default DecorPage_2;
