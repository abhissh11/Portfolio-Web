import { Icon } from "@iconify/react";
import React from "react";
import skillsData from "@/data/skills.json";

export default function Skills() {
  return (
    <div className=" min-h-screen my-10 pt-10 mx-5 md:mx-28">
      <h1 className="text-4xl font-bold text-center">
        tech <span className="text-orange-500"> : </span>{" "}
        <span className="text-blue-600">skills</span>
      </h1>
      <div className=" flex flex-col gap-6 py-10">
        <div className="flex flex-row gap-4 items-center justify-center flex-wrap">
          {skillsData.languages.map((lang) => (
            <h2
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
              key={devt.id}
              className="flex gap-2 items-center text-md font-bold text-white bg-black px-5 md:px-8 py-2 
          rounded-md hover:bg-gray-900 hover:cursor-pointer hover:scale-95 transition-all delay-100 border-2 border-gray-900"
            >
              <Icon icon={devt.icon} className="size-8" />
              <span>{devt.name}</span>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
