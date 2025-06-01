import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Define theme colors
  const themeStyles = {
    light: {
      "--bg-primary": "#ffffff",
      "--bg-secondary": "#f8fafc",
      "--bg-gradient":
        "linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #fae8ff 100%)",
      "--text-primary": "#111827",
      "--text-secondary": "#6b7280",
      "--border-color": "#e5e7eb",
      "--shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      "--hover-bg": "#f3f4f6",
    },
    dark: {
      "--bg-primary": "#1f2937",
      "--bg-secondary": "#374151",
      "--bg-gradient":
        "linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)",
      "--text-primary": "#f9fafb",
      "--text-secondary": "#d1d5db",
      "--border-color": "#4b5563",
      "--shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
      "--hover-bg": "#4b5563",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
};
