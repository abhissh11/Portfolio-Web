import React from "react";

export default function About() {
  const aboutItems = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Expert in React, Next.js, and modern CSS frameworks",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Proficient in Node.js, Python, and database management",
    },
    {
      id: 3,
      title: "Cloud Services",
      description: "Experienced with AWS and DevOps practices",
    },
  ];
  return (
    <div id="about" className="flex flex-col md:flex-row justify-between">
      <div className="p-6 md:p-20 flex flex-col gap-4 md:gap-8 w-full md:w-1/2">
        <h1 className="text-3xl font-bold tracking-wide">About Me</h1>
        <p className="text-base text-gray-700 font-normal">
          Hi! I&apos;m Abhishek Kumar a curious Fullstack Developer with
          expertise in building scalable web applications. With 1+ years of
          experience in software development, I specialize in creating elegant
          solutions to complex problems.
        </p>
        <p className="text-base text-gray-700 font-normal">
          My journey in software development started with a deep curiosity for
          technology and has evolved into a professional career where I blend
          creativity with technical expertise.
        </p>
        <div className="flex md:gap-28 gap-10 justify-start">
          <div className="flex gap-2 items-center">
            <div className="text-blue-700 h-16 w-1 bg-blue-600"></div>
            <h4 className="text-3xl font-bold">
              1+ <br />{" "}
              <span className="text-sm text-gray-700 font-normal">
                Years Exprerience
              </span>
            </h4>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="text-blue-700 h-16 w-1 bg-blue-600"></div>
            <h4 className="text-3xl font-bold">
              20+ <br />{" "}
              <span className="text-sm text-gray-700 font-normal">
                Projects Completed
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-20 flex flex-col gap-8 w-full md:w-1/2">
        {aboutItems.map((abt) => (
          <div
            key={abt.id}
            className="flex flex-col rounded gap-4 p-6 bg-gray-200 hover:-translate-y-1 transition-all cursor-pointer"
          >
            <h3 className="text-xl font-bold">{abt.title}</h3>
            <p className="text-gray-600">{abt.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
