import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerData } from "../constants/page";

const page = () => {
  return (
    <footer className="max-w-7xl mx-auto  border-t border-white/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between px-6 py-6 md:px-8 md:py-8">
        {/* Logo */}
        <Link href="/" className="mb-4 md:mb-0">
          {/* <Image
            src={footerData.logo}
            alt="PB Logo"
            width={152}
            height={152}
            priority
          /> */}
          <h1 className="text-[40px] font-bold">LOGO</h1>
        </Link>

        {/* Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
          {footerData.contact.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="group flex items-center gap-2 md:text-[17px] text-[14px] text-white transition hover:text-gray-300 font-roboto"
              >
                <Icon
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
                <span>{item.text}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default page;
