"use client";

import { useState } from "react";
import faqData from "../data/faqs.json";

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl font-semibold text-[#2c4a63] leading-tight">
            Your question <br /> answered
          </h2>

          <p className="mt-10 text-xl font-semibold text-[#3b566e]">
            Need answers? We’ve got you covered.
          </p>

          <p className="mt-4 text-[#6c7a89] max-w-md">
            Below are some of the most common questions people ask us. If you
            can’t find what you're looking for, feel free to reach out!
          </p>

          <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Contact us
          </button>
        </div>

        {/* RIGHT FAQ */}
        <div className="space-y-5">
          {faqData.faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl bg-white p-6"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full justify-between items-center text-left"
                >
                  <span className="text-lg font-medium text-[#2c4a63]">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-gray-500 transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Animated Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#6c7a89]">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}