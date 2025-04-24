import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, IndianRupee } from "lucide-react";

const PersistentCartButton = () => {
  const { totalItems, subtotal } = useCart();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  
  // Calculate increased subtotal (USD to INR conversion) and round up
  const inrSubtotal = Math.ceil(subtotal * 83);
  
  useEffect(() => {
    // Show button only on home, categories, or products pages and if cart has items
    const validPaths = ["/", "/categories", "/products"];
    const categoryPath = /\/products\?category=.+/;
    
    const shouldShow = 
      (validPaths.includes(location.pathname) || 
       categoryPath.test(location.pathname + location.search)) && 
      totalItems > 0;
    
    setIsVisible(shouldShow);
  }, [location, totalItems]);
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <Link to="/cart" className="pointer-events-auto">
        <Button 
          size="lg" 
          className="shadow-lg flex items-center gap-2 px-6 py-6 animate-fade-in"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>View Cart ({totalItems} items) - <IndianRupee className="h-4 w-4 inline" /> {inrSubtotal}</span>
        </Button>
      </Link>
    </div>
  );
};

export default PersistentCartButton;
