import React from "react";
import Button from "./Button";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import BannerMobile from "./BannerMobile";

const Banner = () => {
  return (
    <div className="relative">
      {/* Main Content */}
      <div className="bg-n-12 flex items-center justify-center z-20 relative">
        <div className="flex flex-col md:flex-row items-center relative w-full">
          {/* Left Image Collage */}
          <div
            className="hidden md:block lg:block bg-cover bg-center md:bg-right w-full h-[25rem] "
            style={{
              backgroundImage:
                "url('/assets/lifestyle_img/cashmere_care_banner_size.svg')",
            }}
          ></div>

          {/* Mobile Background Image Section */}
          <div
            className="relative md:hidden lg:hidden w-full h-[30rem] bg-cover bg-center flex items-end justify-center p-4"
            style={{
              backgroundImage: "url('/assets/hero-mobile.svg')",
            }}
          >
            <Link to={`/lifestyle/5`}>
              <Button
                className=" text-xs font-code mb-[1.5rem] p-[1rem] pr-[0.5rem] xl:p-[1.25rem] xl:pr-[1rem] uppercase text-n-9 bg-n-1 hover:bg-n-2 hover:text-n-3 transition-colors group"
                icon={
                  <RiArrowRightSFill className="ml-1 text-lg text-n-9 transition-colors group-hover:text-n-3" />
                }
              >
                READ MORE
              </Button>
            </Link>
          </div>

          {/* Right Text Section */}
          <div className="hidden md:block ml-3 md:ml-[2rem] xl:ml-[4rem] text-left my-6 mx-2 xl:my-11 xl:mx-11 xl:pr-16">
            <h2 className="text-[20px] md:text-[26px] xl:text-[36px] font-bold leading-tight">
              Cashmere Care Tips: Keep Your
            </h2>
            <p className="font-code leading-8 tracking-[0.1rem] font-light text-[16px] md:text-[18px] xl:text-[20px] text-n-3 mb-3 md:mt-2 md:mb-4 xl:mt-4 xl:mb-6">
              Cashmere is a luxurious and delicate fabric, known for its
              softness and warmth. However, it ...
            </p>
            <Link to={`/lifestyle/5`}>
              <Button
                className="text-xs font-code p-[1rem] pr-[0.5rem] xl:p-[1.25rem] xl:pr-[1rem] uppercase text-n-9 bg-n-1 hover:bg-n-2 hover:text-n-3 transition-colors group"
                icon={
                  <RiArrowRightSFill className="ml-1 text-lg text-n-9 transition-colors group-hover:text-n-3" />
                }
              >
                READ MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
