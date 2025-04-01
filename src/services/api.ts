
import { Product } from '@/types/product';
import { newProducts } from './additionalProducts';

const API_URL = 'https://fakestoreapi.com';

// Additional product data to supplement API results
const additionalProducts: Product[] = [
  // Electronics - Smartphones
  {
    id: 101,
    title: "OnePlus 12R 5G",
    price: 699.99,
    description: "Experience lightning-fast performance with the OnePlus 12R 5G. Features a 6.7-inch AMOLED display, Snapdragon 8 Gen 2 processor, and a 50MP camera system.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 245 }
  },
  {
    id: 102,
    title: "Samsung Galaxy S24 Ultra",
    price: 1199.99,
    description: "The ultimate Samsung experience with the Galaxy S24 Ultra. Featuring a 6.8-inch Dynamic AMOLED 2X display, 200MP camera, S Pen support, and AI-powered features.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 312 }
  },
  // Electronics - Laptops
  {
    id: 103,
    title: "Apple MacBook Air M2",
    price: 999.99,
    description: "Supercharged by the M2 chip, the redesigned MacBook Air combines incredible performance and up to 18 hours of battery life into an impossibly thin design.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 287 }
  },
  {
    id: 104,
    title: "ASUS ROG Zephyrus G14 Gaming Laptop",
    price: 1299.99,
    description: "Powerful gaming laptop featuring AMD Ryzen 9 processor, NVIDIA GeForce RTX graphics, 1TB SSD, and a stunning 14-inch 2K display.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 198 }
  },
  // Electronics - Audio
  {
    id: 105,
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    price: 349.99,
    description: "Industry-leading noise cancellation with 30-hour battery life, exceptional sound quality, and comfortable design for all-day listening.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 356 }
  },
  // Jewelry
  {
    id: 106,
    title: "Diamond Solitaire Pendant Necklace",
    price: 899.99,
    description: "Elegant 18K white gold necklace featuring a stunning 0.5 carat diamond solitaire pendant. Perfect for special occasions or as a meaningful gift.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 124 }
  },
  {
    id: 107,
    title: "Emerald and Diamond Tennis Bracelet",
    price: 1499.99,
    description: "Luxurious 14K gold tennis bracelet featuring alternating emeralds and diamonds. A timeless piece that adds elegance to any outfit.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 89 }
  },
  // Men's Clothing
  {
    id: 108,
    title: "Premium Cotton Oxford Shirt",
    price: 49.99,
    description: "Classic Oxford shirt made from 100% premium cotton. Features a button-down collar and slim fit design. Perfect for both casual and formal occasions.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 213 }
  },
  {
    id: 109,
    title: "Italian Leather Dress Shoes",
    price: 129.99,
    description: "Handcrafted Italian leather dress shoes with a modern silhouette. Features a comfortable cushioned insole and durable outsole.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 175 }
  },
  {
    id: 110,
    title: "Wool-Blend Peacoat",
    price: 199.99,
    description: "Classic peacoat made from a premium wool blend. Features a double-breasted front, notched lapels, and a tailored fit for a sophisticated look.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1512353087810-25dfcd100962?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 142 }
  },
  // Women's Clothing
  {
    id: 111,
    title: "Cashmere Wrap Cardigan",
    price: 149.99,
    description: "Luxuriously soft cashmere cardigan with a flattering wrap design. Features ribbed cuffs and hem, and a belted waist for a customized fit.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1580651214613-f4692d6d138f?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 198 }
  },
  {
    id: 112,
    title: "Silk Midi Dress",
    price: 179.99,
    description: "Elegant silk midi dress featuring a flattering A-line silhouette, V-neckline, and adjustable straps. Perfect for special occasions or evening events.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 156 }
  },
  // Home & Kitchen
  {
    id: 113,
    title: "Professional Stand Mixer",
    price: 349.99,
    description: "Powerful 500W stand mixer with 5.5L stainless steel bowl. Includes dough hook, flat beater, and wire whip attachments for versatile cooking and baking tasks.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1631984564919-1d99dec0cb53?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 231 }
  },
  {
    id: 114,
    title: "Cast Iron Dutch Oven",
    price: 79.99,
    description: "Premium enameled cast iron dutch oven with 6-quart capacity. Perfect for slow cooking, braising, roasting, and baking. Suitable for all cooktops including induction.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1585441695325-21557c7c506d?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 187 }
  },
  {
    id: 115,
    title: "Smart Coffee Maker",
    price: 129.99,
    description: "WiFi-enabled coffee maker that you can control with your smartphone. Features programmable brewing, customizable strength settings, and 12-cup capacity.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 143 }
  },
  // Sports
  {
    id: 116,
    title: "Carbon Fiber Road Bike",
    price: 1499.99,
    description: "Professional-grade carbon fiber road bike with Shimano gears, hydraulic disc brakes, and aerodynamic frame design. Perfect for serious cyclists and enthusiasts.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 112 }
  },
  {
    id: 117,
    title: "Smart Fitness Watch",
    price: 199.99,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and 7-day battery life. Water-resistant up to 50m and compatible with iOS and Android.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 298 }
  },
  {
    id: 118,
    title: "Adjustable Dumbbell Set",
    price: 249.99,
    description: "Space-saving adjustable dumbbells that replace 15 sets of weights. Each dumbbell adjusts from 5 to 52.5 pounds in 2.5-pound increments.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 176 }
  },
  // Books
  {
    id: 119,
    title: "The Silent Patient",
    price: 14.99,
    description: "A psychological thriller about a woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
    category: "books",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 345 }
  },
  {
    id: 120,
    title: "Atomic Habits",
    price: 19.99,
    description: "A proven framework for improving every day. Learn how tiny changes can lead to remarkable results with practical strategies to form good habits.",
    category: "books",
    image: "https://images.unsplash.com/photo-1603284569248-821525309698?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 512 }
  },
  // Beauty
  {
    id: 121,
    title: "Vitamin C Serum",
    price: 29.99,
    description: "Advanced anti-aging serum with 20% Vitamin C, hyaluronic acid, and vitamin E. Brightens skin tone, reduces fine lines, and boosts collagen production.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1620916566886-f294040c8e1b?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 289 }
  },
  {
    id: 122,
    title: "Premium Makeup Brush Set",
    price: 49.99,
    description: "Professional 15-piece makeup brush set with synthetic bristles and ergonomic handles. Includes brushes for foundation, concealer, eyeshadow, blush, and more.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 211 }
  }
];

