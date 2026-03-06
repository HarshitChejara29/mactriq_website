import hero from "../data/hero.json"

export default function Hero() {
  return (
    <section className="pt-24 pb-20 text-center">

      <h1 className="text-5xl font-semibold text-gray-800 leading-tight">
        {hero.title}
      </h1>

      <p className="mt-6 text-gray-500 max-w-xl mx-auto">
        {hero.description}
      </p>

      <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full">
        {hero.button}
      </button>

    </section>
  )
}