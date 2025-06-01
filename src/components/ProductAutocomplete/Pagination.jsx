import React from "react";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
}) => {
  if (totalPages <= 1) return null;

  const buttonStyle = {
    padding: "8px 16px",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "var(--text-primary)",
    backgroundColor: "var(--bg-primary)",
    border: `1px solid var(--border-color)`,
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const disabledStyle = {
    ...buttonStyle,
    opacity: 0.5,
    cursor: "not-allowed",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        backgroundColor: "var(--bg-secondary)",
        borderTop: `1px solid var(--border-color)`,
      }}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        style={currentPage === 1 || isLoading ? disabledStyle : buttonStyle}
      >
        Previous
      </button>

      <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        style={
          currentPage === totalPages || isLoading ? disabledStyle : buttonStyle
        }
      >
        Next
      </button>
    </div>
  );
};
