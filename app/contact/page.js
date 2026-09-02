"use client";
import React, { useState } from "react";
import { contactData } from "../constants/page";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6c80779a-311e-4d1d-8cea-a2cc1ff767b2",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        console.error("Web3Forms error:", result.message);
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>

      <section
        suppressHydrationWarning
        className="max-w-6xl mx-auto px-4 py-8 md:py-24 text-white"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-10">
          {contactData.title}
        </h1>

        <div className="space-y-6 sm:space-y-8 text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-white-300 max-w-5xl">
          {contactData.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

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
    </div >

        <hr className="border-white/20 my-12 sm:my-20" />

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mb-8 sm:mb-12">
          Write to us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 max-w-5xl">
          <div>
            <label className="block mb-2 sm:mb-3 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-white/40 bg-transparent px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block mb-2 sm:mb-3 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-white/40 bg-transparent px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block mb-2 sm:mb-3 font-medium">
              How can I help your brand? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-white/40 bg-transparent px-4 sm:px-5 py-3 sm:py-4 outline-none resize-none focus:border-white transition"
            />
          </div>

        

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto border border-white px-6 sm:px-8 py-3 hover:bg-white hover:text-black transition duration-300 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-green-400 pt-2">Message sent successfully.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 pt-2">Something went wrong. Please try again.</p>
          )}
        </form>
      </section>
    </>
  );
};

export default Page;