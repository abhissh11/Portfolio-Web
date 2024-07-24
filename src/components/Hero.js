import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-5 md:mx-28  flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="flex flex-col gap-0 md:gap-4 items-start">
          <h1 className="text-3xl md:text-4xl font-bold leading-loose">
            Hi! I'm
          </h1>
          <h1 className="text-blue-600 text-3xl md:text-4xl font-bold leading-loose">
            Abhishek.
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold leading-loose">
            Freelancer.
          </h1>
          <h1 className="text-3xl  md:text-4xl font-bold leading-loose">
            FullStack Developer.
          </h1>
          <p className="text-lg text-gray-500">
            transforming entropy into code & realities..
          </p>
        </div>

        <div className="border-black">
          <Image src="/hero.jpeg" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
