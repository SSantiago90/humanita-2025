import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import humanitaLogo from "@/assets/humanita-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainMenuItems = [
    "Inicio", "Quienes Somos", "Objetivos", "Servicios", 
    "Propuesta Académica", "Contacto", "Galería"
  ];

  const secondaryMenuItems = [
    "Inscripciones", "Humanita Informa", "Certificado de Habilitación"
  ];

  return (
    <header className="bg-card border-b border-border/50 header-shadow sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(0343) 4231057</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>humanita.org@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>Cervantes 574, Paraná, Entre Ríos</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={humanitaLogo} alt="Humanita" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Humanita</h1>
              <p className="text-sm text-muted-foreground">Centro de Mediación Civil</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {mainMenuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Secondary Menu */}
        <div className="hidden lg:flex justify-center mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center space-x-4">
            {secondaryMenuItems.map((item) => (
              <Button
                key={item}
                variant="outline"
                className="bg-[hsl(var(--secondary-dark))] text-white hover:bg-[hsl(var(--secondary-dark))]/90 border-[hsl(var(--secondary-dark))]"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {mainMenuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 border-t border-border/30 space-y-2">
                {secondaryMenuItems.map((item) => (
                  <Button
                    key={item}
                    variant="outline"
                    className="w-full justify-start bg-accent text-accent-foreground"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;