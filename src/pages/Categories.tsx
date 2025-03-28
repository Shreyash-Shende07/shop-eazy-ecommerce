
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "@/services/api";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const categoryImages: Record<string, string> = {
  electronics: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxMDg2MjIyM3w&ixlib=rb-4.0.3&q=80&w=600",
  jewelry: "https://images.unsplash.com/photo-1627293620999-c2dda87b389c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxMDg2MjQ1OXw&ixlib=rb-4.0.3&q=80&w=600",
  "men's clothing": "https://images.unsplash.com/photo-1617137968427-85924c800a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxMDg2MjUzM3w&ixlib=rb-4.0.3&q=80&w=600",
  "women's clothing": "https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxMDg2MjU3OXw&ixlib=rb-4.0.3&q=80&w=600",
};

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          <Link to={`/products?category=${category}`} key={category}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={categoryImages[category] || "https://via.placeholder.com/400x300"} 
                  alt={category} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold capitalize text-lg">
                    {category.replace('-', ' ')}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
