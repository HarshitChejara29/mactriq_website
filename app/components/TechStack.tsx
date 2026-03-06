import tech from "../data/techstack.json"
import Image from "next/image"

export default function TechStack() {
  return (
    <section className="border-y py-8">

      <div className="max-w-6xl mx-auto flex justify-between items-center opacity-70">

        {tech.map((item, i) => (
          <Image
            key={i}
            src={item.logo}
            alt=""
            width={100}
            height={40}
          />
        ))}

      </div>

    </section>
  )
}