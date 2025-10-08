import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Lead development of client-facing web applications using React and TypeScript. Mentor junior developers and establish coding standards.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "Web Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed responsive websites and web applications for various clients across different industries.",
      achievements: [
        "Delivered 20+ client projects",
        "Achieved 95% client satisfaction rate",
        "Introduced modern development practices",
      ],
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2019 - 2020",
      description: "Contributed to the development of the company's main product, learning modern web technologies and best practices.",
      achievements: [
        "Shipped features used by 10K+ users",
        "Collaborated with design team",
        "Participated in agile development",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Work <span className="text-primary">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300 hover:-translate-x-2"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    </div>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="space-y-2">
                  <p className="font-semibold text-sm uppercase tracking-wide">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
