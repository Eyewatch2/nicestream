import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Header from "@/components/HomeHeader";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  
  return (
    <>
      <div>
        <Header />

        <main className="text-white">
          <HeroSection />
          <AboutSection />
          <TestimonialsSection />
          <ClientsSection />
          <PortfolioSection />
        </main>
      </div>
    </>
  );
}
