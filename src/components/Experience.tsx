import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Award, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Viswam.AI · Remote (Part-time)",
      period: "June 2025 – September 2025",
      description:
        "Worked on building and optimizing retrieval-augmented generation (RAG) systems for document-based LLM applications, focusing on performance, reliability, and clean software design.",
      achievements: [
        "Built and deployed RAG-based chatbot prototypes using Streamlit and Gradio.",
        "Optimized document ingestion and retrieval pipelines to improve response efficiency.",
        "Performed debugging, code reviews, and refactoring to improve maintainability.",
        "Collaborated in Agile sprints and contributed to design and deployment discussions.",
        "Tech stack: Python, NLP, Flask, REST APIs, UI/UX.",
      ],
    },
  ];

  const certifications = [
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "AWS Academy Graduate – Cloud Architecting",
    "Google AI-ML Virtual Internship (AICTE EduSkills)",
    "Infosys Springboard – Java, DSA & Software Engineering",
    "Internshala Web Development Training (HTML, CSS, JavaScript, React, PHP)",
  ];

  const leadership = [
    "Winner – Smart India Hackathon (Internal Round), Team Leader",
    "TCS CodeVita Season XIII – Round 1 Qualified (Global Rank 214)",
    "Finalist – VJ Hackathon 2025",
    "Documentation Lead – X-Kernel Coding Club",
    "Active Member – Street Cause (Social Impact Club)",
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Experience & <span className="text-primary">Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience, certifications, and leadership highlights.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    </div>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-center">
              <span className="text-primary">Certifications</span>
            </h3>
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <p className="font-semibold uppercase tracking-wide">
                  Key Credentials
                </p>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">★</span>
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Leadership & Activities */}
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-center">
              <span className="text-primary">Leadership</span> & Activities
            </h3>
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <p className="font-semibold uppercase tracking-wide">
                  Roles & Achievements
                </p>
              </div>
              <ul className="space-y-2">
                {leadership.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
