import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import novedad1 from "@/assets/novedad-1.jpg";
import novedad2 from "@/assets/novedad-2.jpg";
import novedad3 from "@/assets/novedad-3.jpg";

const NovedadesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder news items
  const novedades = [
    {
      id: 1,
      title: "Nueva Diplomatura en Mediación Penal 2025",
      image: novedad1,
      description: "Inscripciones abiertas para la nueva diplomatura en convenio con la Universidad de Lomas de Zamora"
    },
    {
      id: 2,
      title: "Capacitaciones en Mediación Comunitaria",
      image: novedad2,
      description: "Formación especializada para mediadores comunitarios con certificación oficial"
    },
    {
      id: 3,
      title: "Formación de Mediadores Capacitadores",
      image: novedad3,
      description: "Programa integral para la formación de nuevos capacitadores en mediación civil"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % novedades.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + novedades.length) % novedades.length);
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            Novedades 2025
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {novedades.map((novedad) => (
                <div key={novedad.id} className="w-full flex-shrink-0 relative">
                  <div className="aspect-[16/9] relative">
                    <img 
                      src={novedad.image} 
                      alt={novedad.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">{novedad.title}</h3>
                      <p className="text-lg opacity-90">{novedad.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {novedades.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovedadesSection;