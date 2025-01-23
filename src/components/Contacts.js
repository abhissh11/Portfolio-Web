import { Hash, Linkedin, Mail, Phone, X } from "lucide-react";
import React from "react";
import ContactForm from "./ContactForm";

export default function Contacts() {
  return (
    <div
      id="contact"
      className="h-fit py-20 px-6 md:px-20 flex flex-col gap-16 justify-center items-center"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-center text-3xl tracking-wide font-bold">
          Get in Touch
        </h1>
        <p className="text-lg font-normal text-gray-700 text-center">
          Let&apos;s discuss your project and bring your ideas to life
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-20 items-center w-full justify-around">
        <div className="flex flex-col gap-4 justify-center items-start">
          <div className="flex gap-4 items-center">
            <p className="bg-blue-200 rounded-full">
              <Linkedin size={44} className=" p-2" />
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold">Linkedin</p>
              <p className="text-sm font-normal text-gray-700">
                abhishekkr-dev
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p className="bg-blue-200 rounded-full">
              <Mail size={44} className=" p-2" />
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold">Email</p>
              <p className="text-sm font-normal text-gray-700">
                abhishekkr.ssh@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <p className="bg-blue-200 rounded-full">
              <Hash size={44} className=" p-2" />
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold">X [Twitter]</p>
              <p className="text-sm font-normal text-gray-700">abhissh11</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-end">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
