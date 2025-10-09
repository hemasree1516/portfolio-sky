import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Award, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Viswam.AI (Remote, Part-time)",
      period: "June 2025 - September 2025",
      description: "Applied software engineering methods to design and develop a RAG-based chatbot for document LLM's, leveraging modern tech stack to build and optimize prototypes.",
      achievements: [
        "Built and deployed RAG-based chatbot prototypes using Streamlit and Gradio.",
        "Improved efficiency of document ingestion and retrieval.",
        "Conducted code reviews, debugging, and optimization, ensuring maintainable and reliable software.",
        "Collaborated in Agile sprints, contributing to design discussions and improving deployment turnaround.",
        "Tech Stack: Python, NLP, Flask, REST APIs, UI/UX.",
      ],
    },
    // Older, generic data commented out
  ];

  const certifications = [
    // ----------------------------------------------------
    // LATEST CERTIFICATIONS (JULY - AUGUST 2025)
    // ----------------------------------------------------
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate: Demonstrated foundational knowledge in OCI and <strong>AI principles</strong> (Issued Aug 10, 2025).",
    "Accenture Software Engineering Job Simulation (Forage): Completed practical modules on <strong>Architecture, Security, Programming, Testing, and Agile</strong> methodologies (Issued Jul 19, 2025).",
    "J.P. Morgan Chase & Co. Software Engineering Job Simulation (Forage): Completed practical tasks covering <strong>Project Setup, Kafka, H2, and REST API Integration</strong> (Issued Jul 11, 2025).",
    "Deloitte Data Analytics Job Simulation (Forage): Completed practical tasks in <strong>Data Analysis and Forensic Technology</strong> (Issued Jul 7, 2025).",

    // ----------------------------------------------------
    // INFOSYS & INTERNSHALA COURSES (MAY - JUNE 2025)
    // ----------------------------------------------------
    "Infosys Springboard: Java Foundation Certification & DSA: Mastered core Java concepts, <strong>Data Structures and Algorithms</strong>, and <strong>Programming using Java</strong> (Issued June 2025).",
    "Internshala 4-week Internship & Job Preparation Training: Focused on career readiness, <strong>job hunting, and final project modules</strong> (Issued Jun 9, 2025).",
    "Infosys Springboard: Software Engineering, Agile & Databases: Comprehensive training in <strong>SDLC, Agile Scrum, DBMS (SQL & NoSQL)</strong>, and <strong>Programming using Java</strong> (Issued June 2025).",
    "Infosys Springboard: Professional Skills: Comprehensive training in <strong>Time Management, Email Writing, and High Impact Presentations</strong> (Issued June 2025).",
    "Internshala 8-week Web Development Training: Covered key web technologies including <strong>HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, and React</strong> (Issued May 5, 2025).",

    // ----------------------------------------------------
    // PYTHON & CLOUD INTERNSHIPS (EARLIER 2024/2025)
    // ----------------------------------------------------
    "SSSIT Diploma in Python: Completed a <strong>two-month course</strong> demonstrating proficiency in Python programming (Issued Jan 24, 2025).",
    "ZSCALER Workshop on Cloud Security (SDC-SB): Active participation and successful completion of the ZSCALER Workshop on <strong>network and cloud security</strong> (Nov 2024).",
    "Google AI-ML Virtual Internship (AICTE EduSkills): Completed a 10-week internship focused on <strong>AI/ML concepts and implementation</strong>, supported by Google for Developers (Apr - Jun 2024).",
    "SDC Figma UI/UX Hands-on Workshop: Completed practical workshop on <strong>UI/UX design principles</strong> using Figma (Issued Mar 21, 2024).",
    "AICTE EduSkills 10-week Cloud Virtual Internship: Practical experience in essential <strong>cloud concepts</strong>, supported by AWS Academy (Jan - Mar 2024).",
    "AWS Academy Graduate - Cloud Architecting: Completed 40 hours of training covering <strong>architectural best practices</strong> for designing scalable, highly available systems on AWS (Issued Feb 24, 2024).",

    // ----------------------------------------------------
    // FOUNDATIONAL COURSES (2023)
    // ----------------------------------------------------
    "AWS Academy Graduate - Cloud Foundations: Completed 20 hours of training covering core AWS cloud concepts, security, and services (Issued Dec 4, 2023).",
    "Cisco Networking Academy: Introduction to Cybersecurity: Demonstrated ability to explain cyber threats, network vulnerabilities, and Cisco's approach to defense (Issued Nov 28, 2023).",
  ];

  const extracurriculars = [
    "Junior Documentation Lead - X-Kernel Coding Club: Coordinated technical content and documentation.",
    "Active Member - Street Cause (Social Impact Club): Contributed to community development initiatives.",
    "Winner of SIH Internal Hackathon (Team Leader).",
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Work <span className="text-primary">Experience</span> & <span className="text-primary">Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey, key accomplishments, and continuous learning achievements.
            </p>
          </div>

          {/* Professional Experience Section */}
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
                  <p className="font-semibold text-sm uppercase tracking-wide">Key Contributions:</p>
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

          {/* *******************************************
              * NEW SECTION: CERTIFICATIONS (DETAILED) *
              ******************************************* */}
          <h3 className="text-3xl font-display font-bold text-center pt-8">
            <span className="text-primary">Certifications</span>
          </h3>
          <Card
            className="p-8 border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300 hover:-translate-x-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <p className="font-semibold text-lg uppercase tracking-wide">Professional Certifications</p>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">★</span>
                  {/* 💥 DANGER: FIX: Use dangerouslySetInnerHTML to render HTML inside the string */}
                  <span
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: cert }}
                  />
                </li>
              ))}
            </ul>
          </Card>

          {/* *******************************************
              * NEW SECTION: LEADERSHIP & EXTRACURRICULARS *
              ******************************************* */}
          <h3 className="text-3xl font-display font-bold text-center pt-8">
            <span className="text-primary">Leadership</span> & Activities
          </h3>
          <Card
            className="p-8 border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300 hover:-translate-x-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <p className="font-semibold text-lg uppercase tracking-wide">Clubs & Achievements</p>
            </div>
            <ul className="space-y-3">
              {extracurriculars.map((activity, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span className="text-muted-foreground">{activity}</span>
                </li>
              ))}
            </ul>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Experience;