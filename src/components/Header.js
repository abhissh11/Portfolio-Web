"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const fullNavItems = [
    { item: "Home", link: "/" },
    { item: "About", link: "#about" },
    { item: "Skills", link: "#skills" },
    { item: "Projects", link: "#projects" },
    { item: "Work", link: "#experience" },
    { item: "Blogs", link: "/blogs" },
    { item: "Contact", link: "#contact" },
  ];

  const minimalNavItems = [
    { item: "Home", link: "/" },
    { item: "Blogs", link: "/blogs" },
    { item: "Connect on X", link: "https://x.com/abhissh11" },
  ];

  // nav items to show based on the route
  const navItems = pathname === "/" ? fullNavItems : minimalNavItems;

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Header */}
      <div className="fixed w-full z-50 px-6 md:px-12 py-4 bg-base flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <button className="px-4 py-2 rounded text-white text-base font-semibold bg-chase">
              abhissh11
            </button>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-8">
            {navItems.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.link}
                  className="text-base font-light text-white hover:text-blue-500 transition"
                >
                  {nav.item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-lg font-semibold bg-chase rounded p-2 md:hidden"
          onClick={handleMenuClick}
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 z-40 md:hidden">
          <ul className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.link}
                  className="text-lg font-light text-gray-100 hover:text-blue-500 transition"
                  onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
                >
                  {nav.item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
