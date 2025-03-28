
import { useState, useEffect } from "react";
import { fetchProducts } from "@/services/api";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        // Get 8 random products
        const randomProducts = data.sort(() => 0.5 - Math.random()).slice(0, 8);
        setProducts(randomProducts);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600 mb-8">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
          <p className="text-red-500 mb-8">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
        <p className="text-gray-600 mb-8">Browse our selection of top products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
