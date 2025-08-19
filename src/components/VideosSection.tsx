import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoThumb1 from "@/assets/video-1-thumb.jpg";
import videoThumb2 from "@/assets/video-2-thumb.jpg";
import videoThumb3 from "@/assets/video-3-thumb.jpg";
import videoThumb4 from "@/assets/video-4-thumb.jpg";

const VideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "Introducción a la Mediación Civil",
      thumbnail: videoThumb1,
      duration: "15:30",
      youtubeId: "dQw4w9WgXcQ" // Placeholder YouTube ID
    },
    {
      id: 2,
      title: "Técnicas Avanzadas de Mediación",
      thumbnail: videoThumb2,
      duration: "22:15",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Casos Prácticos en Mediación Penal",
      thumbnail: videoThumb3,
      duration: "18:45",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Mediación Comunitaria: Herramientas Esenciales",
      thumbnail: videoThumb4,
      duration: "25:10",
      youtubeId: "dQw4w9WgXcQ"
    }
  ];

  const handleVideoClick = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">
            Videos
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Accede a nuestro contenido educativo especializado en mediación civil y formación profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="card-elegant overflow-hidden group cursor-pointer hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleVideoClick(video.youtubeId)}
            >
              <div className="relative aspect-video">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {video.title}
                </h3>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary/80 px-0 h-auto font-medium"
                >
                  Ver Video →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-background hover:bg-secondary border-primary text-primary hover:text-primary/80"
          >
            Ver Todos los Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;