import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import skyHeroBg from "@/assets/sky-hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${skyHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Changed this div to be a flex container that is centered */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-center md:text-left space-y-8 md:space-y-0 md:space-x-12 animate-fade-up">

          {/* ***********************************************
              * SECTION 1: PICTURE (REDUCED SIZE, NOW ON SIDE) *
              *********************************************** */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            {/* Reduced max-w-xs to max-w-60 (around 240px) for a smaller image, centered on small screens */}
            <div className="relative w-full max-w-60 mx-auto overflow-hidden shadow-elegant border-4 border-primary/20">
              <img
                src="dp.png"
                alt="Kommu Hemasree Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* ***********************************************
              * SECTION 2: TEXT CONTENT (NAME, PROFESSION, TAGLINE) *
              *********************************************** */}
          <div className="space-y-4 text-center md:text-left"> {/* Aligned text left on medium+ screens */}
            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight"> {/* Slightly adjusted font sizes for side-by-side */}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kommu Hemasree
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">
              Web Developer
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0"> {/* Removed auto margins for left alignment */}
              Crafting beautiful, responsive, and user-friendly web experiences
            </p>

            {/* Button and Social Links are still below the text, but contained within this flex item */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center pt-8"> {/* Left-aligned buttons on medium+ screens */}
              <Button size="lg" variant="hero" className="animate-glow">
                View My Work
              </Button>
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start pt-8"> {/* Left-aligned social links on medium+ screens */}
              <a
                href="https://github.com/hemasree1516"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/kommu-hemasree"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kommuhemasree15@gmail.com"
                className="p-3 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div> {/* End of text content div */}
        </div> {/* End of main flex container div */}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;