"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div id="about" className="my-10 mx-5 md:mx-28">
      <motion.h1
        className="text-4xl font-bold text-center"
        ref={ref}
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ originX: 0.5, originY: 0.5 }}
      >
        about
      </motion.h1>
      <div className="py-10 flex items-center justify-center">
        <motion.div
          className="max-w-xl flex flex-col gap-5"
          ref={ref}
          initial={{ scale: 0.5 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <h2 className="text-xl text-gray-600 dark:text-gray-400">
            Hey there, I&apos;m Abhishek, a MERN Fullstack developer hailing
            from Kolkata India. With a focus on user experience and performance
            optimization, I strive to create seamless digital experiences.
          </h2>
          <h2 className="text-xl text-gray-600 dark:text-gray-400">
            Let&apos;s connect and create something remarkable!
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
