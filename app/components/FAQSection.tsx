"use client";

import Link from "next/link";
import { useState } from "react";
import faqData from "../data/faqs.json";
import { motion, Variants } from "framer-motion";

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
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
    <section className="py-20 md:py-28 lg:px-0 px-4 bg-white" id="faqs">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-120px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
      >

        {/* LEFT SIDE */}
        <motion.div variants={item} className="flex flex-col h-full">

          <h2
            className="text-3xl md:text-5xl font-semibold text-[#1F3F5C] leading-tight"
            dangerouslySetInnerHTML={{ __html: faqData.intro.title }}
          />

          <div className="mt-8 md:mt-auto">

            <p className="text-lg md:text-xl font-semibold text-[#1F3F5C]">
              {faqData.intro.subtitle}
            </p>

            <p className="mt-4 text-[#6C7A89] max-w-md text-sm md:text-base">
              {faqData.intro.description}
            </p>

            <Link href={faqData.intro.buttonLink}>
              <button
                className="mt-6 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-medium
                bg-gradient-to-r from-blue-500 to-blue-400
                hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
              >
                {faqData.intro.buttonText}
              </button>
            </Link>

          </div>

        </motion.div>

        {/* RIGHT FAQ */}
        <motion.div variants={container} className="space-y-4 md:space-y-5">

          {faqData.faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                variants={item}
                className={`border border-gray-200 rounded-xl p-4 md:p-6 transition-colors duration-300 shadow-sm
                  ${isOpen ? "bg-[#F7F9FB]" : "bg-white"}
                `}
              >

                <button
                  onClick={() => toggle(index)}
                  className="flex w-full justify-between items-center text-left cursor-pointer"
                >

                  <span className="text-base md:text-lg font-medium text-[#1F3F5C] pr-4">
                    {faq.question}
                  </span>

                  <span className="text-xl md:text-2xl text-[#1F3F5C] transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                {/* Animated Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3 md:mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#6C7A89] text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}

        </motion.div>

      </motion.div>

    </section>
  );
}