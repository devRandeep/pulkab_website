"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioDatas } from "../constants/page";

const Page = () => {
  return (
    <section className="max-w-7xl mx-auto md:px-6 px-3 md:py-20 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioDatas.map((item) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.slug}`}
            className="group relative overflow-hidden rounded-xl bg-black"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={650}
              className="w-full md:h-[500px] h-[200] object-cover object-top transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45 opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* Text */}
            <div className="absolute left-8 bottom-8 text-white translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <h2 className="text-5xl font-serif">{item.title}</h2>
              <p className="mt-2 text-lg text-white/80 hover:underline">View Project</p>
            </div>

            {/* Arrow */}
            <div className="absolute top-8 right-8 opacity-0 translate-x-6 -translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowUpRight
                size={42}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;