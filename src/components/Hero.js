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
    <div className="min-h-fit my-20 md:my-24 pt-10 flex items-center justify-center">
      <div className="mx-5 md:mx-28  flex flex-col md:flex-row gap-14 justify-between items-center">
        <motion.div
          className="flex flex-col gap-0 md:gap-4 items-start"
          data-aos="fade-right"
          suppressHydrationWarning={true}
          data-aos-delay="200"
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
          <p className="text-lg text-gray-500 dark:text-gray-400">
            transforming entropy into code & realities..
          </p>
        </motion.div>

        <motion.div
          className="border-black"
          data-aos="fade-left"
          suppressHydrationWarning={true}
          data-aos-delay="200"
        >
          <Image
            src="/cat-code.webp"
            width={300}
            height={300}
            className="rounded-xl overflow-hidden"
          />
        </motion.div>
      </div>
    </div>
  );
}
