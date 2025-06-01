import React from "react";
import { ShoppingBag } from "lucide-react";

export const Header = () => (
  <div style={{ textAlign: "center", marginBottom: "32px" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          padding: "12px",
          background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
          borderRadius: "50%",
          boxShadow: "var(--shadow)",
        }}
      >
        <ShoppingBag
          style={{ width: "32px", height: "32px", color: "white" }}
        />
      </div>
    </div>
    <h1
      style={{
        fontSize: "1.875rem",
        fontWeight: "bold",
        background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "8px",
      }}
    >
      Product Search
    </h1>
    <p style={{ color: "var(--text-secondary)" }}>
      Find amazing products with smart autocomplete
    </p>
  </div>
);
