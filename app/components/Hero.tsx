"use client"

import Link from "next/link";
import hero from "../data/hero.json";
import TechStack from "./TechStack";
import { motion, Variants } from "framer-motion";

export default function Hero() {

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
    <>
      <section
        className="bg-cover bg-center bg-no-repeat 
        pt-40 md:pt-56 lg:pt-60 
        pb-20 md:pb-24 
        text-center relative z-0 px-6"
        style={{ backgroundImage: `url(${hero.background})` }}
      >

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1F3F5C] leading-tight"
          >
            {hero.titleLine1}
          </motion.h1>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#6C7A89] leading-tight"
          >
            {hero.titleLine2}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-sm sm:text-base md:text-lg text-[#1F3F5C] max-w-2xl mx-auto"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={item}>
            <Link href={hero.buttonLink}>
              <button
                className="mt-8 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-medium
                bg-gradient-to-r from-blue-500 to-blue-400
                hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
              >
                {hero.button}
              </button>
            </Link>
          </motion.div>

        </motion.div>

      </section>

      <TechStack />
    </>
  );
}