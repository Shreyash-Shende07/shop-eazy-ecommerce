
import { CartItem } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-20 h-20 bg-gray-100 p-2 rounded flex-shrink-0">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="flex-grow">
            <Link to={`/product/${item.id}`} className="font-medium hover:text-primary transition-colors line-clamp-1">
              {item.title}
            </Link>
            <p className="text-sm text-gray-500 mb-2">${item.price.toFixed(2)}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">${(item.price * item.quantity).toFixed(2)}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
