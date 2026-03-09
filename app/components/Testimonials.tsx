"use client";

import Image from "next/image";
import data from "../data/testimonials.json";

export default function Testimonials() {
  const testimonials = [...data.testimonials, ...data.testimonials];

  return (
    <section className="py-24 bg-[#f7f9fb] overflow-hidden">

      {/* Title */}
      <h2 className="text-center text-5xl font-semibold text-[#2c4a63] mb-16">
        Testimonials
      </h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">

        <div className="flex gap-8 animate-marquee w-max">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[420px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >

              {/* User */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />

                <div>
                  <p className="font-semibold text-[#2c4a63]">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 mb-4 text-lg">
                ★★★★★
              </div>

              {/* Review */}
              <p className="text-[#5c7387] leading-relaxed">
                {item.review}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}