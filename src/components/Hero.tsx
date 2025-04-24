
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Find Your Perfect Style, <span className="text-primary">With ShopEazy</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the latest trends and products from our curated collection. Quality meets affordability with our extensive range.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/categories">Explore Categories</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative h-[400px] w-[400px] rounded-full bg-primary/10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80" 
                alt="Fashion shopping" 
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default Hero;
