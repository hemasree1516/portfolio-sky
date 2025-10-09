import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import React, { useState } from 'react'; // 💥 Import useState for state management

const Contact = () => {
  // 💥 STATE to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 💥 HANDLER FUNCTION to submit data using fetch
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      // 1. Send data to FormSubmit endpoint via JavaScript fetch
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          // Setting Accept header helps FormSubmit return JSON for CORS handling
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true); // 2. Show success message
        form.reset();
      } else {
        // Handle non-OK responses (e.g., rate limiting, bad data)
        console.error("Form submission failed:", response);
        alert("There was an error sending your message. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Network error during submission:", error);
      alert("A network error occurred. Please check your connection or email me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  // 💥 Thank You Message Component
  const SuccessMessage = (
    <div className="text-center p-12 space-y-4">
      <CheckCircle className="w-16 h-16 text-primary mx-auto animate-pulse" />
      <h3 className="text-3xl font-semibold text-gray-800">Thank You!</h3>
      <p className="text-lg text-muted-foreground">
        Your message has been sent successfully. I will get back to you as soon as possible.
      </p>
      <Button onClick={() => setIsSubmitted(false)} variant="outline">
        Send Another Message
      </Button>
    </div>
  );

  // 💥 Contact Form Component
  const ContactForm = (
    <form
      action="https://formsubmit.co/kommuhemasree15@gmail.com"
      method="POST"
      className="space-y-6"
      onSubmit={handleSubmit} // 💥 Use custom handler
    >
      {/* The hidden inputs are no longer needed since we handle the submission via JS */}
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            name="Name"
            placeholder="Your name"
            className="border-2"
            required // Added required attribute
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="Email"
            type="email"
            placeholder="your.email@example.com"
            className="border-2"
            required // Added required attribute
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="Subject"
          placeholder="What's this about?"
          className="border-2"
          required // Added required attribute
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="Message"
          placeholder="Tell me about your project or inquiry..."
          rows={6}
          className="border-2"
          required // Added required attribute
        />
      </div>

      <Button
        type="submit"
        size="lg"
        variant="hero"
        className="w-full md:w-auto"
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );

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
              <p className="text-sm text-muted-foreground">kommuhemasree15@gmail.com</p>
            </Card>

            <Card className="p-6 text-center space-y-3 border-2 hover:border-primary transition-all duration-300">
              <div className="inline-flex p-3 bg-primary/10 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground">+91 9014972467</p>
            </Card>

            <Card className="p-6 text-center space-y-3 border-2 hover:border-primary transition-all duration-300">
              <div className="inline-flex p-3 bg-primary/10 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">Hyderabad, Telangana</p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 border-2 shadow-lg">
            {/* 💥 CONDITIONAL RENDERING: Show message or form */}
            {isSubmitted ? SuccessMessage : ContactForm}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
