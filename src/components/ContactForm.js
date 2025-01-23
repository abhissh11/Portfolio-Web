"use client";
import { CONTACTFORM_ID } from "@/constants/config";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://formspree.io/f/${CONTACTFORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success toast
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // Error toast
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <div className="w-full">
      {/*  toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center justify-center w-full"
      >
        <div className="flex gap-1 flex-col w-full md:w-2/3">
          <label htmlFor="name" className="text-base font-semibold">
            Name
          </label>
          <input
            placeholder="Full Name"
            id="name"
            name="name"
            type="text"
            className="border px-4 py-2 bg-gray-200 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full md:w-2/3">
          <label htmlFor="email" className="text-base font-semibold">
            Email
          </label>
          <input
            placeholder="name@abhissh.com"
            type="email"
            id="email"
            name="email"
            className="border px-4 py-2 bg-gray-200 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full md:w-2/3 ">
          <label htmlFor="message" className="text-base font-semibold">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            className="border px-4 py-2 bg-gray-200 rounded"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full md:w-2/3 mt-6"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
