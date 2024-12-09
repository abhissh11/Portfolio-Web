"use client";
import React from "react";
import projectData from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="projects" className="min-h-screen mb-20  mx-5 md:mx-28">
      <motion.h1
        className="text-4xl font-bold text-center"
        data-aos="fade-right"
        suppressHydrationWarning={true}
        data-aos-delay="200"
      >
        code <span className="text-blue-600"> : </span>{" "}
        <span className="text-emerald-600">projects</span>
      </motion.h1>
      <div className="">
        <motion.div className="mt-20 flex flex-row flex-wrap justify-center px-5 gap-6 items-center">
          {projectData.projects.map((pj) => {
            const stack = pj.techStack[0].split(",   ");
            return (
              <div
                key={pj.projectId}
                data-aos="fade-up"
                suppressHydrationWarning={true}
                data-aos-delay="200"
              >
                <ProjectCard
                  tech={stack}
                  desc={pj.description}
                  img={pj.projectImg}
                  name={pj.projectName}
                  live={pj.liveLink}
                  repo={pj.projectGithubLink}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
