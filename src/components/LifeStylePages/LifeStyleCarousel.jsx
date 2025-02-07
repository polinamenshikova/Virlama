import React, { useEffect, useState } from "react";
import Button from "../Button";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RxTriangleRight } from "react-icons/rx";

import { lifestyleCarousel } from "../../constants/index";

const LifeStyleCarousel = ({ title }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center">
        <Link to={"/lifestyle"}>
          <h2 className="font-gistesy uppercase text-3xl lg:text-4xl mb-4 inline-flex items-center">
            {title}
            <span>
              <RxTriangleRight className="w-8 text-color-1 hover:text-n-5 transition-colors " />
            </span>
          </h2>
        </Link>
      </div>
      <div className="w-full h-[1px] bg-black mb-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {lifestyleCarousel.map((lifestyle_post) => (
          <div key={lifestyle_post.title} className="bg-white overflow-hidden">
            <Link to={`/lifestyle/${lifestyle_post.id}`}>
              <img
                src={lifestyle_post.img_url} // Ensure you have an imageSrc field
                alt={lifestyle_post.title}
                className="w-full h-80 object-cover scale-90 hover:scale-95 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <div className="p-4">
              <Link to={`/lifestyle/${lifestyle_post.id}`}>
                <h3 className="font-code text-[22px] font-light">
                  {lifestyle_post.title}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeStyleCarousel;
