import React from "react";
import { Package } from "lucide-react";

export const EmptyState = ({ query }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 0",
      color: "var(--text-secondary)",
    }}
  >
    <Package
      style={{
        width: "48px",
        height: "48px",
        marginBottom: "16px",
        opacity: "0.5",
      }}
    />
    <p style={{ fontSize: "1.125rem", fontWeight: "500", marginBottom: "8px" }}>
      No products found
    </p>
    <p style={{ fontSize: "0.875rem" }}>
      Try searching for "{query}" with different keywords
    </p>
  </div>
);
