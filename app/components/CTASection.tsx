"use client";

import Link from "next/link";
import cta from "../data/cta.json";
import { motion, Variants } from "framer-motion";

export default function CTASection() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      className="relative py-30 bg-center bg-cover bg-no-repeat lg:px-0 px-4"
      style={{ backgroundImage: `url(${cta.background})` }}
    >

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-120px" }}
        className="relative max-w-3xl mx-auto text-center"
      >

        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2c4a63] leading-tight"
        >
          {cta.title}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-4 text-[#5c7387] text-sm sm:text-base leading-relaxed max-w-md mx-auto"
        >
          {cta.description}
        </motion.p>

        <motion.div variants={item}>
          <Link href={cta.buttonLink} target="_blank">
            <button
              className="mt-6 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-medium
              bg-gradient-to-r from-blue-500 to-blue-400 cursor-pointer
              hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              {cta.buttonText}
            </button>
          </Link>
        </motion.div>

      </motion.div>

    </section>
  );
}