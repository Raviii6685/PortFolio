import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    const getCSSColor = (variableName) =>
        getComputedStyle(document.documentElement)
            .getPropertyValue(variableName)
            .trim();

    const bgStyle = { backgroundColor: getCSSColor("--card") };
   
    return (
        <section
            id="hero"
            className="card-hover relative min-h-screen flex flex-col items-center justify-center px-4"

        >
            <div
                className="container max-w-4xl mx-auto text-center z-10 rounded-[25px]
                   bg-[rgba(68,68,68,0.9)] shadow-[5px_5px_10px_rgba(0,0,0,0.7)] w-[70%]"
                style={bgStyle}
            >
                <div className="space-y-6">
                    <h1 className="text-1xl md:text-4xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span
                            className="text-[rgba(167,139,250,1)] opacity-0 animate-fade-in-delay-1"
                        >
                            {" "}
                            Ravi
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Singh
                        </span>
                    </h1>

                    <hr />

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Grounded in strong Computer Science Fundamentals, with expertise in Data Structures & Algorithms driving efficient problem-solving.
                        Skilled in REACT.js for modern front-end development and JAVA Spring Boot for scalable backend architecture. Experienced in AWS Cloud Infrastructure,
                        Linux System Administration, and Full-Scale Networking. Proficient in AI/ML and Generative AI, crafting intelligent, high-performance systems.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4" style={{ padding: "10px" }}>
                        <a
                            href="#projects"
                            className="cosmic-button border-2 border-black px-6 py-2"
                        >
                            Projects
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};