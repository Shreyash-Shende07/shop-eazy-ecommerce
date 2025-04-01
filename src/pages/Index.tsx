
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, RefreshCw, TruckIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      
      {/* New featured products banner */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium flex items-center gap-1">
              <Sparkles className="h-4 w-4" />
              New Arrivals
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Discover Our Latest Collections</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We've added hundreds of new products across all categories. From the latest electronics to 
            fashion trends, home essentials, and more. Check back often as we regularly update our inventory.
          </p>
          <Button asChild size="lg">
            <Link to="/products">Explore Latest Products</Link>
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="p-6 rounded-lg bg-gray-50">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TruckIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">Enjoy free standard shipping on all orders over ₹500.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-50">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
            <p className="text-gray-600">No questions asked returns within 10 days of purchase.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-50">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">Your payment information is processed securely.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-50">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">All our products are verified for quality and authenticity.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Shopping Today</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of quality products at competitive prices. 
            With our easy-to-use interface, secure checkout, and special discounts with coupons, 
            shopping has never been easier.
          </p>
          <Button asChild size="lg">
            <Link to="/products">Shop All Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
