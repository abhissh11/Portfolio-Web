import { Icon } from "@iconify/react";
import {
  AlignRight,
  ArrowRight,
  ArrowRightCircle,
  MoveUpRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Contacts() {
  return (
    <div id="contacts" className="min-h-screen mb-5 mx-5 md:mx-28 ">
      <h1 className="text-4xl font-bold text-center">
        connect <span className="text-pink-600"> : </span>
        <span className="text-blue-600">contact</span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-10 py-20">
        <h2 className="text-3xl font-bold text-center">
          Connect with me on socials :
        </h2>
        <div className="flex flex-row items-center justify-center gap-14 flex-wrap mt-10">
          <Link
            href="https://www.instagram.com/abhiishekkr/"
            target="_blank"
            className="flex gap-1 items-center py-1  hover:scale-95"
          >
            <Icon icon="uil:instagram" className="w-8 h-8" />

            <h2 className="text-md font-bold">Instagram</h2>
          </Link>
          <Link
            href="https://x.com/dev_abhishekkr"
            target="_blank"
            className="flex gap-1 items-center py-1 hover:scale-95"
          >
            <Icon icon="devicon:twitter" className="w-6 h-6" />
            <h2 className="text-md font-bold">Twitter(X)</h2>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abhishekkr-dev/"
            target="_blank"
            className="flex gap-1 items-center py-1  hover:scale-95"
          >
            <Icon icon="uil:linkedin" className="w-8 h-8" />
            <h2 className="text-md font-bold">LinkedIn</h2>
          </Link>

          <Link
            href="https://github.com/dev-abhishekkr"
            target="_blank"
            className="flex gap-1 items-center py-1  hover:scale-95"
          >
            <Icon icon="uil:github" className="w-8 h-8" />
            <h2 className="text-md font-bold">GitHub</h2>
          </Link>
        </div>
        <h2 className="text-md  pt-10 text-center  ">
          or, mail me at{" "}
          <Link
            href="mailto:dev.abhishekkr@gmail.com"
            className="pb-1 font-semibold hover:border-b border-black"
          >
            dev.abhishekkr@gmail.com
          </Link>
        </h2>
      </div>
      <p className="text-sm text-gray-500 flex flex-row gap-0 items-center justify-center">
        Website designed and developed by -
        <Link
          href="https://www.linkedin.com/in/abhishekkr-dev/"
          target="_blank"
          className="text-center flex flex-row"
        >
          <span className="text-blue-500 hover:underline">Abhishek</span>
          <span className="text-blue-500 hover:scale-110">
            <MoveUpRight size={20} />
          </span>
        </Link>
      </p>
    </div>
  );
}
