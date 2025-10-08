import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center space-y-3 border-2 hover:border-primary transition-all duration-300">
              <div className="inline-flex p-3 bg-primary/10 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">hello@example.com</p>
            </Card>

            <Card className="p-6 text-center space-y-3 border-2 hover:border-primary transition-all duration-300">
              <div className="inline-flex p-3 bg-primary/10 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </Card>

            <Card className="p-6 text-center space-y-3 border-2 hover:border-primary transition-all duration-300">
              <div className="inline-flex p-3 bg-primary/10 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 border-2 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-2"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject"
                  placeholder="What's this about?"
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  className="border-2"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                variant="hero"
                className="w-full md:w-auto"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
