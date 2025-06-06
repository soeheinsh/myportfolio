
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">My Profile</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Passionate backend developer with 4 years of expertise in building scalable web applications and APIs using PHP, Laravel, and Vue.js. Skilled in:
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Designing secure RESTful APIs for web and mobile apps
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integrating third-party services (payment gateways, real-time systems)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Implementing authentication/authorization systems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborating with frontend teams to deliver seamless user experiences
                </li>
              </ul>
              
              <p className="text-muted-foreground text-lg leading-relaxed mt-6">
                A quick learner who thrives in fast-paced environments. Actively exploring cloud computing (AWS, DevOps) to enhance technical capabilities.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Education</h4>
                <div className="space-y-2">
                  <p className="text-primary font-medium">Bachelor of Computer Science (B.C.Sc.)</p>
                  <p className="text-muted-foreground">Computer University (Myanmar)</p>
                  <p className="text-sm text-muted-foreground">2015 - 2020</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Personal Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date of Birth:</span>
                    <span className="text-foreground">10 Oct 1999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nationality:</span>
                    <span className="text-foreground">Myanmar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground">Yogyakarta, Indonesia</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-foreground">Single</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
