import Card from "./Card";

import RecipeCarousel from "./RecipePages/RecipeCarousel.jsx";

import BeautyCarousel from "./BeautyPages/BeautyCarousel.jsx";

import DecorCarousel from "./DecorPages/DecorCarousel.jsx";

import LifeStyleCarousel from "./LifeStylePages/LifeStyleCarousel.jsx";

import Subscribe from "./Subscribe.jsx";
import Banner from "./Banner.jsx";

const Hero = () => {
  return (
    <div>
      <div className="mt-[-20px]">
        <Banner />
      </div>

      <div className="bg-n-9">
        <div className="mx-auto  max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-[1500px]">
          <BeautyCarousel title={"Beauty"} />
        </div>
      </div>

      <div className="bg-n-8">
        <div className="mx-auto  max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-[1500px]">
          <LifeStyleCarousel title={"Lifestyle"} />
        </div>
      </div>

      <div className="bg-n-10">
        <div className="mx-auto  max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-[1500px]">
          <DecorCarousel />
        </div>
      </div>
      {/* <div className="bg-n-9">
        <div className="mx-auto  max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-[1500px]">
          <Subscribe />
        </div>
      </div> */}
      <div className="bg-n-8">
        <div className="mx-auto  max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-[1500px]">
          <RecipeCarousel title={"Recipes"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
