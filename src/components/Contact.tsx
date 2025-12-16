import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_etdqr0g",
        "template_63edwar",
        form,
        "IQbD7mq6jPlF9_smS"
      );

      setSent(true);
      form.reset();
    } catch (error) {
      alert("Message failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Let’s connect and discuss opportunities
          </p>
        </div>

        <Card className="p-8 md:p-12 border-2">
          {sent ? (
            <div className="text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-primary mx-auto" />
              <h3 className="text-2xl font-semibold">Message Sent</h3>
              <Button variant="outline" onClick={() => setSent(false)}>
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={sendEmail} className="space-y-6">

              <Input
                name="from_name"
                placeholder="Your name"
                required
                className="border-2"
              />

              <Input
                name="from_email"
                type="email"
                placeholder="Your email"
                required
                className="border-2"
              />

              <Input
                name="subject"
                placeholder="Subject"
                required
                className="border-2"
              />

              <Textarea
                name="message"
                placeholder="Your message"
                rows={6}
                required
                className="border-2"
              />

              <Button
                type="submit"
                size="lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center">
            <Mail className="mx-auto text-primary" />
            <p className="mt-2 text-sm">kommuhemasree15@gmail.com</p>
          </Card>
          <Card className="p-6 text-center">
            <Phone className="mx-auto text-primary" />
            <p className="mt-2 text-sm">+91 9014972467</p>
          </Card>
          <Card className="p-6 text-center">
            <MapPin className="mx-auto text-primary" />
            <p className="mt-2 text-sm">Hyderabad</p>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Contact;
