import Image from "next/image"
import tech from "../data/techstack.json"

export default function TechStack() {
  const logos = [...tech, ...tech, ...tech] // duplicate for infinite scroll

  return (
    <section className="border border-gray-100 bg-white/70 backdrop-blur-md py-6 overflow-hidden">

      <div className="max-w-7xl mx-auto flex items-center gap-10">

        <p className="text-[#1F3F5C] w-[220px]">
          We work with modern technologies, including
        </p>

        <div className="flex overflow-hidden flex-1">

          <div className="flex items-center gap-5 animate-marquee">

            {logos.map((item, index) => (
              <div key={index} className="flex items-center opacity-70">
                <Image
                  src={item.logo}
                  alt={item.logo}
                  width={110}
                  height={80}
                  className="w-auto h-auto"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}