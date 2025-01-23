import React from "react";
import { Marquee } from "./ui/marquee";
import { Icon } from "@iconify/react";

export default function Skills() {
  const arr = [
    {
      id: 2,
      name: "C++",
      logo: <Icon icon="logos:c-plusplus" className="w-10 h-10" />,
    },
    {
      id: 3,
      name: "JavaScript",
      logo: (
        <Icon icon="logos:javascript" className="text-orange-500 w-10 h-10" />
      ),
    },
    {
      id: 4,
      name: "TypeScript",
      logo: (
        <Icon
          icon="logos:typescript-icon"
          className="text-orange-500 w-10 h-10"
        />
      ),
    },
    {
      id: 6,
      name: "Python",

      logo: <Icon icon="logos:python" className="text-orange-500 w-10 h-10" />,
    },
    {
      id: 5,
      name: "HTML5",
      logo: <Icon icon="logos:html-5" className="text-orange-500 w-10 h-10" />,
    },
    {
      id: 7,
      name: "ReactJS",
      logo: <Icon icon="logos:react" className="text-orange-500 w-10 h-10" />,
    },
    {
      id: 8,
      name: "NextJS",
      logo: (
        <Icon
          icon="skill-icons:nextjs-light"
          className="text-orange-500 w-10 h-10"
        />
      ),
    },
    {
      id: 9,
      name: "NodeJS",
      logo: (
        <Icon icon="logos:nodejs-icon" className="text-orange-500 w-10 h-10" />
      ),
    },
    {
      id: 10,
      name: "ExpressJS",
      icon: "simple-icons:express",
      icon: "logos:c-plusplus",
      logo: (
        <Icon
          icon="simple-icons:express"
          className="text-orange-500 w-10 h-10"
        />
      ),
    },
  ];

  const arr2 = [
    {
      id: 111,
      name: "CSS",
      logo: (
        <Icon icon="catppuccin:css" className="text-orange-500 w-10 h-10" />
      ),
    },
    {
      id: 11,
      name: "Tailwind CSS",
      logo: (
        <Icon
          icon="logos:tailwindcss-icon"
          className="text-orange-500 w-10 h-10"
        />
      ),
    },
    {
      id: 12,
      name: "Bootstrap",
      logo: (
        <Icon icon="logos:bootstrap" className="text-orange-500 w-10 h-10" />
      ),
    },
    {
      id: 13,
      name: "MongoDB",
      logo: (
        <Icon
          icon="skill-icons:mongodb"
          className="text-orange-500 w-10 h-10"
        />
      ),
    },
    {
      id: 14,
      name: "Postgres",
      logo: (
        <Icon icon="logos:postgresql" className="text-orange-500 w-10 h-10" />
      ),
    },
    {
      id: 15,
      name: "Firebase",
      logo: (
        <Icon icon="devicon:firebase" className="text-orange-500 w-10 h-10" />
      ),
    },
    {
      id: 16,
      name: "Git",
      icon: "devicon:git",
      logo: <Icon icon="devicon:git" className="text-orange-500 w-10 h-10" />,
    },
    {
      id: 17,
      name: "AWS",
      logo: (
        <Icon
          icon="skill-icons:aws-dark"
          className="text-orange-500 w-10 h-10"
        />
      ),
    },
    {
      id: 18,
      name: "Docker",
      logo: (
        <Icon icon="logos:docker-icon" className="text-orange-500 w-10 h-10" />
      ),
    },
  ];
  return (
    <div
      id="skills"
      className="h-fit bg-base py-20 px-6 md:p-20 flex flex-col gap-20"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-white text-center text-3xl tracking-wide  font-bold ">
          Tech Skills{" "}
        </h1>
        <p className="text-lg font-normal text-gray-400 text-center">
          Expertise across the full development stack
        </p>
      </div>

      {/* horizontal scrolls of skills  */}

      <div className="flex flex-col gap-8">
        <Marquee pauseOnHover reverse className="[--duration:20s]">
          {arr.map(({ logo: logo, name }, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-4 md:mx-12 flex  gap-2 items-center justify-center text-xl
            font-bold text-neutral-500  bg-chase px-3 py-2 border-r-2 border border-y-0 border-l-0 shadow-md border-r-blue-600 rounded-lg"
            >
              <span>{logo}</span>
              <span className="ml-2">{name}</span>
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]">
          {arr2.map(({ logo: logo, name }, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-4 md:mx-12 flex  gap-2 items-center justify-center text-xl
            font-bold text-neutral-500  bg-chase px-3 py-2 border-l-2 border border-y-0 border-r-0 shadow-md border-l-blue-600 rounded-lg"
            >
              <span>{logo}</span>
              <span className="ml-2">{name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
