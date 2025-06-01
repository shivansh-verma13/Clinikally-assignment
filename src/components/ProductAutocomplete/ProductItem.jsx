import React, { useState } from "react";
import { Star, ChevronDown } from "lucide-react";

export const ProductItem = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "16px",
        backgroundColor: isHovered ? "var(--hover-bg)" : "transparent",
        cursor: "pointer",
        transition: "all 0.2s ease",
        borderBottom: `1px solid var(--border-color)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(product)}
    >
      <div
        style={{
          flexShrink: 0,
          width: "64px",
          height: "64px",
          background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "var(--shadow)",
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.2s ease",
          }}
          onError={(e) => {
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAyOEwyOCAyMEwzNiAyOEw0NCAyMEw1MiAyOFY0NEg0NFYzNkwzNiA0NEwyOCAzNkwyMCA0NFYyOFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+";
          }}
        />
      </div>

      <div style={{ flex: 1, marginLeft: "16px", minWidth: 0 }}>
        <h3
          style={{
            fontWeight: "600",
            color: isHovered ? "#2563eb" : "var(--text-primary)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            transition: "color 0.2s ease",
          }}
        >
          {product.title}
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            marginTop: "4px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Star
              style={{
                width: "16px",
                height: "16px",
                color: "#f59e0b",
                fill: "#f59e0b",
              }}
            />
            <span
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                marginLeft: "4px",
              }}
            >
              {product.rating}
            </span>
          </div>
          <span
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "#10b981",
            }}
          >
            ₹{product.price}
          </span>
          {product.discountPercentage > 0 && (
            <span
              style={{
                fontSize: "0.75rem",
                backgroundColor: "#fee2e2",
                color: "#dc2626",
                padding: "4px 8px",
                borderRadius: "12px",
              }}
            >
              -{product.discountPercentage}%
            </span>
          )}
        </div>
      </div>

      <ChevronDown
        style={{
          width: "20px",
          height: "20px",
          color: isHovered ? "#3b82f6" : "var(--text-secondary)",
          transform: "rotate(-90deg)",
          transition: "color 0.2s ease",
        }}
      />
    </div>
  );
};
