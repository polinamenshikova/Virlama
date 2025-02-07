import React, { useEffect, useState } from "react";
import Button from "./Button";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RxTriangleRight } from "react-icons/rx";

import { mostPopular } from "../constants/index";

const MostPopularCarousel = ({ title }) => {
  const handleReload = (url) => {
    window.location.assign(url); // Navigate to the URL and reload the page
  };
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center">
        <h2 className="font-gistesy uppercase text-3xl lg:text-4xl mb-4 inline-flex items-center">
          {title}
          <span>
            <RxTriangleRight className="w-8 text-color-1 hover:text-n-5 transition-colors " />
          </span>
        </h2>
      </div>
      <div className="w-full h-[1px] bg-black mb-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {mostPopular.map((mostPopular_post) => (
          <div
            key={mostPopular_post.title}
            className="bg-white overflow-hidden cursor-pointer"
            onClick={() => handleReload(mostPopular_post.url)} // Trigger reload on click
          >
            <img
              src={"../" + mostPopular_post.img_url}
              alt={mostPopular_post.title}
              className="w-full h-80 object-cover scale-90 hover:scale-95 transition-transform duration-300 ease-in-out"
            />
            <div className="p-4">
              <h3 className="font-code text-[22px] font-light">
                {mostPopular_post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularCarousel;
