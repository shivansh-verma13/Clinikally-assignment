import React from "react";
import { AlertCircle } from "lucide-react";

export const ErrorMessage = ({ message, onRetry }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 0",
      color: "#ef4444",
    }}
  >
    <AlertCircle
      style={{ width: "20px", height: "20px", marginRight: "8px" }}
    />
    <span style={{ marginRight: "16px" }}>{message}</span>
    {onRetry && (
      <button
        onClick={onRetry}
        style={{
          color: "#3b82f6",
          textDecoration: "underline",
          fontSize: "0.875rem",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        Retry
      </button>
    )}
  </div>
);
