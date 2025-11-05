import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Stats from "@/components/sections/Stats/Stats";
import GallerySection from "@/components/sections/GallerySection/GallerySection";
import EventsSection from "@/components/sections/EventsSection/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection/BlogSection";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal delay={100}>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Stats />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <GallerySection />
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
