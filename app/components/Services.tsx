import services from "../data/services.json";

export default function Services() {
  return (
    <section className="px-10 py-24 max-w-6xl mx-auto">

      <h2 className="text-4xl font-semibold mb-12">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="border border-neutral-800 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold">
              {service.title}
            </h3>

            <p className="text-neutral-400 mt-4">
              {service.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}