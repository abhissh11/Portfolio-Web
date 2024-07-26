"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="min-h-[85vh] pt-10 flex items-center justify-center">
      <div className="mx-5 md:mx-28  flex flex-col md:flex-row gap-10 justify-between items-center">
        <motion.div
          className="flex flex-col gap-0 md:gap-4 items-start"
          ref={ref}
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-loose">
            Hi! I&apos;m
          </h1>
          <h1 className=" text-blue-600 text-4xl md:text-5xl font-bold leading-loose">
            Abhishek.
          </h1>
          <h1 className="text-3xl  md:text-4xl font-bold leading-loose">
            FullStack Developer.
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold leading-loose">
            Freelancer.
          </h1>
          <p className="text-lg text-gray-500">
            transforming entropy into code & realities..
          </p>
        </motion.div>

        <motion.div
          className="border-black"
          ref={ref}
          initial={{ scale: 0.5 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <Image src="/hero.jpeg" width={400} height={400} />
        </motion.div>
      </div>
    </div>
  );
}
