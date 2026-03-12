import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto lg:px-0 px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14">

          {/* LEFT SECTION */}
          <div className="md:pr-20 md:border-r border-gray-200">

            <div className="flex items-center gap-3 mb-5">
              <Link href="/">
                <img src="/mactriq_logo.png" className="h-10 w-auto" />
              </Link>
            </div>

            <p className="text-[#1F3F5C] max-w-md text-sm leading-relaxed">
              We believe in building autonomous physical systems that keep
              industrial machines operating reliably in the real world.
            </p>

          </div>

          {/* RIGHT SECTION */}
          <div className="md:pl-20">

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

              {/* Empty column for desktop alignment */}
              <div className="hidden sm:block"></div>

              {/* Page Links */}
              <div>
                <p className="text-[#6C7A89] text-sm mb-4">Page links</p>

                <ul className="space-y-3 text-[#1F3F5C] text-sm">

                  <li>
                    <Link href="/" className="hover:text-blue-500 transition-colors">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link href="#services" className="hover:text-blue-500 transition-colors">
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link href="#work" className="hover:text-blue-500 transition-colors">
                      Work
                    </Link>
                  </li>

                  <li>
                    <Link href="#faqs" className="hover:text-blue-500 transition-colors">
                      FAQ's
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact" className="hover:text-blue-500 transition-colors">
                      Contact us
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Social */}
              <div>

                <p className="text-[#6C7A89] text-sm mb-4">Social</p>

                <ul className="space-y-3 text-[#1F3F5C] text-sm">

                  <li>
                    <a
                      href="https://www.linkedin.com/company/mactriq/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                    >
                      <Linkedin size={18} />
                      Linkedin
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/mactriq/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-pink-500 transition-colors"
                    >
                      <Instagram size={18} />
                      Instagram
                    </a>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BORDER */}
        <div className="border-t border-gray-200 py-6 text-center md:text-left text-gray-500 text-sm">
          © Copyright 2025. All Rights Reserved by Mactriq Technologies Pvt. Ltd.
        </div>

      </div>
    </footer>
  );
}