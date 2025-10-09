import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio (React/Tailwind)",
      description: "The single-page application you are viewing right now! Built to showcase my professional experience, skills, and key projects using modern web development standards.",
      tech: ["React", "TypeScript", "Tailwind CSS", "FormSubmit"],
      image: "port.png", // Placeholder image
      githubLink: "https://github.com/hemasree1516/portfolio-sky", // 👈 REPLACE with this Portfolio's GitHub URL
      //demoLink: "YOUR_PORTFOLIO_LIVE_URL", // 👈 REPLACE with this Portfolio's live URL (or keep empty)
    },
    {
      title: "Dormconnect (Hostel Review Platform)",
      description: "Designed and deployed a secure, scalable full-stack hostel review platform complete with robust APIs and backend serving over 100 users, focusing on accuracy and cost efficiency.",
      tech: ["HTML", "JavaScript", "PHP", "MySQL", "Scalable Backend"],
      image: "dc.png", // Placeholder image
      githubLink: "https://github.com/hemasree1516/dormconnect",
      demoLink: "https://dormconnect.42web.io/",
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Engineered a Python/Flask application featuring a dashboard that uses VADER NLP for real-time sentiment classification and instant UI updates, built with clean, tested code.",
      tech: ["Python", "Flask", "NLP (VADER)", "HTML", "CSS"],
      image: "sd.png", // Placeholder image
      githubLink: "https://github.com/hemasree1516/Sentiment-Analysis-Dashboard-L",
      demoLink: "https://hemasree.pythonanywhere.com/",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and academic projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-primary hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
              >
                <a href={project.demoLink || project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} project`}>
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </a>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {/* Link to GitHub */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>

                    {/* Link to Live Demo */}
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
