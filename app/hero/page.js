"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../constants/page";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between each child
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const Page = () => {
  return (
    <div className="container mx-auto md:px-6 px-3">
      {/* Parent motion.div controls stagger */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {aboutData.map((item) => (
          <motion.h2
            key={item.id}
            variants={fadeUp}
            className="text-white text-left text-2xl md:text-4xl lg:text-[50px] py-6 md:py-8"
          >
            {item.title}
          </motion.h2>
        ))}

        <motion.div variants={fadeUp}>
          <Link
            href="/work"
            className="text-white text-left text-2xl md:text-4xl lg:text-[50px] py-6 md:py-8 underline underline-offset-4 hover:text-[#e558e5] transition-colors"
          >
            See our work
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
