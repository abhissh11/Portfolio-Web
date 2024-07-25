"use client";
import React from "react";
import { ArrowUp, ArrowUpCircle, ChevronsUp } from "lucide-react";

export default function ScrollTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 md:right-16 z-10 rounded-md bg-black text-white  p-2 shadow-md
       hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-gray-300"
    >
      <ArrowUp size={24} />
    </button>
  );
}
