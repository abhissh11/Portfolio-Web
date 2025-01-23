import { Dot } from "lucide-react";
import React from "react";

export default function Experience() {
  const exp = [
    {
      role: "Fullstack Developer",
      company: "Contractual",
      duration: "Dec 2024 - Present",
    },
    {
      role: "Frontend Developer",
      company: "DesiQnA.",
      duration: "Sept 2024 - Nov 2024",
    },
  ];
  return (
    <div
      id="experience"
      className="h-fit bg-base py-20 px-6 md:p-20 flex flex-col gap-20 items-center justify-center"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-white text-center text-3xl tracking-wide  font-bold ">
          Work Experience
        </h1>
        <p className="text-lg font-normal text-gray-400 text-center">
          My professional journey in tech
        </p>
      </div>
      <div className="text-white relative">
        {/* <div className="absolute top-0 left-4 w-1 h-full bg-blue-600"></div> */}

        {/* timeline exp  */}

        <div className="flex w-full bg-fuchsia-50 gap-40 justify-between ">
          <div className=" flex flex-col gap-2 bg-chase w-fit p-6 rounded-lg shadow-sm">
            <h4 className="text-white text-xl font-bold tracking-wider">
              Fullstack Developer
            </h4>
            <h5 className="text-blue-400 text-base font-semibold">
              Contractual
            </h5>

            <p className="text-sm text-gray-400">Dec 2024 - Present</p>
            <ul className="flex flex-col gap-0">
              <li className="flex gap-2 items-center text-sm font-normal text-gray-300">
                <span>
                  <Dot size={32} />
                </span>{" "}
                Led development of enterprise-scale applications
              </li>
              <li className="flex items-center gap-2 text-sm font-normal text-gray-300">
                <span>
                  <Dot size={32} />
                </span>{" "}
                Implemented CI/CD pipelines
              </li>
            </ul>
          </div>
          {/* ........hi  */}
          <div className="text-white"></div>
          {/* <div className="absolute left-56 top-0 w-8 h-8 rounded-full bg-blue-500"></div>
          <div className="absolute top-0 left-56 w-1 h-full bg-blue-600"></div> */}
        </div>
      </div>
    </div>
  );
}

// {exp.map((exp, index) => (
//   <div
//     key={index}
//     className="relative flex flex-col gap-2 bg-chase w-fit p-6 rounded-lg shadow-sm"
//   >
//     <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-blue-500"></div>
//     <h4 className="text-white text-xl font-bold tracking-wider">
//       {exp.role}
//     </h4>
//     <h5 className="text-blue-400 text-base font-semibold">
//       {exp.company}
//     </h5>

//     <p className="text-sm text-gray-400">Dec 2024 - Present</p>
//     <ul className="flex flex-col gap-0">
//       <li className="flex gap-2 items-center text-sm font-normal text-gray-300">
//         <span>
//           <Dot size={32} />
//         </span>{" "}
//         Led development of enterprise-scale applications
//       </li>
//       <li className="flex items-center gap-2 text-sm font-normal text-gray-300">
//         <span>
//           <Dot size={32} />
//         </span>{" "}
//         Implemented CI/CD pipelines
//       </li>
//     </ul>
//   </div>
// ))}
