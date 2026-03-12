"use client"

import Image from "next/image"
import servicesData from "../data/services.json"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Services() {

  return (
    <section className="py-16 lg:py-24 bg-[#f7f9fc] px-4 lg:px-0" id="services">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1F3F5C] mb-12 lg:mb-20">
          What We Work On
        </h2>

        {/* spacing */}
        <div className="space-y-16 lg:space-y-[220px]">

          {servicesData.services.map((service, index) => {

            const isReverse = index % 2 !== 0

            return (

              <div key={index} className="lg:sticky lg:top-24">

                <motion.div
                  initial={{ opacity: 0, y: 120, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: false, margin: "-120px" }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 bg-white rounded-2xl shadow-xl border border-gray-200
                  p-6 sm:p-8 lg:p-16
                  ${isReverse ? "lg:flex-row-reverse" : ""}`}
                >

                  {/* TEXT */}
                  <div className="flex-1">

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-[#1F3F5C]">
                      {service.title}
                    </h3>

                    <p className="text-[#1F3F5C] mb-6 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#1F3F5C] text-sm sm:text-base">

                          <span className="mt-1 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs shrink-0">
                            ✓
                          </span>

                          {point}

                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <button className="mt-6 text-blue-600 font-medium cursor-pointer">
                        Get in touch →
                      </button>
                    </Link>

                  </div>

                  {/* IMAGE */}
                  <div className="flex-1 w-full">

                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-xl shadow w-full h-auto"
                    />

                  </div>

                </motion.div>

              </div>

            )
          })}

        </div>

      </div>
    </section>
  )
}