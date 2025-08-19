import Header from "@/components/Header";
import NovedadesSection from "@/components/NovedadesSection";
import ServicesSection from "@/components/ServicesSection";
import CierreAnoSection from "@/components/CierreAnoSection";
import VideosSection from "@/components/VideosSection";
import NovedadesFinalSection from "@/components/NovedadesFinalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <NovedadesSection />
        <ServicesSection />
        <CierreAnoSection />
        <VideosSection />
        <NovedadesFinalSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
