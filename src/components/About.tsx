import { Card } from "@/components/ui/card";
import { Code2, Server, Cpu } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Strong foundation in data structures, algorithms, and clean, maintainable code",
    },
    {
      icon: Server,
      title: "Full-Stack Development",
      description: "Experience building scalable web applications with APIs, databases, and modern frameworks",
    },
    {
      icon: Cpu,
      title: "AI & Problem Solving",
      description: "Hands-on experience with NLP, ML models, and applied AI systems like RAG pipelines",
    },
  ];

  return (
    <section id="aboutme" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Computer Science undergraduate focused on software engineering, full-stack development,
              and building real-world systems.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-8 text-center space-y-4 border-2 hover:border-primary transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Description */}
          <div className="bg-card p-8 md:p-12 rounded-2xl border-2 shadow-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a Computer Science Engineering student with hands-on experience in building
              full-stack applications and applied AI systems. During my internship as an AI Intern,
              I worked on retrieval-augmented generation (RAG) chatbots, optimized data ingestion and
              retrieval pipelines, and collaborated in Agile environments to deliver reliable software.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              My interests lie in software development roles where I can work across the stack —
              designing APIs, working with databases, writing efficient backend logic, and building
              clean, responsive user interfaces. I enjoy solving complex problems, learning new
              technologies quickly, and turning ideas into scalable, production-ready solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
