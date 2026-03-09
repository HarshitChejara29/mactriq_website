"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-center pt-6">

      <div className="flex items-center justify-between w-[900px] bg-white/70 backdrop-blur-md px-6 py-3 rounded-full shadow-sm">

        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold">
          <img src="/mactriq_logo.png" alt="Mactriq Logo" className="h-8 w-auto" />
        </div>

        {/* Center Nav */}
        <nav className="flex items-center gap-6 font-medium text-[#1F3F5C]">
          <Link href="/services" className="hover:text-blue-500 transition-colors">
            Services
          </Link>
          <Link href="/work" className="hover:text-blue-500 transition-colors">
            Work
          </Link>
          <Link href="/faqs" className="hover:text-blue-500 transition-colors">
            FAQs
          </Link>
        </nav>

        {/* Contact Button */}
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
          Contact us
        </button>

      </div>

    </header>
  )
}