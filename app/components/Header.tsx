"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {

  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">

      <div className="flex items-center justify-between w-full max-w-5xl bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/mactriq_logo.png" alt="Mactriq Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-[#1F3F5C]">
          <Link href="#services" className="hover:text-blue-500 transition-colors">
            Services
          </Link>
          <Link href="#work" className="hover:text-blue-500 transition-colors">
            Work
          </Link>
          <Link href="#faqs" className="hover:text-blue-500 transition-colors">
            FAQs
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button
              className="px-6 py-3 rounded-full text-white font-medium
              bg-gradient-to-r from-blue-500 to-blue-400
              hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
            >
              Contact us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1F3F5C]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 w-full px-4 md:hidden">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 text-[#1F3F5C] font-medium">

            <Link href="#services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="#work" onClick={() => setOpen(false)}>
              Work
            </Link>

            <Link href="#faqs" onClick={() => setOpen(false)}>
              FAQs
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              <button className="w-full mt-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-400 cursor-pointer">
                Contact us
              </button>
            </Link>

          </div>
        </div>
      )}

    </header>
  )
}