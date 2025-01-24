import BlogCard from "@/components/BlogCard";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import React from "react";

export default function page() {
  return (
    <div className="py-28 bg-base min-h-screen bg-base  px-6 md:p-20 flex flex-col gap-20 text-white">
      <div className="md:py-10 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold tracking-wide text-white ">
          Explore the Spectrum of Tech Blogs
        </h1>
        <p className="text-xl text-center font-normal text-gray-400 tracking-wide">
          Etching the blogs through my learning paths and curiousity to know a
          little more a little better
        </p>
      </div>
      <div className="">
        <BlogCard />
      </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
