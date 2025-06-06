
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Game Development & API Integration",
      company: "FUTURE INNOVATIVE IT CO.,LTD",
      period: "August 2024 - January 2025",
      role: "Senior Backend Developer",
      techStack: "PHP, Laravel, PostgreSQL, Redis, LevelDB, WebSocket, SQL Triggers",
      description: "Scalable backend systems for gaming platforms, enabling seamless integration with third-party game APIs.",
      achievements: [
        "Implemented a Redis-based caching system, reducing API load times and enhancing platform performance",
        "Utilized WebSocket for real-time player interactions and optimized PostgreSQL queries for high-traffic environments",
        "Ensured secure and efficient API workflows, supporting seamless gameplay experiences for concurrent users"
      ]
    },
    {
      title: "E-Commerce Platform",
      company: "UMG MYANMAR GROUPS OF CO.,LTD",
      period: "July 2022 - June 2024",
      role: "Full-Stack Developer",
      techStack: "PHP, Laravel, MySQL, SQL Stored Procedures",
      description: "Built a high-performance platform supporting concurrent users with role-based admin/merchant panels.",
      achievements: [
        "Integrated daily/monthly sales reporting and automated discount/promotion workflows",
        "Ensured scalability for peak traffic and optimized checkout processes for reliability"
      ]
    },
    {
      title: "Teleconsultation Platform",
      company: "UMG MYANMAR GROUPS OF CO.,LTD",
      period: "July 2022 - June 2024",
      role: "Full-Stack Developer",
      techStack: "PHP, Laravel, MySQL, Redis, Twilio Services",
      description: "Developed secure and performance APIs for doctor-patient communication, appointment booking and giving prescription.",
      achievements: [
        "Streamlined consultations with automated notifications, reducing patient wait times",
        "Implemented Redis caching to cut API response times and enhancing scalability"
      ]
    },
    {
      title: "Learning Management System",
      company: "UMG MYANMAR GROUPS OF CO.,LTD",
      period: "July 2022 - June 2024",
      role: "Full-Stack Developer",
      techStack: "PHP, Vue.js, MySQL",
      description: "Designed and optimized the MySQL database schema for efficient storage of course materials and user data.",
      achievements: [
        "Collaborated on scope definition, feature implementation, and responsive frontend integration",
        "Reduced query latency through schema optimization and indexing strategies"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Experiences
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">{project.company}</Badge>
                      <Badge variant="secondary">{project.period}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Role: {project.role}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Tech Stack:</p>
                    <p className="text-sm text-foreground font-medium">{project.techStack}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
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
