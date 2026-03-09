import hero from "../data/hero.json"
import TechStack from "./TechStack"

export default function Hero() {
  return (
    <>
    <section className="bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat pt-60 pb-24 text-center relative z-0">

      <h1 className="text-6xl font-semibold text-[#1F3F5C] leading-tighter">
        Autonomous Systems
      </h1>
      <h1 className="text-6xl font-semibold text-[#6C7A89] leading-tight">
        Built for the Real World.
      </h1>

      <p className="mt-6 text-[#1F3F5C] max-w-2xl mx-auto">
        {hero.description}
      </p>

      <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full">
        {hero.button}
      </button>

    </section>
    <TechStack />
    </>
  )
}