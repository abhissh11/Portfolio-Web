"use client";
import { Icon } from "@iconify/react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contacts() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div id="contacts" className=" mb-8 mx-5 md:mx-28 ">
      <motion.h1
        className="text-4xl font-bold text-center"
        data-aos="fade-right"
        suppressHydrationWarning={true}
        data-aos-delay="200"
      >
        connect <span className="text-pink-600"> : </span>
        <span className="text-blue-600">contact</span>
      </motion.h1>
      <div className="flex flex-col items-center justify-center gap-10 py-20 border-b border-gray-300">
        <motion.h2
          className="text-xl font-bold text-center"
          data-aos="fade-up"
          suppressHydrationWarning={true}
          data-aos-delay="200"
        >
          Connect with me on socials :
        </motion.h2>
        <motion.div
          className="flex flex-row items-center justify-center gap-14 flex-wrap mt-10"
          data-aos="fade-up"
          suppressHydrationWarning={true}
          data-aos-delay="200"
        >
          <Link
            href="https://www.instagram.com/abhiishekkr/"
            target="_blank"
            className=" flex gap-1 items-center py-1  hover:scale-95"
          >
            <Icon icon="uil:instagram" className="dark:text-blue-800 w-8 h-8" />

            <h2 className="text-md font-bold">Instagram</h2>
          </Link>
          <Link
            href="https://x.com/dev_abhishekkr"
            target="_blank"
            className="flex gap-1 items-center py-1 hover:scale-95"
          >
            <Icon
              icon="fa6-brands:x-twitter"
              className=" dark:text-blue-800 w-6 h-6"
            />
            <h2 className="text-md font-bold">Twitter ( X ) </h2>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abhishekkr-dev/"
            target="_blank"
            className="flex gap-1 items-center py-1  hover:scale-95"
          >
            <Icon icon="uil:linkedin" className=" dark:text-blue-800 w-8 h-8" />
            <h2 className="text-md font-bold">LinkedIn</h2>
          </Link>

          <Link
            href="https://github.com/dev-abhishekkr"
            target="_blank"
            className="flex gap-1 items-center py-1  hover:scale-95"
          >
            <Icon icon="uil:github" className="dark:text-blue-800 w-8 h-8" />
            <h2 className="text-md font-bold">GitHub</h2>
          </Link>
        </motion.div>
        <motion.h2
          className="text-md  pt-10 text-center  "
          data-aos="fade-up"
          suppressHydrationWarning={true}
          data-aos-delay="200"
        >
          or, mail me at{" "}
          <Link
            href="mailto:dev.abhishekkr@gmail.com"
            className="pb-1 font-semibold hover:border-b border-black"
          >
            abhishekkr.nsec@gmail.com
          </Link>
        </motion.h2>
      </div>
      <p className="text-sm text-gray-500 flex flex-row gap-0 items-center justify-center pt-4">
        Website designed & developed by -
        <Link
          href="https://www.linkedin.com/in/abhishekkr-dev/"
          target="_blank"
          className="text-center flex flex-row"
        >
          <span className="text-blue-500 hover:underline">Abhishek</span>
          <span className="text-blue-500 hover:scale-110">
            <MoveUpRight size={20} />
          </span>
        </Link>
      </p>
    </div>
  );
}
