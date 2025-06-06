
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["PHP", "Laravel", "Node.js"],
      color: "bg-blue-500"
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Bootstrap", "Vue.js", "React.js"],
      color: "bg-green-500"
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "Redis"],
      color: "bg-purple-500"
    },
    {
      title: "Cloud Services",
      skills: ["AWS", "Digital Ocean"],
      color: "bg-orange-500"
    },
    {
      title: "Tools",
      skills: ["Git", "Jira", "Microsoft Project Timeline"],
      color: "bg-gray-500"
    },
    {
      title: "Third Party Integration",
      skills: ["Real-time services", "Payment Gateways", "End-to-end project integration", "Firebase services"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              ** Familiar and capable of development (self-taught/personal projects)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
