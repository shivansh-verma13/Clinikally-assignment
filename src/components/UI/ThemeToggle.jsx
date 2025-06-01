import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        zIndex: 50,
        padding: "12px",
        backgroundColor: "var(--bg-primary)",
        border: `1px solid var(--border-color)`,
        borderRadius: "50%",
        boxShadow: "var(--shadow)",
        transition: "all 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div style={{ position: "relative", width: "24px", height: "24px" }}>
        <Sun
          style={{
            position: "absolute",
            inset: "0",
            width: "24px",
            height: "24px",
            color: "#f59e0b",
            opacity: theme === "light" ? 1 : 0,
            transform: theme === "light" ? "rotate(0deg)" : "rotate(180deg)",
            transition: "all 0.3s ease",
          }}
        />
        <Moon
          style={{
            position: "absolute",
            inset: "0",
            width: "24px",
            height: "24px",
            color: "#3b82f6",
            opacity: theme === "dark" ? 1 : 0,
            transform: theme === "dark" ? "rotate(0deg)" : "rotate(-180deg)",
            transition: "all 0.3s ease",
          }}
        />
      </div>
    </button>
  );
};
