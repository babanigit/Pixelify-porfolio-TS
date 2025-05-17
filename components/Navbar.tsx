"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 border rounded"
        >
            Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
    );
}
