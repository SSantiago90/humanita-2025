import { Calendar, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import newsThumb1 from "@/assets/news-thumb-1.jpg";
import newsThumb2 from "@/assets/news-thumb-2.jpg";
import newsThumb3 from "@/assets/news-thumb-3.jpg";

const NovedadesFinalSection = () => {
  const novedades = [
    {
      id: 1,
      titulo: "Nueva Convocatoria para Mediadores",
      subtitulo: "Apertura de inscripciones para el período 2025",
      descripcion: "Se abre una nueva convocatoria para la formación de mediadores especializados en el área civil. El programa incluye 120 horas académicas distribuidas en módulos teóricos y prácticos, con docentes de reconocida trayectoria en el campo de la mediación y resolución alternativa de disputas.",
      fecha: "15 de Enero, 2025",
      autor: "Dr. María González",
      imagen: newsThumb1
    },
    {
      id: 2,
      titulo: "Convenio con Universidad de Lomas de Zamora",
      subtitulo: "Fortalecimiento de la propuesta académica institucional",
      descripcion: "Humanita firma un importante convenio de cooperación académica con la Universidad de Lomas de Zamora para el desarrollo conjunto de programas de postgrado en mediación. Este acuerdo permitirá ampliar la oferta educativa y brindar certificaciones con validez nacional a nuestros estudiantes.",
      fecha: "10 de Enero, 2025",
      autor: "Lic. Carlos Rodríguez",
      imagen: newsThumb2
    },
    {
      id: 3,
      titulo: "Jornada de Actualización Profesional",
      subtitulo: "Nuevas tendencias en mediación civil y familiar",
      descripcion: "Se realizará una jornada intensiva de actualización profesional dirigida a mediadores matriculados. El evento abordará las últimas modificaciones normativas, nuevas técnicas de intervención y casos prácticos relevantes. La participación otorga puntaje para la recertificación profesional según normativa vigente.",
      fecha: "5 de Enero, 2025",
      autor: "Dra. Ana Martínez",
      imagen: newsThumb3
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            Novedades
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente informado sobre las últimas noticias y actualizaciones de nuestro centro de mediación
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {novedades.map((novedad, index) => (
            <article 
              key={novedad.id}
              className="card-elegant p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="flex-shrink-0 mb-4 lg:mb-0">
                  <img 
                    src={novedad.imagen} 
                    alt={novedad.titulo}
                    className="w-24 h-18 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <header className="mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-2 hover:text-primary/80 transition-colors duration-200">
                      {novedad.titulo}
                    </h3>
                    <h4 className="text-xl text-muted-foreground font-medium mb-3">
                      {novedad.subtitulo}
                    </h4>
                  </header>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{novedad.fecha}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{novedad.autor}</span>
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed mb-6">
                    {novedad.descripcion}
                  </p>

                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 px-0 h-auto font-medium group"
                  >
                    Leer más 
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-background hover:bg-secondary border-primary text-primary hover:text-primary/80"
          >
            Ver Todas las Novedades
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NovedadesFinalSection;