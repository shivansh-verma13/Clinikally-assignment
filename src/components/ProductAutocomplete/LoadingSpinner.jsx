import React from "react";
import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 0",
    }}
  >
    <Loader2
      style={{
        width: "24px",
        height: "24px",
        color: "#3b82f6",
        animation: "spin 1s linear infinite",
      }}
    />
    <span style={{ marginLeft: "8px", color: "var(--text-secondary)" }}>
      Searching products...
    </span>
    <style>
      {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);
