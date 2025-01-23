import Link from "next/link";
import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Fullstack Developer",
      company: "Contractual",
      duration: "Dec 2024 - Present",
      description: [
        "Led development of enterprise-scale applications",
        "Implemented deployments and optimized performance",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Brand Impetus",
      duration: "Sept 2024 - Dec 2024",
      description: [
        "Developed and maintained client projects",
        "Collaborated with design team to develop MVPs",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="h-fit bg-base py-20 px-6 md:p-20 w-full flex flex-col gap-20 items-center justify-center"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-white text-center text-3xl tracking-wide font-bold">
          Work Experience
        </h1>
        <p className="text-lg font-normal text-gray-400 text-center">
          My professional journey in tech
        </p>
      </div>

      {/* Timeline Section */}
      <div className="text-white relative w-full">
        <div id="work-experience" className="py-6">
          <div className="container mx-auto px-6 relative">
            {/* Vertical Line (Hidden on small screens) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 hidden md:block"></div>

            {/* Timeline */}
            <div className="relative space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center md:flex-row ${
                    index % 2 === 0
                      ? "md:items-start md:justify-start"
                      : "md:items-end md:justify-end"
                  } group`}
                >
                  {/* Dot (Hidden on small screens) */}
                  <div
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full ring-4 ring-blue-600 z-10"
                    style={{ top: "50%" }}
                  ></div>

                  {/* Card */}
                  <div
                    className={`bg-chase p-6 rounded-lg shadow-md w-full sm:w-4/5 md:w-3/5 lg:w-2/5 ${
                      index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                    } group-hover:shadow-lg transition-shadow`}
                  >
                    <h3 className="text-xl font-semibold text-gray-100">
                      {experience.role}
                    </h3>
                    <p className="text-gray-200">{experience.company}</p>
                    <p className="text-sm text-gray-300 mb-4">
                      {experience.duration}
                    </p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <div className="flex justify-center items-center py-2 mt-4">
          <Link href="https://x.com/abhissh11" target="_blank">
            <button className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-500 hover:text-white hover:bg-blue-700">
              Connect on X
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
