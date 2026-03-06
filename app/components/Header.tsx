"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full flex justify-center pt-6">

      <div className="flex items-center justify-between w-[900px] bg-white/70 backdrop-blur-md px-6 py-3 rounded-full shadow-sm">

        <div className="flex items-center gap-2 font-semibold">
          <span className="text-green-600">M</span>
          <span>Mactriq</span>
        </div>

        <nav className="flex gap-8 text-sm text-gray-600">
          <Link href="/">Services</Link>
          <Link href="/">Work</Link>
          <Link href="/">FAQs</Link>
        </nav>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
          Contact us
        </button>

      </div>
    </header>
  )
}