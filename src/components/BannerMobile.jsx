import React from "react";
import Button from "./Button";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const BannerMobile = () => {
  return (
    <div>
      <div className="bg-[rgba(249,249,249,0.9)] border border-[#111] outline-[10px] outline outline-[rgba(249,249,249,0.9)]">
        <span className="font-code tracking-[0.1rem] font-bold text-color-1 text-opacity-50 text-[12px] uppercase mb-3">
          Fashion & Care
        </span>
        <h2> Cashmere Care Tips: Keep Your</h2>
        <Link to={`/lifestyle/5`}>
          <Button
            className="text-xs font-code p-[1rem] pr-[0.5rem] xl:p-[1.25rem] xl:pr-[1rem]  uppercase text-n-9 bg-n-1 hover:bg-n-2 hover:text-n-3 transition-colors group"
            icon={
              <RiArrowRightSFill className="ml-1 text-lg text-n-9 transition-colors group-hover:text-n-3" />
            }
          >
            READ MORE
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BannerMobile;
