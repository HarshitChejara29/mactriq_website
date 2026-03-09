import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-0">

        <div className="grid grid-cols-1 md:grid-cols-2 py-14">

          {/* LEFT SECTION */}
          <div className="md:pr-20 md:border-r border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <img src="/mactriq_logo.png" className="h-10" />
            </div>

            <p className="text-[#1F3F5C] max-w-md text-sm leading-relaxed">
              We believe in building autonomous physical systems that keep
              industrial machines operating reliably in the real world.
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="md:pl-20 mt-10 md:mt-0 ml-auto">
            <div className="grid grid-cols-3 gap-10">

              <div></div>

              {/* Page Links */}
              <div>
                <p className="text-[#6C7A89] text-sm mb-4">Page links</p>
                <ul className="space-y-3 text-[#1F3F5C]">
                  <li className="hover:text-blue-500 transition-colors cursor-pointer">Home</li>
                  <li className="hover:text-blue-500 transition-colors cursor-pointer">Services</li>
                  <li className="hover:text-blue-500 transition-colors cursor-pointer">Work</li>
                  <li className="hover:text-blue-500 transition-colors cursor-pointer">FAQ's</li>
                  <li className="hover:text-blue-500 transition-colors cursor-pointer">Contact us</li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <p className="text-[#6C7A89] text-sm mb-4">Social</p>

                <ul className="space-y-3 text-[#1F3F5C]">
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
        <div className="border-t border-gray-200 py-8 flex justify-between items-center text-gray-500 text-sm">
          <p>© Copyright 2025. All Rights Reserved by Mactriq Technologies Pvt. Ltd.</p>
        </div>

      </div>
    </footer>
  );
}