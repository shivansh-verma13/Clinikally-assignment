export const productAPI = {
  searchProducts: async (query, limit = 10, skip = 0) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(
          query
        )}&limit=${limit}&skip=${skip}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error searching products:", error);
      throw error;
    }
  },
};
