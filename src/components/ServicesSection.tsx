import { Button } from "@/components/ui/button";
import heroMediationImg from "@/assets/hero-mediation.jpg";
import coordinacionImg from "@/assets/coordinacion-general.jpg";
import capacitacionesDesarrolloImg from "@/assets/capacitaciones-desarrollo.jpg";
import capacitacionesProgramadasImg from "@/assets/capacitaciones-programadas.jpg";

const ServicesSection = () => {
  return (
    <section className="py-0">
      {/* Hero Image with Overlay Text */}
      <div className="relative h-96 mb-16">
        <img 
          src={heroMediationImg} 
          alt="Centro de Mediación"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="card-elegant max-w-2xl mx-4 p-8 text-center animate-scale-in">
            <p className="text-lg text-foreground leading-relaxed">
              Brindamos servicios especializados en mediación civil con más de 15 años de experiencia, 
              formando profesionales capacitados y ofreciendo soluciones efectivas para la resolución 
              pacífica de conflictos en el ámbito legal.
            </p>
          </div>
        </div>
      </div>

      {/* Three Service Cards */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coordinación General */}
          <div className="relative group overflow-hidden rounded-lg shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <img 
                src={coordinacionImg} 
                alt="Coordinación General"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Coordinación General</h3>
                <p className="text-sm opacity-90 mb-4">
                  Gestión integral de programas de mediación y coordinación de equipos especializados.
                </p>
                <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-primary">
                  Más Información
                </Button>
              </div>
            </div>
          </div>

          {/* Capacitaciones en Desarrollo */}
          <div className="relative group overflow-hidden rounded-lg shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <img 
                src={capacitacionesDesarrolloImg} 
                alt="Capacitaciones en Desarrollo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Capacitaciones en Desarrollo</h3>
                <p className="text-sm opacity-90 mb-4">
                  Programas formativos continuos para el desarrollo profesional en mediación.
                </p>
                <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-primary">
                  Ver Cursos
                </Button>
              </div>
            </div>
          </div>

          {/* Capacitaciones Programadas */}
          <div className="relative group overflow-hidden rounded-lg shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <img 
                src={capacitacionesProgramadasImg} 
                alt="Capacitaciones Programadas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Capacitaciones Programadas</h3>
                <p className="text-sm opacity-90 mb-4">
                  Cronograma de formaciones especializadas con certificación oficial.
                </p>
                <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-primary">
                  Ver Cronograma
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;