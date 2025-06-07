
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img
              src="/lovable-uploads/b74851fa-3b87-4588-9319-133a74e3f0d0.png"
              alt="Soe Hein"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-xl object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
            Soe Hein
          </h1>
          
          <h2 className="text-xl md:text-3xl text-primary mb-6 animate-fade-in">
            Senior Backend Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Passionate backend developer with 4 years of expertise in building scalable web applications and APIs using PHP, Laravel, and Vue.js
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button
              onClick={scrollToAbout}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};
