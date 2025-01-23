import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      id="home"
      className="p-6 md:p-20 bg-base flex flex-col justify-center gap-8 items-center h-[70svh] border-b"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-6xl text-center font-extrabold tracking-wide text-white">
          Full Stack Developer
        </h1>
        <p className="text-xl text-center font-normal text-gray-400 tracking-wide">
          transforming entropy into code & realities
        </p>
      </div>
      <div className="flex gap-8 items-center">
        <Link href="#contact">
          <button className="text-base font-normal text-gray-100 bg-blue-600 rounded-lg px-6 py-3 hover:bg-blue-700">
            Hire Me
          </button>
        </Link>
        <Link href="#projects">
          <button className="text-base font-normal text-gray-100 border border-gray-500 rounded-lg px-6 py-3 hover:text-gray-300">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
