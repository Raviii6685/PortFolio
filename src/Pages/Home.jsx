import { ThemeToggle } from "../Components/ToggleTheme"
import Background from "../Components/Background"
import { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "../Components/NavBar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load saved theme on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);
    const handleThemeToggle = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className="min-h-screen relative" >
            {/* // 1. Theme Toogle (should be in the last) */}


            {/* // 2. BackGround Effects   */}
            <Background isDarkMode={isDarkMode} />
            <ThemeToggle onClick={handleThemeToggle} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            {/* //3. Navbar */}
            <Navbar></Navbar>
            {/* //4. Main Content  */}
            <main>
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/* //5. Footer  */}



        </div>
    )
}