import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const project = [
    {
      id: 1,
      title: "BlogSphere",
      img: "/bw-sphere.png",
      link: "https://github.com/abhissh11/BlogSphere",
      github: "https://github.com/abhissh11/blogsphere",
      stack: ["JavaScript, ReactJS, ExpressJS, MongoDB, Tailwind"],
      description:
        "BlogSphere is a platform where admins can share blogs and can manage their interactions.",
    },
    {
      id: 2,
      title: "PsycheMaster",
      img: "/psyche.png",
      link: "https://PsycheMaster.vercel.app/",
      github: "https://github.com/abhissh11/psycheMaster/",
      stack: ["TypeScript, NextJS, MongoDB, Tailwind CSS, jwt"],
      description:
        "PsycheMaster a platform i developed for a psychologist/couselor for focussing their client where they can book sessions.",
    },
    {
      id: 3,
      title: "RecruiTrack",
      img: "/recruitapp.png",
      link: "https://recruitrack.vercel.app",
      github: "https://github.com/abhissh11/RecruiTrack",
      stack: ["TypeScript, NextJS, MongoDB, Tailwind CSS, magicUI"],
      description:
        "RecruiTrack helps recruiters Effortlessly manage and filter resumes using advanced AI tools.",
    },
  ];
  return (
    <div
      id="projects"
      className="h-fit py-20 px-6 md:px-20 flex flex-col gap-16 justify-center items-center"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-center text-3xl tracking-wide font-bold">
          Featured Projects
        </h1>
        <p className="text-lg font-normal text-gray-700 text-center">
          Showcasing some of my work in web development
        </p>
      </div>
      <div className="mt-6 w-full grid gap-14 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-stretch">
        {project.map((pj) => {
          const tech = pj.stack[0].split(", ");
          return (
            <div
              key={pj.id}
              className="border border-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-all"
            >
              <Image
                src={pj.img}
                alt={pj.title}
                className="w-full"
                width={800}
                height={600}
              />
              <div className="p-3">
                <h4 className="text-xl font-bold">{pj.title}</h4>
                <p className="text-gray-600 text-sm font-normal">
                  {pj.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {tech.map((st, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm font-thin rounded-full border border-gary-500
                      "
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-autop p-1 px-4 flex gap-4">
                <Link href={pj.link} target="_blank">
                  <div className="text-blue-600 text-base font-semibold hover:text-blue-700 flex items-center gap-1 cursor-pointer">
                    View
                  </div>
                </Link>
                <Link href={pj.github} target="_blank">
                  <div className="text-base font-semibold text-gray-700 hover:text-gray-800 flex items-center gap-1 cursor-pointer">
                    Github
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <Link href="https://github.com/abhissh11/" target="_blank">
          <button className="text-lg font-normal px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
