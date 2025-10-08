import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Figma", "Responsive Design", "Performance Optimization", "SEO"],
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of modern technologies and tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx}
                className="space-y-6 p-8 rounded-2xl bg-card border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant"
              >
                <h3 className="text-2xl font-semibold text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
