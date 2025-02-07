import { navigation } from "../constants";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";

// import { socials } from "../constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-9 border-t-[14px] border-n-5 backdrop-blur-sm">
      <div className="flex justify-start lg:justify-start px-5 lg:px-7.5 xl:px-10 max-lg:py-2 border-b border-b-n-11">
        <div className="lg:hidden">
          <RxHamburgerMenu
            size="25px"
            className="hover:text-n-5 transition-colors text-n-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        {isMenuOpen && (
          <nav className="fixed top-[42px] left-0 right-0 bottom-0  lg:hidden">
            <div className="bg-n-9 relative z-2 flex flex-col items-center justify-center m-auto">
              <a
                key="5"
                href="/"
                className="block tracking-[0.125rem] text-xs font-code relative uppercase text-n-3 hover:text-n-5 transition-colors px-7 py-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="block tracking-[0.125rem] text-xs font-code relative uppercase text-n-3 hover:text-n-5 transition-colors px-7 py-4"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
        )}
        <nav className="hidden lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative flex flex-col items-center justify-between m-auto lg:flex-row ">
            {navigation.map((item, index) => (
              <React.Fragment key={item.id}>
                {index === Math.floor(navigation.length / 2) && (
                  <a
                    href="/"
                    className="logo absolute top-[2px] left-[225px] w-[80px] "
                  ></a>
                )}
                <a
                  href={item.url}
                  className={`block tracking-[0.125rem] text-xs font-code relative uppercase text-n-3 hover:text-n-5 transition-colors ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-7 py-5 lg:-mr-0.25 lg:text-xs ${
                    index === 1 ? "lg:mr-10" : index === 2 ? "lg:ml-10" : ""
                  }`}
                >
                  {item.title}
                </a>
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
