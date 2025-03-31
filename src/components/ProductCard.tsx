
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  // Calculate increased price (USD to INR conversion)
  const inrPrice = product.price * 83;
  
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-lg animate-fade-in">
      <Link to={`/product/${product.id}`} className="flex-grow">
        <div className="aspect-square overflow-hidden bg-gray-100 p-4">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" 
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-sm line-clamp-2 mb-1">{product.title}</h3>
          </div>
          <div className="flex items-center space-x-1 text-amber-500 mb-2">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs">{product.rating.rate}</span>
            <span className="text-xs text-gray-500">({product.rating.count} reviews)</span>
          </div>
          <p className="font-semibold">₹{inrPrice.toFixed(2)}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
