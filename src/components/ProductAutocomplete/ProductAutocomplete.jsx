import React, { useState, useEffect, useCallback, useRef } from "react";
import { Search, Loader2, Star } from "lucide-react";
import { useDebounce } from "../../hooks/useDebounce";
import { useClickOutside } from "../../hooks/useClickOutside";
import { productAPI } from "../../services/ProductAPI";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorMessage } from "./ErrorMessage";
import { EmptyState } from "./EmptyState";
import { ProductItem } from "./ProductItem";
import { Pagination } from "./Pagination";

export const ProductAutocomplete = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const debouncedQuery = useDebounce(query, 300);

  const itemsPerPage = 10;

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const searchProducts = useCallback(
    async (searchQuery, page = 1) => {
      if (searchQuery.length < 2) {
        setProducts([]);
        setIsOpen(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const skip = (page - 1) * itemsPerPage;
        const data = await productAPI.searchProducts(
          searchQuery,
          itemsPerPage,
          skip
        );

        setProducts(data.products || []);
        setTotalProducts(data.total || 0);
        setTotalPages(Math.ceil((data.total || 0) / itemsPerPage));
        setIsOpen(true);
      } catch (err) {
        console.log("err", err);
        setError("Failed to search products. Please try again.");
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    },
    [itemsPerPage]
  );

  useEffect(() => {
    if (debouncedQuery) {
      setCurrentPage(1);
      searchProducts(debouncedQuery, 1);
    } else {
      setProducts([]);
      setIsOpen(false);
    }
  }, [debouncedQuery, searchProducts]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    searchProducts(debouncedQuery, newPage);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setSelectedProduct(null);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setQuery(product.title);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    if (products.length > 0) {
      setIsOpen(true);
    }
  };

  const handleRetry = () => {
    if (debouncedQuery) {
      searchProducts(debouncedQuery, currentPage);
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "512px", margin: "0 auto" }}>
      {/* Search Input */}
      <div style={{ position: "relative" }} ref={dropdownRef}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "0 auto 0 0",
              paddingLeft: "16px",
              display: "flex",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <Search
              style={{
                height: "20px",
                width: "20px",
                color: "var(--text-secondary)",
              }}
            />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={(e) => {
              handleInputFocus();
              e.target.style.borderColor = "#3b82f6";
              e.target.style.boxShadow = "0 0 0 4px rgba(59, 130, 246, 0.1)";
            }}
            placeholder="Search for products..."
            style={{
              width: "100%",
              paddingLeft: "48px",
              paddingRight: "16px",
              paddingTop: "16px",
              paddingBottom: "16px",
              fontSize: "1.125rem",
              border: `2px solid var(--border-color)`,
              borderRadius: "24px",
              transition: "all 0.2s ease",
              backgroundColor: "var(--bg-primary)",
              color: "var(--text-primary)",
              boxShadow: "var(--shadow)",
              outline: "none",
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border-color)";
              e.target.style.boxShadow = "var(--shadow)";
            }}
          />
          {isLoading && (
            <div
              style={{
                position: "absolute",
                inset: "0 16px 0 auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Loader2
                style={{
                  height: "20px",
                  width: "20px",
                  color: "#3b82f6",
                  animation: "spin 1s linear infinite",
                }}
              />
            </div>
          )}
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div
            style={{
              position: "absolute",
              zIndex: 50,
              width: "100%",
              marginTop: "8px",
              backgroundColor: "var(--bg-primary)",
              border: `1px solid var(--border-color)`,
              borderRadius: "24px",
              boxShadow: "var(--shadow)",
              overflow: "hidden",
            }}
          >
            {isLoading && products.length === 0 ? (
              <LoadingSpinner />
            ) : error ? (
              <ErrorMessage message={error} onRetry={handleRetry} />
            ) : products.length === 0 && debouncedQuery.length >= 2 ? (
              <EmptyState query={debouncedQuery} />
            ) : (
              <>
                <div style={{ maxHeight: "384px", overflowY: "auto" }}>
                  {products.map((product) => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      onClick={handleProductSelect}
                    />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  isLoading={isLoading}
                />

                {totalProducts > 0 && (
                  <div
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "var(--bg-secondary)",
                      borderTop: `1px solid var(--border-color)`,
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textAlign: "center",
                    }}
                  >
                    Found {totalProducts} products
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Selected Product */}
      {selectedProduct && (
        <div
          style={{
            marginTop: "32px",
            padding: "24px",
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
            borderRadius: "24px",
            border: "1px solid #10b981",
            backgroundColor: "var(--bg-primary)",
          }}
        >
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "var(--text-primary)",
              marginBottom: "8px",
            }}
          >
            Selected Product
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              style={{
                width: "64px",
                height: "64px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "var(--shadow)",
              }}
            />
            <div>
              <h4 style={{ fontWeight: "500", color: "var(--text-primary)" }}>
                {selectedProduct.title}
              </h4>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  marginTop: "4px",
                }}
              >
                {selectedProduct.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "8px",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    color: "#10b981",
                  }}
                >
                  ₹{selectedProduct.price}
                </span>
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
                    {selectedProduct.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
