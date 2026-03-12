"use client";

import { MessageCircle, MapPin, Phone } from "lucide-react";
import CTASection from "../components/CTASection";
import { motion, Variants } from "framer-motion";

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

            {/* Chat with Sales */}
            <motion.div
              variants={item}
              className="bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-sm"
            >

              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-[#eef3f7] mb-5 md:mb-6">
                <MessageCircle size={26} className="text-[#1F3F5C]" />
              </div>

              <h3 className="text-xl md:text-3xl font-semibold text-[#1F3F5C]">
                Chat with Sales
              </h3>

              <p className="text-[#6C7A89] text-sm">
                Talk to our product experts.
              </p>

              <p className="mt-5 md:mt-6 text-base md:text-lg font-semibold text-[#1F3F5C]">
                contact@mactriq.com
              </p>

            </motion.div>

            {/* Visit Office */}
            <motion.div
              variants={item}
              className="bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-sm"
            >

              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-[#eef3f7] mb-5 md:mb-6">
                <MapPin size={26} className="text-[#1F3F5C]" />
              </div>

              <h3 className="text-xl md:text-3xl font-semibold text-[#1F3F5C]">
                Visit Our Office
              </h3>

              <p className="text-[#6C7A89] text-sm">
                Stop by and meet the team.
              </p>

              <p className="mt-5 md:mt-6 text-base md:text-lg font-semibold text-[#1F3F5C] leading-relaxed">
                511, International Finance Center,
                <br />
                VIP Road, Surat Gujarat - 395007
              </p>

            </motion.div>

            {/* Call with Sales */}
            <motion.div
              variants={item}
              className="bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-sm"
            >

              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-[#eef3f7] mb-5 md:mb-6">
                <Phone size={26} className="text-[#1F3F5C]" />
              </div>

              <h3 className="text-xl md:text-3xl font-semibold text-[#1F3F5C]">
                Call with Sales
              </h3>

              <p className="text-[#6C7A89] text-sm">
                Connect with our team.
              </p>

              <p className="mt-5 md:mt-6 text-base md:text-lg font-semibold text-[#1F3F5C]">
                +91 76002-45497
              </p>

            </motion.div>

          </div>

        </motion.div>
      </section>
    </>
  );
}