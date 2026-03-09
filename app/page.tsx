import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}