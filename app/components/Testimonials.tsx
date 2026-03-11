"use client";

import data from "../data/testimonials.json";
import { motion } from "framer-motion";

export default function Testimonials() {

  const testimonials = [...data.testimonials, ...data.testimonials];

  const getColor = (name: string) => {
    const colors = [
      "bg-green-600",
      "bg-blue-600",
      "bg-purple-600",
      "bg-orange-600",
      "bg-pink-600",
      "bg-teal-600"
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <section className="py-20 md:py-24 bg-[#f7f9fb] overflow-hidden">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-semibold text-[#1F3F5C] mb-12 md:mb-16 px-4"
      >
        Testimonials
      </motion.h2>

      <div className="relative w-full overflow-hidden">

        <div className="marquee gap-4 md:gap-8 px-4">

          {testimonials.map((item, index) => {

            const firstLetter = item.name.charAt(0).toUpperCase();
            const color = getColor(item.name);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-[280px] sm:w-[320px] md:max-w-[500px] bg-white border border-gray-200 rounded-xl p-4 md:p-5 shadow-sm flex-shrink-0"
              >

                {/* User */}
                <div className="flex items-center gap-3 mb-3">

                  <div
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-semibold ${color}`}
                  >
                    {firstLetter}
                  </div>

                  <div>
                    <p className="font-semibold text-[#1F3F5C] text-sm md:text-base">
                      {item.name}
                    </p>
                    <p className="text-xs md:text-sm text-[#6C7A89]">
                      {item.date}
                    </p>
                  </div>

                </div>

                {/* Stars */}
                <div className="flex text-yellow-400 mb-2 md:mb-3 text-base md:text-lg">
                  ★★★★★
                </div>

                {/* Review */}
                <p className="text-[#6C7A89] text-xs md:text-sm leading-relaxed">
                  {item.review}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}