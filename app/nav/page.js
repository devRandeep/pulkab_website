"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_DATA } from "../constants/page";

const NavPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-black text-white w-full">
      <div className="flex md:justify-center justify-between items-center px-6 py-6 md:flex-row flex-row-reverse">
        {/* Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {/* Simple hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </div>
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center mt-4">
          {/* <Image
            src={HEADER_DATA.logo}
            alt="Logo"
            width={230}
            height={50}
            className="object-contain w-[150px] h-[auto] sm:w-[280px] sm:h-[auto]"
          /> */}
          <h1 className="text-[40px] font-bold">LOGO</h1>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-start px-6 space-y-4">
          {HEADER_DATA.navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`md:text-[18px] text-[14px] font-inter border-b border-gray-600 pb-1 w-full transition-colors ${
                  isActive ? "text-[#e558e5]" : "hover:text-[#e558e5]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center gap-8 py-4">
        {HEADER_DATA.navLinks.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[18px] font-inter transition-colors ${
                isActive ? "text-[#e558e5]" : "hover:text-[#e558e5]"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      
    </header>
  );
};

export default NavPage;
