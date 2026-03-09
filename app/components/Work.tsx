import Image from "next/image";

export default function HowWeWork() {
  return (
    <section className="py-24 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CARD */}
        <div className="bg-white border border-gray-200 rounded-3xl p-12">

          <h2 className="text-5xl font-semibold text-[#2c4a63] mb-6">
            How We Work
          </h2>

          <p className="text-xl text-[#3b566e] max-w-4xl leading-relaxed">
            We prefer finished or running systems over talking about ideas.
            We work closely with operators and engineers, and avoid
            hype-driven approaches.
          </p>

          {/* Divider */}
          <div className="my-10 border-t border-gray-200"></div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between">

            <div>
              <p className="font-semibold text-lg text-[#2c4a63]">
                Aditya Sharma
              </p>
              <p className="text-[#6c7a89]">Founder & CEO</p>
            </div>

            {/* Logo */}
            <Image
              src="/logo-icon.png"
              alt="logo"
              width={40}
              height={40}
            />

          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white border border-gray-200 rounded-2xl py-10 text-center">
            <h3 className="text-4xl font-semibold text-[#2c4a63]">98%</h3>
            <p className="mt-2 text-[#6c7a89]">Satisfaction Rate</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl py-10 text-center">
            <h3 className="text-4xl font-semibold text-[#2c4a63]">3X</h3>
            <p className="mt-2 text-[#6c7a89]">Faster Decision-Making</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl py-10 text-center">
            <h3 className="text-4xl font-semibold text-[#2c4a63]">40%</h3>
            <p className="mt-2 text-[#6c7a89]">Cost Reduction</p>
          </div>

        </div>

      </div>
    </section>
  );
}