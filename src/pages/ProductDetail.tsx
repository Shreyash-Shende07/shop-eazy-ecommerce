import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "@/services/api";
import { Product } from "@/types/product";
import CelebrationOverlay from "@/components/CelebrationOverlay";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, Plus, Minus, ShoppingCart, IndianRupee } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ProductReviews from "@/components/ProductReviews";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [showCelebration, setShowCelebration] = useState(false);

  const cartItem = cart.find(item => item.id === Number(id));
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const data = await fetchProduct(parseInt(id));
        setProduct(data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load product");
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  useEffect(() => {
    if (product?.title === "Promise Ring" && quantityInCart === 3) {
      setShowCelebration(true);
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [quantityInCart, product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleIncreaseQuantity = () => {
    if (product) {
      updateQuantity(product.id, quantityInCart + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (product && quantityInCart > 0) {
      if (quantityInCart === 1) {
        removeFromCart(product.id);
      } else {
        updateQuantity(product.id, quantityInCart - 1);
      }
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        Loading product details...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error || "Product not found"}</p>
        <Link to="/products" className="text-primary hover:underline mt-4 inline-block">
          Back to products
        </Link>
      </div>
    );
  }

  const inrPrice = product.price * 83;

  return (
    <div className="container mx-auto px-4 py-12">
      <CelebrationOverlay show={showCelebration} />
      <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
          <img 
            src={imageError ? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" : product.image} 
            alt={product.title} 
            className="max-h-[400px] object-contain" 
            onError={handleImageError}
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          
          <div className="flex items-center space-x-1 text-amber-500 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                className={`h-5 w-5 ${star <= Math.round(product.rating.rate) ? 'fill-current' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-1">{product.rating.rate}</span>
            <span className="text-gray-500">({product.rating.count} reviews)</span>
          </div>
          
          <div className="text-2xl font-bold mb-6 flex items-center">
            <IndianRupee className="h-5 w-5 mr-1" />
            {inrPrice.toFixed(2)}
          </div>
          
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          <div className="flex items-center gap-4 mb-6">
            {quantityInCart > 0 ? (
              <div className="flex items-center">
                <Button
                  onClick={handleDecreaseQuantity}
                  variant="outline"
                  size="icon"
                  className="rounded-r-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <div className="px-6 py-2 border-y border-input bg-background text-center min-w-[4rem]">
                  {quantityInCart}
                </div>
                
                <Button
                  onClick={handleIncreaseQuantity}
                  variant="outline"
                  size="icon"
                  className="rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button onClick={handleAddToCart} className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            )}
            
            {quantityInCart > 0 && (
              <Link to="/cart">
                <Button
                  variant="outline"
                  size="lg"
                >
                  View Cart
                </Button>
              </Link>
            )}
          </div>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Category:</span>{" "}
                <span className="capitalize">{product.category.replace('-', ' ')}</span>
              </li>
              <li>
                <span className="font-medium">Product ID:</span> {product.id}
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <ProductReviews productId={product.id} />
    </div>
  );
};

export default ProductDetail;
