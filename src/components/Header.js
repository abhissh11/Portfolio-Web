"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setisMenuopen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Work", "Contact"];

  const handleMenuClick = () => {
    setisMenuopen(!isMenuOpen);
  };
  return (
    <>
      <div className="fixed w-full z-50 px-6 md:px-12 py-2 bg-base  flex items-center justify-between">
        <div className="">
          <button className="px-4 py-2 rounded text-white text-base font-semibold bg-black">
            abhissh11
          </button>
        </div>
        <div className=" ">
          {/* on large screen  */}
          <div className="hidden md:block">
            <ul className="flex justify-center items-center gap-8 ">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-base font-light text-white hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="text-white text-lg font-semibold bg-black rounded p-2 md:hidden"
            onClick={handleMenuClick}
          >
            <Menu />
          </button>
        </div>
      </div>
      {/* on small screen  */}
      {isMenuOpen && (
        <div className="absolute px-20 py-10 top-16 bg-gray-900 w-2/3 h-svh md:hidden">
          <div className="md:hidden">
            <ul className="flex flex-col gap-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-base font-light text-gray-100 hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
