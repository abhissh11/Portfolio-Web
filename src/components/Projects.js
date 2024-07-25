import React from "react";
import projectData from "@/data/projects.json";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen mb-20  mx-5 md:mx-28">
      <h1 className="text-4xl font-bold text-center">
        work <span className="text-blue-600"> : </span>{" "}
        <span className="text-emerald-600">projects</span>
      </h1>
      <div className="">
        <div className="mt-20 flex flex-row flex-wrap justify-center px-5 gap-6 items-center">
          {projectData.projects.map((pj) => {
            const stack = pj.techStack[0].split(",   ");
            return (
              <ProjectCard
                key={pj.projectId}
                tech={stack}
                desc={pj.description}
                img={pj.projectImg}
                name={pj.projectName}
                live={pj.liveLink}
                repo={pj.projectGithubLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
