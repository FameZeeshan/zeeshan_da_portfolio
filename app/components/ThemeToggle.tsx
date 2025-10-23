"use client";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={toggle}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      <style jsx>{`
        .theme-toggle {
          border: none;
          background: none;
          cursor: pointer;
          font-size: 1.15rem;
          margin-left: 1rem;
          color: #005c97;
          transition: color 0.3s;
        }
        .theme-toggle:hover {
          color: #ffd700;
        }
      `}</style>
    </button>
  );
};
export default ThemeToggle;