// Combine original additionalProducts with our new products
const allAdditionalProducts = [...additionalProducts, ...newProducts];

// Additional categories beyond what the API provides
const additionalCategories = [
  "home & kitchen",
  "sports",
  "books",
  "beauty"
];

// Augment the fetchProducts function to include our additional products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const apiProducts = await response.json();
    
    // Combine API products with our additional products
    return [...apiProducts, ...allAdditionalProducts];
  } catch (error) {
    console.error('Error fetching products:', error);
    // If API fails, return just our additional products
    return allAdditionalProducts;
  }
};

export const fetchProduct = async (id: number): Promise<Product> => {
  try {
    // First check if it's one of our additional products
    const additionalProduct = allAdditionalProducts.find(p => p.id === id);
    if (additionalProduct) {
      return additionalProduct;
    }
    
    // If not, try to fetch from API
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

export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const apiCategories = await response.json();
    
    // Combine API categories with additional categories
    return [...apiCategories, ...additionalCategories];
  } catch (error) {
    console.error('Error fetching categories:', error);
    // If API fails, return our predefined categories
    return ["electronics", "jewelery", "men's clothing", "women's clothing", ...additionalCategories];
  }
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    // If it's one of our additional categories, filter our additional products
    if (additionalCategories.includes(category)) {
      return allAdditionalProducts.filter(p => p.category === category);
    }
    
    // For API categories, try fetching from API first
    const response = await fetch(`${API_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const apiProducts = await response.json();
    
    // Also include any of our additional products in this category
    const additionalCategoryProducts = allAdditionalProducts.filter(p => p.category === category);
    
    return [...apiProducts, ...additionalCategoryProducts];
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    // If API fails, return just our additional products for this category
    return allAdditionalProducts.filter(p => p.category === category);
  }
};
