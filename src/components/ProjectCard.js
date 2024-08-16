import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ tech, desc, live, repo, name, img }) {
  return (
    <div
      className="md:w-[24rem] w-[20rem] h-[11rem] bg-blue-100 dark:bg-blue-200 hover:bg-emerald-100 dark:hover:bg-emerald-200 hover:cursor-pointer 
      hover:scale-105 transition-all delay-200 ease-in-out border-2 border-black dark:border-cyan-800 rounded-lg"
    >
      <div className="flex flex-col p-4 justify-evenly md:space-y-2  rounded-md">
        <div className="flex flex-row items-center py-1 gap-2 justify-between">
          <h1 className="text-md font-semibold text-blue-600">{name}</h1>
          <div className="flex gap-2">
            <Link href={repo} target="_blank">
              <Icon
                icon="uil:github"
                className="w-8 h-8 text-black hover:text-blue-800"
              />
            </Link>
            <Link href={live} target="_blank">
              <Icon
                icon="tabler:external-link"
                className="w-8 h-8 text-black hover:text-blue-800"
              />
            </Link>
          </div>
        </div>
        <div className="">
          <p className="text-gray-500 text-sm">{desc}</p>
        </div>
        <div className="flex flex-row items-center">
          <Icon
            icon="fluent-mdl2:radio-bullet"
            className="text-blue-600 text-4xl font-extrabold"
          />
          <h2 className="text-black font-semibold text-sm">{tech}</h2>
        </div>
      </div>
    </div>
  );
}
