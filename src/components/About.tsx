import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and user experience",
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate web developer with expertise in modern technologies and a keen eye for design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-8 text-center space-y-4 border-2 hover:border-primary hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 md:p-12 rounded-2xl border-2 shadow-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a dedicated web developer with a passion for creating exceptional digital experiences. 
              With expertise in modern frameworks and technologies, I specialize in building responsive, 
              accessible, and performant web applications. My approach combines technical excellence with 
              creative problem-solving to deliver solutions that not only meet requirements but exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
