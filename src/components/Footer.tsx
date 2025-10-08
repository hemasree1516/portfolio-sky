import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t-2 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display font-bold mb-2">
                Let's Build Something <span className="text-primary">Amazing</span>
              </h3>
              <p className="text-muted-foreground">
                Always open to new opportunities and collaborations
              </p>
            </div>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Portfolio. Made with{" "}
              <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
              and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
