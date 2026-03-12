"use client";

import Image from "next/image";
import tech from "../data/techstack.json";

export default function TechStack() {

  return (
    <section className="border border-gray-100 bg-white backdrop-blur-md py-6 overflow-hidden">

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4">

        {/* Text */}
        <p className="text-[#1F3F5C] text-center md:text-left md:w-[220px] text-sm md:text-base">
          We work with modern technologies, including
        </p>

        {/* Logos */}
        <div className="relative w-full overflow-hidden">

          <div className="marquee gap-12 md:gap-24">

            {[...tech, ...tech].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 opacity-70 flex items-center justify-center"
              >

                <Image
                  src={item.logo}
                  alt={item.logo}
                  width={60}
                  height={40}
                  className="object-contain md:w-[70px]"
                />

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}