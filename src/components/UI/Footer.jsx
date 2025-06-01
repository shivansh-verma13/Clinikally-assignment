import { ShoppingBag } from "lucide-react";

export const Footer = () => (
  <footer
    style={{
      marginTop: "64px",
      padding: "32px 16px",
      textAlign: "center",
      borderTop: `1px solid var(--border-color)`,
      backgroundColor: "var(--bg-secondary)",
      backdropFilter: "blur(10px)",
    }}
  >
    <div
      style={{
        maxWidth: "512px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          padding: "8px",
          background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
          borderRadius: "50%",
          boxShadow: "var(--shadow)",
        }}
      >
        <ShoppingBag
          style={{ width: "20px", height: "20px", color: "white" }}
        />
      </div>

      <div>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            marginBottom: "4px",
          }}
        >
          © 2025 Shivansh Verma
        </p>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-secondary)",
            opacity: 0.8,
          }}
        >
          All rights reserved
        </p>
      </div>
    </div>
  </footer>
);
