import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CierreAnoSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Placeholder gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://www.humanitaong.com.ar/img/galeria/hd/1.jpg",
      alt: "Ceremonia de graduación 2024"
    },
    {
      id: 2,
      src: "https://www.humanitaong.com.ar/img/galeria/hd/3.jpg",
      alt: "Encuentro de mediadores"
    },
    {
      id: 3,
      src: "https://www.humanitaong.com.ar/img/galeria/hd/4.jpg",
      alt: "Capacitación especializada"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Cierre de Año 2024
            </h2>
            <div className="w-24 h-1 bg-accent mb-8"></div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Cerramos un año extraordinario marcado por el crecimiento y la excelencia en la formación 
                de mediadores especializados. Durante 2024, hemos consolidado nuestro compromiso con la 
                educación de calidad y la resolución pacífica de conflictos.
              </p>
              
              <p>
                Más de 200 profesionales se han capacitado en nuestros programas, contribuyendo al 
                fortalecimiento del sistema de mediación civil en la región. Agradecemos a todos los 
                participantes, docentes y colaboradores que hicieron posible estos logros.
              </p>
              
              <p>
                Nuestro compromiso continúa en 2025 con nuevos programas de formación y una propuesta 
                académica renovada que responde a las demandas actuales del sistema judicial.
              </p>
            </div>
          </div>

          {/* Gallery Carousel */}
          <div className="relative animate-slide-up">
            <div className="card-elegant overflow-hidden">
              <div className="relative aspect-[4/3]">
                <img 
                  src={galleryImages[currentImage].src}
                  alt={galleryImages[currentImage].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Overlay */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-white/90 hover:bg-white shadow-lg"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-white/90 hover:bg-white shadow-lg"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImage + 1} / {galleryImages.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-12 h-8 rounded border-2 transition-colors duration-200 ${
                    index === currentImage 
                      ? 'border-primary' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img 
                    src={galleryImages[index].src}
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CierreAnoSection;