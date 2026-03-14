"use client";

import { MessageCircle, MapPin, Phone } from "lucide-react";
import CTASection from "../components/CTASection";
import { motion, Variants } from "framer-motion";
import contactData from "../data/contactCards.json";
import { useState } from "react";

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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  const { firstName, lastName, email, phone, message } = formData;

  if (!firstName || !lastName || !email || !phone || !message) {
    alert("Please fill all fields");
    return;
  }

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (data.success) {
    setSuccess(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  } else {
    alert("Something went wrong");
  }
};

  return (
    <>

      {/* Heading */}
      <section className="md:pt-40 pt-28 md:pb-20 pb-10 text-center bg-[#f7f9fb]">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#1F3F5C]">
          Contact Us
        </h1>
        <p className="mt-2 text-[#6C7A89]">We're here to help.</p>
      </section>

      {/* Main Contact Section */}
      <section className="pb-20 bg-[#f7f9fb] lg:px-0 px-4">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-120px" }}
          className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8"
        >

          {/* LEFT CONTACT FORM */}
          <motion.div
            variants={item}
            className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-sm"
          >

            <h2 className="text-2xl md:text-3xl font-semibold text-[#1F3F5C] mb-8">
              Get in touch with us
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="text-sm text-[#6C7A89]">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter Your First Name"
                    className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-[#6C7A89]">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Your Last Name"
                    className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

              </div>

              <div>
                <label className="text-sm text-[#6C7A89]">Work email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm text-[#6C7A89]">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setFormData({ ...formData, phone: value });
                  }}
                  placeholder="Enter Your Phone No."
                  className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm text-[#6C7A89]">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What do you have on your mind?"
                  className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                className="w-full mt-4 py-4 rounded-full text-white font-medium
                bg-gradient-to-r from-blue-500 to-blue-400
                hover:scale-[1.02] transition shadow-lg"
              >
                Submit
              </button>

            </form>

          </motion.div>


          {/* RIGHT CONTACT CARDS */}
          <div className="g:col-span-1 flex flex-col gap-6">

            {contactData.contacts.map((card, index) => {

              const Icon = iconMap[card.icon];

              return (

                <motion.a
                  key={index}
                  variants={item}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm"
                >

                  {/* <div className="flex items-start gap-4"> */}

                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#eef3f7]">
                      <Icon size={24} className="text-[#1F3F5C]" />
                    </div>

                    {/* <div> */}

                      <h3 className="text-lg font-semibold text-[#1F3F5C] mt-4">
                        {card.title}
                      </h3>

                      <p className="text-[#6C7A89] text-sm">
                        {card.description}
                      </p>

                      <p className="mt-4 text-[#1F3F5C] font-semibold text-sm md:text-base leading-relaxed">
                        {card.value}
                      </p>

                    {/* </div> */}

                  {/* </div> */}

                </motion.a>

              )
            })}

          </div>

        </motion.div>

      </section>

      <CTASection />

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl">

            <h3 className="text-2xl font-semibold text-[#1F3F5C]">
              Form Submitted 🎉
            </h3>

            <p className="text-[#6C7A89] mt-2">
              Thank you! We'll get back to you soon.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-6 px-6 py-2 rounded-full text-white
              bg-gradient-to-r from-blue-500 to-blue-400"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </>
  );
}