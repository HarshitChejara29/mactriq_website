"use client";

import { MessageCircle, MapPin, Phone } from "lucide-react";
import CTASection from "../components/CTASection";
import { motion, Variants } from "framer-motion";
import contactData from "../data/contactCards.json";

export default function ContactPage() {

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

  const iconMap: any = {
    message: MessageCircle,
    map: MapPin,
    phone: Phone
  };

  return (
    <>
      <CTASection />

      <section className="py-16 md:py-20 lg:px-0 px-4 bg-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-120px" }}
          className="max-w-7xl mx-auto"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

            {contactData.contacts.map((card, index) => {

              const Icon = iconMap[card.icon];

              return (

                <motion.a
                  key={index}
                  variants={item}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-sm"
                >

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-[#eef3f7]">
                      <Icon size={26} className="text-[#1F3F5C]" />
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-[#1F3F5C]">
                        {card.title}
                      </h3>
                      <p className="text-[#6C7A89] text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="my-4 border-t border-gray-200 lg:mt-8 mt-6"></div>
                  <p className="mt-5 md:mt-6 text-base md:text-lg font-semibold text-[#1F3F5C] leading-relaxed">
                    {card.value}
                  </p>

                </motion.a>

              )
            })}

          </div>

        </motion.div>
      </section>
    </>
  );
}