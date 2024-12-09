"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="about" className="my-10 mx-5 md:mx-28">
      <motion.h1
        className="text-4xl font-bold text-center"
        data-aos="fade-right"
        suppressHydrationWarning={true}
        data-aos-delay="200"
      >
        about
      </motion.h1>
      <div className="py-10 flex items-center justify-center">
        <motion.div
          className="max-w-xl flex flex-col gap-5"
          data-aos="fade-up"
          suppressHydrationWarning={true}
          data-aos-delay="200"
        >
          <h2 className="text-xl text-gray-600 dark:text-gray-400">
<<<<<<< HEAD
            Hey there, I&apos;m Abhishek Kumar, a MERN Fullstack developer
            hailing from Kolkata India. With a focus on user experience and
            performance optimization, I strive to create seamless digital
            experiences.
=======
            Hey there, I&apos;m Abhishek Kumar, a MERN Fullstack developer hailing
            from Kolkata India. With a focus on user experience and performance
            optimization, I strive to create seamless digital experiences.
>>>>>>> 8aa2d3552142f068cbdac99612ae989fea0e4657
          </h2>
          <h2 className="text-xl text-gray-600 dark:text-gray-400">
            Let&apos;s connect and create something remarkable!
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
