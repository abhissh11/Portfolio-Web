"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //for outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
            href="https://drive.google.com/file/d/1bTNZZzM-QC-DLjjpGTn2THBJoeo_-jPX/view"
            target="_blank"
          >
            <h1 className="text-lg text-white font-light px-5 py-1 bg-black rounded-md hover:bg-gray-800">
              Resume
            </h1>
          </Link>
        </motion.div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* for small screen  */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="absolute origin-top-right min-w-[60%] min-h-svh md:hidden flex flex-col gap-4 items-center bg-gray-100  pb-4 my-2 shadow-md"
            initial={{ x: "-100vh" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vh" }}
            transition={{ duration: 1 }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <Link href="#about">
              <h1
                className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200 pt-2"
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
              href="https://drive.google.com/file/d/1bTNZZzM-QC-DLjjpGTn2THBJoeo_-jPX/view"
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
      </AnimatePresence>
    </div>
  );
}
