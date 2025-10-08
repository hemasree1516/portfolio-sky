import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.88)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Web Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Crafting beautiful, responsive, and user-friendly web experiences
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-8">
            <Button size="lg" variant="hero" className="animate-glow">
              View My Work
            </Button>
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="#" 
              className="p-3 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
