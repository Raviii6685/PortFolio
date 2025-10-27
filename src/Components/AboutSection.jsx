import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  const getCSSColor = (variableName) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();

  const bgStyle = { backgroundColor: getCSSColor("--background") };
  const textColor = { color: getCSSColor("--primary") };

  const InfoCard = ({ icon: Icon, title, description }) => (
    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4" style={bgStyle}>
        <div className="p-3 rounded-full bg-primary/10" style={bgStyle}>
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg" style={bgStyle}>
            {title}
          </h4>
          <p className="text-muted-foreground" style={bgStyle}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-24 px-4 relative" style={textColor}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About{" "}
          <span className="text-primary" style={bgStyle}>
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-2" style={bgStyle}>
            <h3 className="text-2xl font-semibold" style={bgStyle}>
              Web Developer
            </h3>

            <p className="text-muted-foreground" style={bgStyle}>
              With over 3 years of experience in software development, I specialize in building scalable, high-performance applications using JAVA Spring Boot,
              REACT.js, and AWS Cloud. My expertise spans AI/ML, Generative AI, and system-level design, with a strong foundation in Computer Science Fundamentals,
              Data Structures, and Networking.
            </p>

            <p className="text-muted-foreground" style={bgStyle}>
              I’m passionate about architecting efficient and intelligent solutions to complex problems, leveraging my expertise in FULL-STACK development, AI/ML,
              and Cloud technologies
              . I continuously explore emerging tools, frameworks, and methodologies to stay at the cutting edge
              of the ever-evolving software and AI landscape, delivering robust, scalable, and innovative systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button" style={bgStyle}>
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1XWyN6Pv9OItRS8D2B7fzeGKESCO6OpIr/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                style={bgStyle}
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-1 gap-6">
            <InfoCard
              icon={Code}
              title="Web Development"
              description="Deploying robust, scalable web applications."
            />
            <InfoCard
              icon={User}
              title="AI / ML"
              description="Proficient in Deep Learning models and GenAI."
            />
            <InfoCard
              icon={Briefcase}
              title="Project Management"
              description="Leading projects from conception to completion with agile methodologies."
            />
          </div>
        </div>
      </div>
    </section>
  );
};