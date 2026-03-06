import work from "../data/work.json"
import Image from "next/image"

export default function Work() {
  return (
    <section className="py-24 max-w-6xl mx-auto">

      <h2 className="text-3xl text-center font-semibold mb-16">
        What We Work On
      </h2>

      <div className="space-y-16">

        {work.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-10 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >

            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-500">
                {item.description}
              </p>

              <button className="mt-4 text-blue-500">
                Get in touch →
              </button>
            </div>

            <div className="flex-1">
              <Image
                src={item.image}
                alt=""
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}