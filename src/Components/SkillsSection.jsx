import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // frontend
    { name: "HTML/CSS", level: 75, category: "frontend" },
    { name: "JavaScript", level: 40, category: "frontend" },
    { name: "React", level: 95, category: "frontend" },
    { name: "TypeScript", level: 75, category: "frontend" },
    { name: "Tailwind CSS", level: 60, category: "frontend" },

    // backend
    { name: "SpringBoot", level: 99, category: "backend" },
    { name: "Django", level: 45, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },
    { name: "MySQL", level: 100, category: "backend" },

    // tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "AWS", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "INTELIJ", level: 95, category: "tools" },

    // AI/ML
    { name: "Machine Learning", level: 90, category: "AI" },
    { name: "Deep Learning", level: 90, category: "AI" },
    { name: "Computer Vision", level: 60, category: "AI" },
    { name: "Generative AI", level: 50, category: "AI" },
];

const categories = ["all", "frontend", "backend", "AI", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const getCSSColor = (variableName) =>
        getComputedStyle(document.documentElement)
            .getPropertyValue(variableName)
            .trim();

    // Theme colors dynamically
    const bgColor = getCSSColor("--background");
    const primaryColor = getCSSColor("--primary");
    const secondaryColor = getCSSColor("--foreground");
    const cardColor = getCSSColor("--card");
    const textColor = getCSSColor("--primary");
    const mutedColor = getCSSColor("--foreground-primary");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section
            id="skills"
            className="py-24 px-4 relative"
            style={{  color: textColor }}
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span style={{ color: primaryColor }}>Skills</span>
                </h2>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            style={{
                                backgroundColor:
                                    activeCategory === category ? primaryColor : secondaryColor,
                                color:
                                    activeCategory === category ? bgColor : getCSSColor("--primary"),
                                border: `1px solid ${primaryColor}`,
                                transition: "all 0.3s ease",
                            }}
                            className={cn(
                                "px-5 py-2 rounded-full capitalize shadow-sm hover:scale-105"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skill Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="p-6 rounded-lg card-hover"
                            style={{
                                backgroundColor: cardColor,
                                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            {/* Skill bar */}
                            <div
                                style={{
                                    backgroundColor: `${secondaryColor}90`,
                                    height: "8px",
                                    borderRadius: "5px",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        width: `${skill.level}%`,
                                        backgroundColor: primaryColor,
                                        height: "100%",
                                        borderRadius: "5px",
                                        transition: "width 1.5s ease-out",
                                    }}
                                ></div>
                            </div>

                            <div className="text-right mt-1">
                                <span style={{ color: mutedColor, fontSize: "0.9rem" }}>
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};