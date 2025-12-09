"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle Dark Mode"
      className={`
        relative w-14 h-7 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary
        ${theme === "dark" ? "bg-slate-700" : "bg-blue-100"}
      `}
    >
      <span
        className={`
          block w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out
          ${theme === "dark" ? "translate-x-7 bg-primary" : "translate-x-0 bg-white"}
        `}
      />
    </button>
  );
};

export default ThemeToggle;

