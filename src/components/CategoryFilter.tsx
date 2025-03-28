
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { fetchCategories } from "@/services/api";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
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
    return <div className="flex justify-center py-4">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-red-500 py-4">{error}</div>;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedCategory === "" ? "default" : "outline"}
        onClick={() => onSelectCategory("")}
        className="capitalize"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className="capitalize"
        >
          {category.replace('-', ' ')}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
