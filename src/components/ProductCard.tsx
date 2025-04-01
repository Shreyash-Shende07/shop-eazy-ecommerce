
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [imageError, setImageError] = useState(false);
  
  // Find the product in cart to get quantity
  const cartItem = cart.find(item => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;
  
  // Calculate increased price (USD to INR conversion)
  const inrPrice = product.price * 83;
  
  const handleIncreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product detail
    e.stopPropagation();
    if (quantityInCart === 0) {
      addToCart(product);
    } else {
      updateQuantity(product.id, quantityInCart + 1);
    }
  };

  const handleDecreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product detail
    e.stopPropagation();
    if (quantityInCart === 1) {
      removeFromCart(product.id);
    } else if (quantityInCart > 0) {
      updateQuantity(product.id, quantityInCart - 1);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-lg animate-fade-in">
      <Link to={`/product/${product.id}`} className="flex-grow">
        <div className="aspect-square overflow-hidden bg-gray-100 p-4">
          <img 
            src={imageError ? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" : product.image} 
            alt={product.title} 
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" 
            onError={handleImageError}
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-sm line-clamp-2 mb-1">{product.title}</h3>
          </div>
          <div className="flex items-center space-x-1 text-amber-500 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                className={`h-3 w-3 ${star <= Math.round(product.rating.rate) ? 'fill-current' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-xs">{product.rating.rate}</span>
            <span className="text-xs text-gray-500">({product.rating.count} reviews)</span>
          </div>
          <p className="font-semibold">₹{inrPrice.toFixed(2)}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 mt-auto">
        {quantityInCart > 0 ? (
          <div className="flex items-center w-full">
            <Button 
              onClick={handleDecreaseQuantity}
              variant="outline" 
              size="icon"
              className="rounded-r-none h-9"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <div className="px-4 py-2 border-y border-input bg-background text-center flex-1">
              {quantityInCart}
            </div>
            <Button 
              onClick={handleIncreaseQuantity}
              variant="outline" 
              size="icon"
              className="rounded-l-none h-9"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        ) : (
          <Button 
            onClick={handleIncreaseQuantity}
            className="w-full"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
