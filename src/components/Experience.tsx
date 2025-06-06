
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      company: "FUTURE INNOVATIVE IT CO.,LTD",
      position: "Senior Backend Developer",
      period: "August 2024 - January 2025",
      techStack: "PHP, Laravel, PostgreSQL, Redis, LevelDB, WebSocket, SQL Triggers",
      achievements: [
        "Spearheaded API development and seamless game API integrations, boosting system interoperability",
        "Designed a Redis-based caching system, reducing load times and improving platform efficiency",
        "Implemented WebSocket for real-time features and SQL triggers to automate critical workflows",
        "Delivered high-performance backend solutions aligned with project deadlines and stakeholder expectations"
      ]
    },
    {
      company: "UMG MYANMAR GROUPS OF CO.,LTD",
      position: "Full-Stack Developer",
      period: "July 2022 - June 2024",
      techStack: "PHP, Laravel, Vue.js, MySQL, SQL Stored Procedures",
      achievements: [
        "Built and maintained scalable web applications for e-commerce, LMS, and telemedicine platforms, ensuring seamless user experiences",
        "Collaborated with cross-functional teams to design and optimize features, improving codebase efficiency",
        "Developed RESTful APIs and integrated SQL stored procedures to enhance data processing and system performance",
        "Focused on scalability and user-centric design, adhering to best practices for high-traffic environments"
      ]
    },
    {
      company: "UMG MYANMAR GROUPS OF CO.,LTD",
      position: "Junior System Analyst",
      period: "January 2022 - June 2022",
      techStack: "Microsoft Project Timeline, Excel, Word",
      achievements: [
        "Translated user needs into actionable software requirements, ensuring alignment with stakeholder goals",
        "Conducted QA testing and troubleshooting, minimizing downtime and enhancing system reliability",
        "Documented processes and trained users, streamlining knowledge transfer across teams"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        {exp.company}
                      </h3>
                      <h4 className="text-lg font-medium text-foreground mb-2">
                        {exp.position}
                      </h4>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Tech Stack:</p>
                    <p className="text-sm text-foreground font-medium">{exp.techStack}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
