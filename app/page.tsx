import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-shv h-svh text-white">
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <ClientsSection />
        <PortfolioSection />
      </main>
    </>
  );
}
