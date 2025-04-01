
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchProducts, fetchProductsByCategory } from "@/services/api";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category") || "";
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Update selected category when URL changes
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        let data: Product[];

        if (selectedCategory) {
          data = await fetchProductsByCategory(selectedCategory);
        } else {
          data = await fetchProducts();
        }

        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [selectedCategory]);

  useEffect(() => {
    // Filter products based on search query
    if (searchQuery.trim() === "") {
      setFilteredProducts(products);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const handleCategorySelect = (category: string) => {
    // Update URL with the selected category
    const url = category 
      ? `/products?category=${encodeURIComponent(category)}` 
      : `/products`;
      
    window.history.pushState({}, "", url);
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {selectedCategory 
          ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace('-', ' ')}` 
          : "All Products"}
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="lg:w-1/4">
          <div className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Search</h2>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pr-8"
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-3/4">
          {isLoading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : error ? (
            <div className="text-red-500 text-center py-12">{error}</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              No products found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
