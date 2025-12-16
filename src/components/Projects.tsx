import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Farmer's Stop",
      description:
        "A full-stack agricultural analytics platform handling real-time field data such as NPK, pH, and rainfall. Integrated machine learning models for crop yield and fertilizer prediction, along with NDVI-based satellite analysis to automate field health reporting.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Random Forest",
        "XGBoost",
        "NDVI Analysis",
      ],
      image: "farmers-stop.png",
      githubLink: "https://github.com/hemasree1516/Farmers_Stop"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description:
        "A Python-Flask dashboard for real-time sentiment classification using VADER NLP. Optimized backend processing to reduce response latency and deliver instant UI updates for monitoring text sentiment.",
      tech: ["Python", "Flask", "NLP", "VADER", "HTML", "CSS"],
      image: "sd.png",
     githubLink: "https://github.com/hemasree1516/Sentiment-Analysis-Dashboard-"
    },
    {
      title: "Dormconnect",
      description:
        "A full-stack hostel review and student accommodation platform with secure authentication and structured data management. Designed backend workflows and UI to reliably support daily usage by over 100 students.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: "dc.png",
      githubLink: "https://github.com/hemasree1516/dormconnect",
      
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selected academic and internship projects with real-world impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] bg-muted flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>


                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

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

                    {project.demoLink && (
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
                    )}
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
