import Hero from "@/components/sections/Hero/Hero";
import AboutGallery from "@/components/sections/AboutGallery/AboutGallery";
import EventsSection from "@/components/sections/EventsSection/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection/BlogSection";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal delay={100}>
        <AboutGallery />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <EventsSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <BlogSection />
      </ScrollReveal>
    </main>
  );
}
