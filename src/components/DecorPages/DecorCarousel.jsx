import React from "react";
import { decor } from "../../constants/index";
import Button from "../Button";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const DecorCarousel = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-9">
        <h2 className="font-gistesy uppercase text-3xl lg:text-4xl">
          Decor ideas
        </h2>
        <Link to={"/decor"}>
          <Button
            className="text-xs font-code uppercase text-n-9 bg-n-1 hover:bg-n-2 hover:text-n-3 transition-colors group"
            icon={
              <RiArrowRightSFill className="ml-1 text-lg text-n-9 transition-colors group-hover:text-n-3" />
            }
          >
            SEE ALL
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4 sm:gap-6 lg:flex lg:justify-center lg:space-x-6">
        {decor.map((decor) => (
          <div
            key={decor.name}
            className="w-[190px]  bg-white overflow-hidden "
          >
            <Link to={`/decor/${decor.id}`}>
              <img
                src={decor.imageSrc}
                alt={decor.name}
                className="w-full h-[140px] object-cover"
              />
            </Link>
            <Link to={`/decor/${decor.id}`}>
              <div className="p-2 text-center">
                <h3 className="tracking-[0.125rem] my-2 font-code uppercase text-xs font-medium">
                  {decor.name}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecorCarousel;
