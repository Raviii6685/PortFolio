import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper"; // reuse from previous setup

// Reusable small sub-component for contact details
const ContactItem = ({ Icon, title, value, href }) => (
    <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
            <h4 className="font-medium">{title}</h4>
            {href ? (
                <a
                    href={href}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    {value}
                </a>
            ) : (
                <p className="text-muted-foreground">{value}</p>
            )}
        </div>
    </div>
);

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <SectionWrapper
            id="contact"
            title="Get In Touch"
            subtitle="Have a project in mind or want to collaborate? Feel free to reach out — I'm always open to discussing new opportunities."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-secondary/30 p-6 rounded-xl">
                {/* Left Side - Contact Info */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6">
                        <ContactItem
                            Icon={Mail}
                            title="Email"
                            value="ravikhichar9715@gmail.com"
                            href="mailto:ravikhichar9715@gmail.com"
                        />
                        <ContactItem
                            Icon={Phone}
                            title="Phone"
                            value="+91 86840-46685"
                            href="tel:+918684046685"
                        />
                        <ContactItem
                            Icon={MapPin}
                            title="Location"
                            value="Greater Noida, UP, India"
                        />
                    </div>

                    <div className="pt-8 text-center">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center text-muted-foreground hover:text-primary transition-colors">
                            <a href="https://www.linkedin.com/in/ravi-singh-24a86324b/" target="_blank"><Linkedin /></a>
                            <a href="#" target="_blank"><Twitter /></a>
                            <a href="#" target="_blank"><Instagram /></a>
                            <a href="#" target="_blank"><Twitch /></a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-card p-8 rounded-lg shadow-xs space-y-6"
                >
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Ravi ...."
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="ravi@gmail.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello, I'd like to talk about..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2"
                        )}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send size={16} />
                    </button>
                </form>
            </div>
        </SectionWrapper>
    );
};