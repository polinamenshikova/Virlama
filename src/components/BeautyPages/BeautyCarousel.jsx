import React, { useEffect, useState } from "react";
import Button from "../Button";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";

import { beautyCarousel } from "../../constants/index";
import { RxTriangleRight } from "react-icons/rx";

const BeautyCarousel = ({ title }) => {
  const handleReload = (url) => {
    window.location.assign(url); // Navigate to the URL and reload the page
  };
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center">
        <Link to={"/beauty"}>
          <h2 className="font-gistesy uppercase text-center text-3xl lg:text-4xl mb-4 inline-flex items-center">
            {title}
            <span>
              <RxTriangleRight className="w-8 text-color-1 hover:text-n-5 transition-colors " />
            </span>
          </h2>
        </Link>
      </div>
      <div className="w-full h-[1px] bg-black mb-6"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {beautyCarousel.map((beauty_post) => (
          <div
            key={beauty_post.title}
            className="bg-white overflow-hidden"
            onClick={() => handleReload(beauty_post.url)}
          >
            <Link to={`/beauty/${beauty_post.id}`}>
              <img
                src={beauty_post.img_url} // Ensure you have an imageSrc field
                alt={beauty_post.title}
                className="w-full h-80 object-cover scale-90 hover:scale-95 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <div className="p-4">
              <Link to={`/beauty/${beauty_post.id}`}>
                <h3 className="font-code text-[22px] font-light">
                  {beauty_post.title}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyCarousel;
