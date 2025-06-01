import "./App.css";
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { ProductAutocomplete } from "./components/ProductAutocomplete";
import { Header } from "./components/UI";
import { ThemeToggle } from "./components/UI";
import { Footer } from "./components/UI/Footer";

export const App = () => {
  return (
    <ThemeProvider>
      <div
        style={{
          minHeight: "100vh",
          background: "var(--bg-gradient)",
          padding: "48px 16px 0",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ThemeToggle />
        <div style={{ flex: "1" }}>
          <Header />
          <ProductAutocomplete />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
