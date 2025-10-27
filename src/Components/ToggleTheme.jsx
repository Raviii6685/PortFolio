import { Moon, Sun } from "lucide-react";
export const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
    // Toggle theme
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        if (newTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        setIsDarkMode(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-3 rounded-full fixed top-4 right-4 z-10000"
            style={{
                backgroundColor: isDarkMode ? "black" : "white",
                color: isDarkMode ? "white" : "black",
            }}
        >
            {isDarkMode ? <Sun /> : <Moon />}
        </button>
    );
};