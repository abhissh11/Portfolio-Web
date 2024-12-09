"use client";
import { Icon } from "@iconify/react";
import React from "react";
import skillsData from "@/data/skills.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="skills" className=" min-h-screen my-10 pt-10 mx-5 md:mx-28">
      <motion.h1
        className="text-4xl font-bold text-center"
        data-aos="fade-right"
        suppressHydrationWarning={true}
        data-aos-delay="200"
      >
        tech <span className="text-orange-500"> : </span>{" "}
        <span className="text-blue-600">skills</span>
      </motion.h1>
      <motion.div className=" flex flex-col gap-6 py-20">
        <div className="flex flex-row gap-4 items-center justify-center flex-wrap">
          {skillsData.languages.map((lang) => (
            <h2
              data-aos="fade-up"
              suppressHydrationWarning={true}
              data-aos-delay="200"
              key={lang.id}
              className="flex gap-2 items-center text-md font-bold text-white bg-black md:px-8 px-5 py-2 
          rounded-md hover:bg-gray-900 hover:cursor-pointer hover:scale-95 transition-all delay-100 border-2 border-gray-900"
            >
              <Icon icon={lang.icon} className="size-8" />
              <span>{lang.name}</span>
            </h2>
          ))}
        </div>
        <div className="flex flex-row gap-4 items-center justify-center flex-wrap">
          {skillsData.frameworks.map((frame) => (
            <h2
              data-aos="fade-up"
              suppressHydrationWarning={true}
              data-aos-delay="200"
              key={frame.id}
              className="flex gap-2 items-center text-md font-bold text-white bg-black px-5 md:px-8 py-2 
          rounded-md hover:bg-gray-900 hover:cursor-pointer hover:scale-95 transition-all delay-100 border-2 border-gray-900"
            >
              <Icon icon={frame.icon} className="size-8" />
              <span>{frame.name}</span>
            </h2>
          ))}
        </div>
        <div className="flex flex-row gap-4 items-center justify-center flex-wrap">
          {skillsData.databases.map((dbs) => (
            <h2
              data-aos="fade-up"
              suppressHydrationWarning={true}
              data-aos-delay="200"
              key={dbs.id}
              className="flex gap-2 items-center text-md font-bold text-white bg-black px-5 md:px-8 py-2 
          rounded-md hover:bg-gray-900 hover:cursor-pointer hover:scale-95 transition-all delay-100 border-2 border-gray-900"
            >
              <Icon icon={dbs.icon} className="size-8" />
              <span>{dbs.name}</span>
            </h2>
          ))}
        </div>
        <div className="flex flex-row gap-4 items-center justify-center flex-wrap">
          {skillsData.devTools.map((devt) => (
            <h2
              data-aos="fade-up"
              suppressHydrationWarning={true}
              data-aos-delay="200"
              key={devt.id}
              className="flex gap-2 items-center text-md font-bold text-white bg-black px-5 md:px-8 py-2 
          rounded-md hover:bg-gray-900 hover:cursor-pointer hover:scale-95 transition-all delay-100 border-2 border-gray-900"
            >
              <Icon icon={devt.icon} className="size-8" />
              <span>{devt.name}</span>
            </h2>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
