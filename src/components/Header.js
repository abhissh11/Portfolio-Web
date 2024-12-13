"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { Menu, MoonStar, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "dark"
  ); // Default to dark mode
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

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
    <div className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 ">
      <div className="flex flex-row justify-between items-center px-5 md:px-20 py-5 shadow-md">
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
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              About
            </h1>
          </Link>
          <Link href="#skills">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Skills
            </h1>
          </Link>
          <Link href="#projects">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Projects
            </h1>
          </Link>
          <Link href="#contacts">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Contacts
            </h1>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1QQH5q_w11DEZGcYS9PR8S7z7LIYvndav/view?usp=sharing"
            target="_blank"
          >
            <h1 className="text-lg text-white font-light px-4 py-1 bg-black dark:bg-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700">
              CV
            </h1>
          </Link>
        </motion.div>

        <div className="flex gap-5 items-center">
          <div className="">
            <h1 onClick={toggleTheme} className="cursor-pointer">
              {theme === "light" ? (
                <MoonStar className="w-6 h-6" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
            </h1>
          </div>
          <div className="md:hidden">
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
      </div>

      {/* for small screen  */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="absolute origin-top-right min-w-[60%] min-h-svh md:hidden flex flex-col gap-4 items-center bg-gray-100 dark:bg-gray-900 pb-4  shadow-md"
            initial={{ x: "-100vh" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vh" }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <Link href="#about">
              <h1
                className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 pt-2"
                onClick={toggleMenu}
              >
                About
              </h1>
            </Link>
            <Link href="#skills">
              <h1
                className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Skills
              </h1>
            </Link>
            <Link href="#projects">
              <h1
                className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Projects
              </h1>
            </Link>
            <Link href="#contacts">
              <h1
                className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Contacts
              </h1>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1QQH5q_w11DEZGcYS9PR8S7z7LIYvndav/view?usp=sharing"
              target="_blank"
            >
              <h1 className="text-lg text-white font-light px-4 py-1 bg-black dark:bg-gray-800 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700">
                CV
              </h1>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
