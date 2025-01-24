import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard() {
  const blogs = [
    {
      id: 1,
      title: "See Blogs on Hashnode",
      description:
        "React A to Z: Learn about all the React hooks in one blog space.",
      link: "https://abvs.hashnode.dev/", // Blog link
      img: "/reactx.png", // Placeholder image
      stack: ["React, JavaScript, Frontend Development"],
    },
    {
      id: 1,
      title: "My Journey and Learning Path A to Z",
      description: "How i started and how it is going, learnings and findings",
      link: "https://abvs.hashnode.dev/", // Blog link
      img: "/tj.png", // Placeholder image
      stack: ["DSA, Development, College"],
    },
    {
      id: 2,
      title: "More Blogs Coming Soon",
      description:
        "Development A to X: Dive into full-stack development topics.",
      link: "/blog",
      img: "/coming-soon.jpg",
      stack: ["Fullstack Development, MERN, Web Development"],
    },
  ];

  return (
    <div
      id="blogs"
      className="h-fit  px-6 md:px-20 flex flex-col gap-10 justify-center items-center"
    >
      <div className=" w-full grid gap-14 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch">
        {blogs.map((blog) => {
          const tech = blog.stack[0].split(", ");
          return (
            <div
              key={blog.id}
              className="border border-gray-800 bg-chase rounded-lg shadow-sm overflow-hidden flex flex-col hover:-translate-y-1 transition-all"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                className="w-full"
                width={800}
                height={600}
              />
              <div className="p-3">
                <h4 className="text-xl text-gray-200 font-bold">
                  {blog.title}
                </h4>
                <p className="text-gray-400 text-sm font-normal">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {tech.map((st, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm text-gray-200 font-thin rounded-full border border-gray-500"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto p-1 px-4 flex gap-4">
                <Link href={blog.link} target="_blank">
                  <div className="text-blue-600 text-base font-semibold hover:text-blue-700 flex items-center gap-1 cursor-pointer">
                    View Blog
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <Link href="https://abvs.hashnode.dev/" target="_blank">
          <button className="text-lg font-normal px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
            View More Blogs
          </button>
        </Link>
      </div>
    </div>
  );
}
