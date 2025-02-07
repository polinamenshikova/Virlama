import MostPopularCarousel from "./MostPopularCarousel";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const shouldDisplayCarousel = !(
    location.pathname === "/" || location.pathname === "/recipes"
  );
  return (
    <>
      <div className="bg-n-8 mt-10">
        {shouldDisplayCarousel && <MostPopularCarousel title="Most Popular" />}
      </div>
      <footer className="bg-n-9 py-8 font-code">
        <div className="px-6 mx-auto max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-[1500px]">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Brand and Welcome Message */}
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
              <h2 className="text-3xl font-logo text-n-3 mb-2">Virlama</h2>
              <p className="font-code tracking-[0.1rem] font-light text-[15px] text-n-3 ">
                Your guide to beauty, lifestyle, and delicious recipes. Stay
                inspired.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex space-x-8 text-sm">
              <a href="/recipes" className="hover:text-n-5">
                Recipes
              </a>
              <a href="/beauty" className="hover:text-n-5">
                Beauty
              </a>
              <a href="/lifestyle" className="hover:text-n-5">
                Lifestyle
              </a>
              <a href="/privacypolicy" className="hover:text-n-5">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-400">
              © 2024 Virlama. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
