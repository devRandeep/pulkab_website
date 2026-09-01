"use client";
import React from "react";
import { contactData } from "../constants/page";

const Page = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:py-16 py-8 md:py-24 text-white">
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-10">
        {contactData.title}
      </h1>

      {/* Paragraphs */}
      <div className="space-y-6 sm:space-y-8 text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-white-300 max-w-5xl">
        {contactData.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        {/* Contact Links */}
        <div className="space-y-2 pt-2">
          <a
            href={`mailto:${contactData.email}`}
            className="block text-cyan-400 hover:text-cyan-300 transition break-words"
          >
            {contactData.email}
          </a>

          <a
            href={`tel:${contactData.phone}`}
            className="block text-cyan-400 hover:text-cyan-300 transition break-words"
          >
            {contactData.phone}
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/20 my-12 sm:my-20" />

      {/* Form Title */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mb-8 sm:mb-12">
        Write to us
      </h2>

      {/* Form */}
      <form className="space-y-6 sm:space-y-8 max-w-5xl">
        {/* Name */}
        <div>
          <label className="block mb-2 sm:mb-3 font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-white/40 bg-transparent px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-white transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 sm:mb-3 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border border-white/40 bg-transparent px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-white transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 sm:mb-3 font-medium">
            How can I help your brand? <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            className="w-full border border-white/40 bg-transparent px-4 sm:px-5 py-3 sm:py-4 outline-none resize-none focus:border-white transition"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full sm:w-auto border border-white px-6 sm:px-8 py-3 hover:bg-white hover:text-black transition duration-300">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Page;
