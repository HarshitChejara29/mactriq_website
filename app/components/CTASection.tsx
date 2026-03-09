export default function CTASection() {
  return (
    <section
      className="relative py-36 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Overlay (optional for softer look) */}

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center px-6">

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2c4a63] leading-tight">
          Start making your life <br />
          easier with Mactriq
        </h2>

        <p className="mt-4 text-[#5c7387] leading-relaxed max-w-md mx-auto">
          If you are dealing with an unstable physical or industrial system and
          want a clear technical assessment, reach out.
        </p>

        <button
          className="mt-6 px-8 py-4 rounded-full text-white font-medium
          bg-gradient-to-r from-blue-500 to-blue-400
          hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Get Started Today
        </button>

      </div>
    </section>
  );
}