"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import data from "../data/work.json";
import { motion, Variants, useMotionValue, useTransform, animate, useInView } from "framer-motion";

export default function Work() {

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
    <section className="py-20 md:py-24 bg-[#f7f9fb]" id="work">
      <div className="max-w-7xl mx-auto lg:px-0 px-4">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-120px" }}
        >

          {/* TOP CARD */}
          <motion.div
            variants={item}
            className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm"
          >

            <h2 className="text-3xl md:text-5xl font-semibold text-[#1F3F5C] mb-6">
              {data.title}
            </h2>

            <p className="text-[#1F3F5C] max-w-4xl leading-relaxed text-sm md:text-base">
              {data.description}
            </p>

            {/* Divider */}
            <div className="my-8 md:my-10 border-t border-gray-200"></div>

            {/* Bottom Info */}
            <div className="flex items-center justify-between">

              <div>
                <p className="font-semibold text-[#1F3F5C]">
                  {data.founder.name}
                </p>
                <p className="text-[#6C7A89] text-sm">
                  {data.founder.role}
                </p>
              </div>

              <Image
                src={data.founder.logo}
                alt="logo"
                width={30}
                height={30}
              />

            </div>

          </motion.div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6">

            {data.stats.map((itemStat, index) => {

              const number = parseInt(itemStat.value);
              const suffix = itemStat.value.replace(number.toString(), "");

              const count = useMotionValue(0);
              const rounded = useTransform(count, latest => Math.floor(latest));

              const ref = useRef(null);
              const isInView = useInView(ref, { once: true });

              useEffect(() => {
                if (isInView) {
                  const controls = animate(count, number, {
                    duration: 2,
                    ease: "easeOut"
                  });
                  return controls.stop;
                }
              }, [isInView, number, count]);

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  variants={item}
                  className="bg-white border border-gray-200 rounded-2xl py-8 md:py-10 text-center shadow-sm"
                >

                  <h3 className="text-3xl md:text-4xl font-semibold text-[#1F3F5C]">
                    <motion.span>{rounded}</motion.span>
                    {suffix}
                  </h3>

                  <p className="mt-2 text-[#6c7a89] text-sm md:text-base">
                    {itemStat.label}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </motion.div>

      </div>
    </section>
  );
}