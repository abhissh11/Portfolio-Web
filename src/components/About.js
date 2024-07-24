import React from "react";

export default function About() {
  return (
    <div id="about" className="my-10 mx-5 md:mx-28">
      <h1 className="text-4xl font-bold text-center">about</h1>
      <div className="py-10 flex items-center justify-center">
        <div className="max-w-xl flex flex-col gap-5">
          <h2 className="text-xl text-gray-600">
            Hey there, I&aposm Abhishek, a MERN Fullstack developer hailing from
            Kolkata India. With a focus on user experience and performance
            optimization, I strive to create seamless digital experiences.
          </h2>
          <h2 className="text-lg text-gray-900">
            Let's connect and create something remarkable!
          </h2>
        </div>
      </div>
    </div>
  );
}
