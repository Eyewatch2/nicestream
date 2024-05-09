import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-shv h-svh text-white">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ClientsSection />
    </main>
  );
}
