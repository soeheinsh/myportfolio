
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, Linkedin, MessageCircle, Video } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+62 812 2517 1826",
      href: "tel:+6281225171826"
    },
    {
      icon: Mail,
      label: "Email",
      value: "soehein.dev883@gmail.com",
      href: "mailto:soehein.dev883@gmail.com"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+62 812 2517 1826",
      href: "https://wa.me/6281225171826"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "www.linkedin.com/in/soehein-dev",
      href: "https://www.linkedin.com/in/soehein-dev"
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@Soe_Hein",
      href: "https://t.me/Soe_Hein"
    },
    {
      icon: Video,
      label: "Viber",
      value: "+95 9422179288",
      href: "viber://chat?number=%2B959422179288"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <contact.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {contact.label}
                  </h3>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 break-all"
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            © 2025 Soe Hein. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
