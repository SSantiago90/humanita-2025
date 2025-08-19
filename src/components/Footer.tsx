import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import humanitaLogo from "@/assets/humanita-logo.png";

const Footer = () => {
  const mainMenuItems = [
    "Inicio", "Quienes Somos", "Objetivos", "Servicios", 
    "Propuesta Académica", "Contacto", "Galería"
  ];

  const quickLinks = [
    "Inscripciones", "Humanita Informa", "Certificado de Habilitación"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={humanitaLogo} alt="Humanita" className="h-10 w-auto brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">Humanita</h3>
                <p className="text-sm text-primary-foreground/80">Centro de Mediación Civil</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Cervantes 574, entre Catamarca y Santiago del Estero, Paraná</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(0343) 4231057 / Cel. 343-4667788</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>humanita.org@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 pt-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors duration-200">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors duration-200">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors duration-200">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors duration-200">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {mainMenuItems.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios de Atención</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Lunes a Viernes</p>
              <p className="font-medium">8:00 - 18:00 hs</p>
              <p className="mt-4">Sábados</p>
              <p className="font-medium">9:00 - 13:00 hs</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-primary-foreground/20">
              <p className="text-xs text-primary-foreground/60">
                Institución registrada en el Ministerio de Justicia de Entre Ríos
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Humanita - Centro de Mediación Civil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;