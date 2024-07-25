"use client";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex flex-row justify-between px-5 md:px-20 py-5 shadow-md">
        <motion.div
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Dropdown />
        </motion.div>
        <motion.div
          className="hidden md:flex flex-row gap-6 items-center"
          initial={{ x: "100vh" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#about">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200">
              About
            </h1>
          </Link>
          <Link href="#skills">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200">
              Skills
            </h1>
          </Link>
          <Link href="#projects">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200">
              Projects
            </h1>
          </Link>
          <Link href="#contacts">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200">
              Contacts
            </h1>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1Vl5u472CKk3SjJCsBQn-taOuSAmp3Wjf/view"
            target="_blank"
          >
            <h1 className="text-lg text-white font-light px-5 py-1 bg-black rounded-md hover:bg-gray-800">
              Resume
            </h1>
          </Link>
        </motion.div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* for small screen  */}

      {isMenuOpen && (
        <motion.div
          className="md:hidden flex flex-col gap-4 items-center justify-center pb-4 my-2 shadow-sm"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <Link href="#about">
            <h1
              className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              About
            </h1>
          </Link>
          <Link href="#skills">
            <h1
              className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Skills
            </h1>
          </Link>
          <Link href="#projects">
            <h1
              className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Projects
            </h1>
          </Link>
          <Link href="#contacts">
            <h1
              className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Contacts
            </h1>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1Vl5u472CKk3SjJCsBQn-taOuSAmp3Wjf/view"
            target="_blank"
          >
            <h1
              className="text-lg font-light text-white px-5 py-1 bg-black rounded-md hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Resume
            </h1>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
