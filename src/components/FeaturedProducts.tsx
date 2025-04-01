
import { useState, useEffect } from "react";
import { fetchProducts } from "@/services/api";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(8); // Start with 8 products
  const { toast } = useToast();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        // Sort products by rating to show best products first
        const sortedProducts = data.sort((a, b) => b.rating.rate - a.rating.rate);
        setProducts(sortedProducts);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not load products. Please try again later.",
        });
      }
    };

    loadProducts();
  }, [toast]);

  const handleShowMore = () => {
    // Display 4 more products when the button is clicked
    setDisplayCount((prev) => {
      const newCount = Math.min(prev + 4, products.length);
      if (newCount === products.length) {
        toast({
          title: "All products loaded",
          description: "You've reached the end of our featured products.",
        });
      }
      return newCount;
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600 mb-8">Loading products...</p>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
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
          <Button onClick={() => window.location.reload()} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const displayedProducts = products.slice(0, displayCount);
  const hasMoreProducts = displayCount < products.length;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our curated selection of top-rated products, chosen for their 
          exceptional quality, value, and customer satisfaction.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="flex justify-center mt-10 gap-4">
        {hasMoreProducts && (
          <Button onClick={handleShowMore} variant="outline" size="lg">
            Load More Products
          </Button>
        )}
        <Link to="/products">
          <Button variant="default" size="lg" className="flex items-center gap-2">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
