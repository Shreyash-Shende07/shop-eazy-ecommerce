
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "@/services/api";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Updated category images with better quality images
const categoryImages: Record<string, string> = {
  electronics: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxMDg2MjIyM3w&ixlib=rb-4.0.3&q=80&w=600",
  jewelery: "https://images.unsplash.com/photo-1627293620999-c2dda87b389c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxMDg2MjQ1OXw&ixlib=rb-4.0.3&q=80&w=600",
  "men's clothing": "https://images.unsplash.com/photo-1617137968427-85924c800a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxMDg2MjUzM3w&ixlib=rb-4.0.3&q=80&w=600",
  "women's clothing": "https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxMDg2MjU3OXw&ixlib=rb-4.0.3&q=80&w=600",
  // Additional categories with placeholder images
  "home & kitchen": "https://images.unsplash.com/photo-1618219740975-d40978bb7378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=600",
  "sports": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=600",
  "books": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=600",
  "beauty": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=600",
};

// Category descriptions to provide more context
const categoryDescriptions: Record<string, string> = {
  electronics: "Discover the latest gadgets and electronic devices",
  jewelery: "Elegant jewelry pieces to complement your style",
  "men's clothing": "Stylish and comfortable clothing for men",
  "women's clothing": "Fashionable apparel for the modern woman",
  "home & kitchen": "Essential items for your home and kitchen",
  "sports": "Equipment and gear for sports enthusiasts",
  "books": "Explore a world of knowledge and stories",
  "beauty": "Premium beauty and personal care products",
};

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load categories");
        setIsLoading(false);
      }
    };

    loadCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    // Navigate to products page with the category filter applied
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        Loading categories...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop by Category</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card 
            key={category} 
            className="overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={categoryImages[category] || "https://via.placeholder.com/400x300"} 
                alt={category} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <h3 className="font-semibold capitalize text-lg mb-2">
                  {category.replace('-', ' ')}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {categoryDescriptions[category] || "Explore our selection of quality products"}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-primary">Shop now</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;
