"use client";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex flex-row justify-between px-5 md:px-20 py-5 shadow-md">
        <div>
          <Dropdown />
        </div>
        <div className="hidden md:flex flex-row gap-6 items-center">
          <Link href="/about">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200">
              About
            </h1>
          </Link>
          <Link href="/skills">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200">
              Skills
            </h1>
          </Link>
          <Link href="#projects">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200">
              Projects
            </h1>
          </Link>
          <Link href="/contacts">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200">
              Contacts
            </h1>
          </Link>
          <Link href="#resume">
            <h1 className="text-lg font-semibold px-5 py-1 rounded-md hover:bg-gray-200">
              Resume
            </h1>
          </Link>
        </div>
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
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 items-center justify-center my-2">
          <Link href="#about">
            <h1 className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200">
              About
            </h1>
          </Link>
          <Link href="#skills">
            <h1 className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200">
              Skills
            </h1>
          </Link>
          <Link href="#projects">
            <h1 className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200">
              Projects
            </h1>
          </Link>
          <Link href="#contacts">
            <h1 className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200">
              Contacts
            </h1>
          </Link>
          <Link href="#resume">
            <h1 className="text-lg font-bold px-5 py-1 rounded-md hover:bg-gray-200">
              Resume
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
}
