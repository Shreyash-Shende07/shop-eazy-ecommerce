
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "@/services/api";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ArrowLeft, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ProductReviews from "@/components/ProductReviews";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  
  // Find the product in cart to get quantity
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

  const handleIncreaseQuantity = () => {
    if (product) {
      if (quantityInCart === 0) {
        addToCart(product);
      } else {
        updateQuantity(product.id, quantityInCart + 1);
      }
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

  // Calculate increased price (USD to INR conversion)
  const inrPrice = product.price * 83;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-[400px] object-contain" 
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
          
          <div className="text-2xl font-bold mb-6">₹{inrPrice.toFixed(2)}</div>
          
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <Button
                onClick={handleDecreaseQuantity}
                variant="outline"
                size="icon"
                className="rounded-r-none"
                disabled={quantityInCart === 0}
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
            
            <Button
              onClick={() => addToCart(product)}
              size="lg"
              className="flex-1"
              disabled={quantityInCart > 0}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {quantityInCart === 0 ? "Add to Cart" : "In Cart"}
            </Button>
            
            <Link to="/cart">
              <Button
                variant="outline"
                size="lg"
              >
                View Cart
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 border-t pt-6">
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
      
      {/* Product Reviews Section */}
      <ProductReviews productId={product.id} />
    </div>
  );
};

export default ProductDetail;
