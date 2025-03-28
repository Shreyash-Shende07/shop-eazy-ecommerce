
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "@/services/api";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/card";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

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
            <Star className="h-5 w-5 fill-current" />
            <span>{product.rating.rate}</span>
            <span className="text-gray-500">({product.rating.count} reviews)</span>
          </div>
          
          <div className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</div>
          
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => addToCart(product)}
              size="lg"
              className="w-full sm:w-auto"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            
            <Link to="/cart">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
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
    </div>
  );
};

export default ProductDetail;
