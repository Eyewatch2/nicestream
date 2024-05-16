import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Header from "@/components/HomeHeader";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_WORDPRESS_API_URL);
  
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
