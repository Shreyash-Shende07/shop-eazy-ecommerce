import { Product } from '@/types/product';
import { API_URL } from './config';

// Additional products data to merge with API response
const additionalProducts: Partial<Product>[] = [
  {
    title: "Diamond Tennis Bracelet",
    price: 2499.99,
    description: "18K White Gold Diamond Tennis Bracelet, 3.00 Carat Total Weight",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 78 }
  },
  {
    title: "Promise Ring",
    price: 999.99,
    description: "14K Rose Gold Diamond Promise Ring with Heart Design",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 150 }
  },
  {
    title: "Wireless Gaming Headphones",
    price: 199.99,
    description: "Premium Gaming Headphones with Noise Cancellation",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 320 }
  },
  {
    title: "Flagship Smartphone",
    price: 999.99,
    description: "Latest 5G smartphone with 108MP camera",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 450 }
  },
  {
    title: "Floral Summer Sundress",
    price: 79.99,
    description: "Light and breezy floral print sundress",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 280 }
  },
  {
    title: "Athletic Shorts",
    price: 29.99,
    description: "Men's Quick-Dry Athletic Running Shorts",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 190 }
  },
  {
    title: "High-Waisted Shorts",
    price: 39.99,
    description: "Women's Casual High-Waisted Denim Shorts",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 230 }
  },
  {
    title: "Running Shoes",
    price: 129.99,
    description: "Professional Running Shoes with Air Cushioning",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 420 }
  },
  {
    title: "High-Performance Gaming Laptop",
    price: 1299.99,
    description: "15.6-inch gaming laptop with RTX 3070, 32GB RAM, and 1TB SSD",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 189 }
  },
  {
    title: "Wireless Programming Keyboard",
    price: 129.99,
    description: "Mechanical keyboard with RGB backlight and programmable keys",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 156 }
  },
  {
    title: "Premium Business Suit",
    price: 399.99,
    description: "Italian wool blend suit with modern fit",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 134 }
  },
  {
    title: "Smart Developer Workstation",
    price: 1899.99,
    description: "Complete developer setup with ultrawide monitor and accessories",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 203 }
  }
];

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const apiProducts = await response.json();
    
    // Merge API products with additional products
    const allProducts = [...apiProducts];
    let nextId = Math.max(...apiProducts.map((p: Product) => p.id)) + 1;
    
    // Add additional products with unique IDs
    additionalProducts.forEach((product) => {
      allProducts.push({
        ...product,
        id: nextId++
      } as Product);
    });
    
    return allProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProduct = async (id: number): Promise<Product> => {
  try {
    // Check if it's one of our additional products
    const additionalProduct = additionalProducts.find((p, index) => {
      const calculatedId = Math.max(...Array.from({ length: 20 }, (_, i) => i + 1)) + index + 1;
      return calculatedId === id;
    });

    if (additionalProduct) {
      return {
        ...additionalProduct,
        id
      } as Product;
    }

    // If not found in additional products, fetch from API
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const apiProducts = await response.json();
    
    // Filter additional products by category and add them
    const categoryAdditionalProducts = additionalProducts
      .filter(p => p.category === category)
      .map((p, index) => ({
        ...p,
        id: Math.max(...apiProducts.map((p: Product) => p.id)) + index + 1
      }));
    
    return [...apiProducts, ...categoryAdditionalProducts] as Product[];
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    throw error;
  }
};
