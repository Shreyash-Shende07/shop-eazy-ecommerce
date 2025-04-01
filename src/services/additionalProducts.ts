
import { Product } from "@/types/product";

// Additional product data to supplement API results
export const newProducts: Product[] = [
  // Electronics - Smartphones
  {
    id: 201,
    title: "Google Pixel 8 Pro",
    price: 999.99,
    description: "The latest flagship smartphone from Google featuring a stunning 6.7-inch LTPO OLED display, Google Tensor G3 processor, and a professional-grade camera system with 50MP main sensor.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 183 }
  },
  {
    id: 202,
    title: "iPhone 15 Pro Max",
    price: 1299.99,
    description: "Apple's premium smartphone with A17 Pro chip, titanium design, 48MP camera system with 5x optical zoom, and up to 29 hours of video playback.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 367 }
  },
  {
    id: 203,
    title: "Samsung Galaxy Z Fold 5",
    price: 1799.99,
    description: "Revolutionary foldable smartphone with 7.6-inch main display that folds to a compact 6.2-inch cover screen. Powered by Snapdragon 8 Gen 2 processor and featuring S Pen support.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1675784822212-0ae0fe981ea8?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 124 }
  },
  {
    id: 204,
    title: "Xiaomi 14 Ultra",
    price: 899.99,
    description: "Premium camera smartphone co-engineered with Leica, featuring Snapdragon 8 Gen 3 processor, 1-inch type camera sensor, and 6.73-inch 2K AMOLED display.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 97 }
  },
  {
    id: 205,
    title: "Nothing Phone (2)",
    price: 599.99,
    description: "Unique smartphone with transparent back and Glyph Interface LED lighting system. Features Snapdragon 8+ Gen 1, 6.7-inch OLED display, and 50MP dual camera.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598387181032-a3103a2db5d3?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.4, count: 132 }
  },
  // Electronics - Laptops & Computers
  {
    id: 206,
    title: "Dell XPS 15 (2025)",
    price: 1799.99,
    description: "Premium ultrabook featuring Intel Core Ultra 9 processor, 32GB RAM, 1TB SSD, NVIDIA RTX 4070 graphics, and a stunning 15.6-inch 4K OLED touch display.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 215 }
  },
  {
    id: 207,
    title: "Apple MacBook Pro M3 Max",
    price: 2999.99,
    description: "The most powerful MacBook ever, featuring M3 Max chip with 16-core CPU, 40-core GPU, 32GB unified memory, and 16-inch Liquid Retina XDR display.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 326 }
  },
  {
    id: 208,
    title: "ASUS ROG Strix G17 Gaming Laptop",
    price: 1699.99,
    description: "Powerful gaming laptop with AMD Ryzen 9 processor, NVIDIA GeForce RTX 4080 graphics, 32GB RAM, 2TB SSD, and 17.3-inch 240Hz display with G-Sync.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 178 }
  },
  {
    id: 209,
    title: "Lenovo ThinkPad X1 Carbon Gen 12",
    price: 1499.99,
    description: "Premium business laptop featuring Intel Core Ultra 7 processor, 16GB RAM, 1TB SSD, and 14-inch 2.8K OLED display in a durable yet lightweight carbon fiber chassis.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1630794180018-433d915c34ac?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 234 }
  },
  {
    id: 210,
    title: "Microsoft Surface Laptop Studio 2",
    price: 1899.99,
    description: "Versatile creative workstation with innovative adjustable display, Intel Core i7 processor, NVIDIA GeForce RTX 4060 graphics, 32GB RAM, and 1TB SSD.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1612815292258-f4354f7f5fc9?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 123 }
  },
  // Electronics - Audio
  {
    id: 211,
    title: "Bose QuietComfort Ultra Headphones",
    price: 399.99,
    description: "Premium wireless headphones with best-in-class noise cancellation, immersive spatial audio, adaptive audio transparency, and up to 24 hours of battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 342 }
  },
  {
    id: 212,
    title: "Apple AirPods Pro 2",
    price: 249.99,
    description: "Advanced wireless earbuds with active noise cancellation, spatial audio with dynamic head tracking, adaptive transparency, and MagSafe charging case with speaker and lanyard loop.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606741965730-8ac298ecaf4c?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 463 }
  },
  {
    id: 213,
    title: "Sonos Arc Premium Smart Soundbar",
    price: 899.99,
    description: "Premium smart soundbar with Dolby Atmos, eleven high-performance drivers, and Trueplay tuning technology for immersive home theater sound.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 187 }
  },
  {
    id: 214,
    title: "Sennheiser Momentum 4 Wireless",
    price: 349.99,
    description: "Premium wireless headphones featuring superior sound quality, adaptive noise cancellation, 60-hour battery life, and customizable EQ via Smart Control app.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 231 }
  },
  {
    id: 215,
    title: "JBL Partybox 310 Portable Bluetooth Speaker",
    price: 499.99,
    description: "Powerful portable party speaker with 240W sound output, dynamic light show, guitar and mic inputs, IPX4 splash proof design, and 18 hours of playtime.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 156 }
  },
  // Men's Clothing
  {
    id: 216,
    title: "Premium Italian Wool Overcoat",
    price: 299.99,
    description: "Luxurious winter overcoat crafted from Italian wool blend. Features a classic silhouette, notched lapels, and a two-button closure. Fully lined with inner pockets.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 124 }
  },
  {
    id: 217,
    title: "Merino Wool Crewneck Sweater",
    price: 89.99,
    description: "Versatile crewneck sweater made from 100% extra-fine merino wool. Naturally temperature-regulating, breathable, and incredibly soft. Perfect for layering.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 187 }
  },
  {
    id: 218,
    title: "Selvedge Denim Jeans",
    price: 149.99,
    description: "Premium selvedge denim jeans with classic five-pocket styling. Made from Japanese denim in a slim-straight fit with button fly and signature back pocket detailing.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 213 }
  },
  {
    id: 219,
    title: "Quilted Field Jacket",
    price: 179.99,
    description: "Classic quilted field jacket with corduroy collar detail. Water-resistant exterior with insulated polyester fill, multiple pockets, and adjustable cuffs.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 165 }
  },
  {
    id: 220,
    title: "Cashmere Blend Zip Cardigan",
    price: 159.99,
    description: "Luxurious zip-front cardigan crafted from a premium cashmere and wool blend. Features ribbed hem and cuffs, two front pockets, and a versatile standing collar.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d018b3?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.4, count: 142 }
  },
  {
    id: 221,
    title: "Oxford Button-Down Shirt",
    price: 79.99,
    description: "Classic Oxford shirt made from premium cotton with a subtle texture. Features a button-down collar, single chest pocket, and barrel cuffs with adjustable buttons.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 234 }
  },
  {
    id: 222,
    title: "Performance Stretch Chinos",
    price: 89.99,
    description: "Modern chino pants with innovative stretch fabric for maximum comfort. Features a tailored fit, hidden security pocket, and wrinkle-resistant finish.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 198 }
  },
  {
    id: 223,
    title: "Waterproof Mountain Parka",
    price: 229.99,
    description: "Technical mountain parka with waterproof-breathable membrane, fully sealed seams, adjustable storm hood, and multiple pockets for outdoor essentials.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 167 }
  },
  // Women's Clothing
  {
    id: 224,
    title: "Cashmere Turtleneck Sweater",
    price: 159.99,
    description: "Luxuriously soft turtleneck sweater made from 100% grade-A Mongolian cashmere. Features a relaxed fit, ribbed neck, cuffs, and hem for a sophisticated silhouette.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 213 }
  },
  {
    id: 225,
    title: "Tailored Wool Blazer",
    price: 199.99,
    description: "Classic single-breasted blazer crafted from premium wool blend. Features notched lapels, flap pockets, and a nipped waist for a flattering silhouette.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1548826300-dd8ca1aeaa13?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 176 }
  },
  {
    id: 226,
    title: "Silk Button-Up Blouse",
    price: 129.99,
    description: "Elegant button-up blouse made from 100% mulberry silk. Features a relaxed fit, point collar, and mother-of-pearl buttons for a sophisticated look.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 154 }
  },
  {
    id: 227,
    title: "High-Rise Straight Leg Jeans",
    price: 109.99,
    description: "Classic high-rise jeans with a straight leg silhouette. Made from premium denim with a touch of stretch for comfort and shape retention.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 234 }
  },
  {
    id: 228,
    title: "Merino Wool Cardigan",
    price: 139.99,
    description: "Versatile cardigan crafted from extra-fine merino wool. Features a semi-fitted silhouette, V-neckline, and front button closure. Perfect for year-round layering.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 187 }
  },
  {
    id: 229,
    title: "Pleated Midi Skirt",
    price: 89.99,
    description: "Elegant pleated midi skirt with fluid movement and sophisticated drape. Features an elasticated waistband for comfort and a versatile length that pairs with everything.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 165 }
  },
  {
    id: 230,
    title: "Leather Biker Jacket",
    price: 249.99,
    description: "Classic biker jacket crafted from premium leather with a butter-soft feel. Features asymmetric zip closure, notched lapels, and multiple pockets.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 143 }
  },
  {
    id: 231,
    title: "Wrap Maxi Dress",
    price: 119.99,
    description: "Flattering wrap-style maxi dress made from flowing jersey fabric. Features a V-neckline, self-tie belt, and feminine ruffle details at the hem.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 156 }
  },
  // Jewelry
  {
    id: 232,
    title: "Diamond Tennis Bracelet",
    price: 2999.99,
    description: "Elegant tennis bracelet featuring 3.00 carats of round brilliant-cut diamonds set in 18K white gold with a secure box clasp and safety chain.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 87 }
  },
  {
    id: 233,
    title: "Sapphire and Diamond Ring",
    price: 1899.99,
    description: "Stunning ring featuring a 1.50 carat oval blue sapphire center stone surrounded by a halo of brilliant-cut diamonds, set in 14K white gold.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 65 }
  },
  {
    id: 234,
    title: "Pearl Stud Earrings",
    price: 399.99,
    description: "Classic pearl stud earrings featuring 8mm AAA-quality freshwater cultured pearls set in 14K gold with a high luster finish and secure push-back closures.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 123 }
  },
  {
    id: 235,
    title: "Rose Gold Chain Necklace",
    price: 599.99,
    description: "Versatile 18-inch chain necklace crafted from solid 14K rose gold featuring a modern cable link design and secure lobster clasp closure.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 98 }
  },
  {
    id: 236,
    title: "Men's Swiss Automatic Watch",
    price: 1299.99,
    description: "Luxury Swiss-made automatic watch featuring a 41mm stainless steel case, sapphire crystal, exhibition caseback, and premium leather strap.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 112 }
  },
  {
    id: 237,
    title: "Diamond Pendant Necklace",
    price: 799.99,
    description: "Elegant solitaire pendant featuring a 0.50 carat round brilliant-cut diamond in a 4-prong setting, suspended from an 18-inch 14K white gold chain.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 87 }
  },
  {
    id: 238,
    title: "Gold Hoop Earrings",
    price: 349.99,
    description: "Classic 14K gold hoop earrings featuring a 25mm diameter with a high-polish finish and secure hinged snap closures.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1630019852942-7a3592ab0d7b?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.5, count: 143 }
  },
  // Home & Kitchen
  {
    id: 239,
    title: "Non-Stick Cookware Set",
    price: 299.99,
    description: "Premium 12-piece cookware set featuring hard-anodized aluminum construction with triple-layer non-stick coating, tempered glass lids, and stainless steel handles.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1584931423298-c576fde3d139?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 213 }
  },
  {
    id: 240,
    title: "Smart Espresso Machine",
    price: 699.99,
    description: "Automatic espresso machine with built-in conical burr grinder, PID temperature control, 15-bar pump, and smartphone app connectivity for personalized brewing recipes.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 167 }
  },
  {
    id: 241,
    title: "Egyptian Cotton Bed Sheet Set",
    price: 149.99,
    description: "Luxurious 1000-thread-count Egyptian cotton sheet set including flat sheet, fitted sheet, and two pillowcases. Features a sateen weave for a silky-smooth feel.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 234 }
  },
  {
    id: 242,
    title: "Stainless Steel Kitchen Knife Set",
    price: 199.99,
    description: "Professional 8-piece knife set featuring high-carbon stainless steel blades, ergonomic handles, and solid walnut storage block. Includes chef's knife, bread knife, utility knife, and more.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 178 }
  },
  {
    id: 243,
    title: "Smart Air Purifier",
    price: 299.99,
    description: "Advanced air purifier with true HEPA filter, activated carbon filter, and UV-C light technology. Features air quality monitoring, auto mode, and smartphone control.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1626436819821-d2985ab98d0d?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 156 }
  },
  {
    id: 244,
    title: "Ceramic Dinnerware Set",
    price: 149.99,
    description: "Elegant 16-piece dinnerware set for 4 people, including dinner plates, salad plates, bowls, and mugs. Made from durable porcelain with a modern matte finish.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1570275239925-4af0aa537556?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 187 }
  },
  {
    id: 245,
    title: "Robot Vacuum and Mop",
    price: 499.99,
    description: "Smart robot vacuum featuring laser navigation, 3000Pa suction power, simultaneous vacuuming and mopping, multi-floor mapping, and voice control compatibility.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1567424823429-b0462061c379?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 165 }
  },
  {
    id: 246,
    title: "Stand Mixer with Accessories",
    price: 399.99,
    description: "Powerful stand mixer with 5.5-quart stainless steel bowl, planetary mixing action, 10 speed settings, and included accessories for mixing, whisking, and dough kneading.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1622428051717-dcd8412959de?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 203 }
  },
  // Sports
  {
    id: 247,
    title: "Carbon Fiber Tennis Racket",
    price: 249.99,
    description: "Professional-grade tennis racket featuring carbon fiber construction, 100 sq. inch head size, 16x19 string pattern, and vibration dampening technology.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1595435934812-8f597883332a?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 132 }
  },
  {
    id: 248,
    title: "Waterproof Hiking Boots",
    price: 179.99,
    description: "Durable hiking boots with waterproof-breathable membrane, Vibram® outsole for superior traction, cushioned midsole, and ankle support for challenging terrain.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 187 }
  },
  {
    id: 249,
    title: "Smart Indoor Exercise Bike",
    price: 1499.99,
    description: "Premium indoor cycling bike featuring magnetic resistance, 22-inch HD touchscreen for live and on-demand classes, and integration with fitness apps for performance tracking.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 145 }
  },
  {
    id: 250,
    title: "Golf Club Complete Set",
    price: 899.99,
    description: "Comprehensive golf set including driver, fairway woods, hybrids, irons, wedges, putter, and premium stand bag. Features game-improvement technology for all skill levels.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 123 }
  },
  {
    id: 251,
    title: "Backpacking Tent",
    price: 349.99,
    description: "Ultralight 2-person backpacking tent weighing just 3.5 lbs. Features weatherproof construction, aluminum poles, two vestibules, and excellent ventilation.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 145 }
  },
  {
    id: 252,
    title: "Advanced Fitness Tracker Watch",
    price: 299.99,
    description: "Comprehensive fitness watch with GPS, heart rate monitoring, blood oxygen tracking, sleep analysis, 20+ sport modes, and 10-day battery life in a waterproof design.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 267 }
  },
  {
    id: 253,
    title: "Composite Basketball",
    price: 69.99,
    description: "Official size and weight basketball featuring composite leather construction for indoor and outdoor play. Offers superior grip and durability with deep channel design.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 187 }
  },
  {
    id: 254,
    title: "Yoga Set Bundle",
    price: 89.99,
    description: "Complete yoga starter set including premium non-slip mat, foam blocks, stretch strap, microfiber towel, and carrying case for practice at home or studio.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 213 }
  },
  // Books
  {
    id: 255,
    title: "The Midnight Library",
    price: 19.99,
    description: "Between life and death there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make different choices. With the help of an old friend, she can now undo her regrets and make her dreams come true.",
    category: "books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 345 }
  },
  {
    id: 256,
    title: "Project Hail Mary",
    price: 24.99,
    description: "A lone astronaut must save the earth from disaster in this gripping sci-fi thriller by the author of The Martian. Ryland Grace is the sole survivor on a desperate mission, with only one task: solve the greatest scientific challenge ever.",
    category: "books",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 287 }
  },
  {
    id: 257,
    title: "Where the Crawdads Sing",
    price: 16.99,
    description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.",
    category: "books",
    image: "https://images.unsplash.com/photo-1495640388908-25ae0a4c25f5?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 432 }
  },
  {
    id: 258,
    title: "Educated: A Memoir",
    price: 17.99,
    description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University. A universal coming-of-age story that gets to the heart of what an education offers.",
    category: "books",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 376 }
  },
  {
    id: 259,
    title: "The Psychology of Money",
    price: 19.99,
    description: "Timeless lessons on wealth, greed, and happiness. The book explores how our relationship with money - our views and behaviors - are greatly influenced by our unique personal experiences.",
    category: "books",
    image: "https://images.unsplash.com/photo-1554906490-4faa2ff3675f?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 415 }
  },
  {
    id: 260,
    title: "Klara and the Sun",
    price: 22.99,
    description: "From the Nobel Prize-winning author, a novel that tells the story of Klara, an Artificial Friend with outstanding observational qualities, who watches eager customers through the store window, hoping to be chosen.",
    category: "books",
    image: "https://images.unsplash.com/photo-1616262373426-18bfa28bafab?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 289 }
  },
  {
    id: 261,
    title: "Becoming",
    price: 23.99,
    description: "In her memoir, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work.",
    category: "books",
    image: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 512 }
  },
  {
    id: 262,
    title: "The Four Winds",
    price: 18.99,
    description: "From the author of The Nightingale and The Great Alone comes an epic novel of love and heroism and hope, set against the backdrop of one of America's most defining eras—the Great Depression.",
    category: "books",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 334 }
  },
  // Beauty
  {
    id: 263,
    title: "Advanced Vitamin C Serum",
    price: 79.99,
    description: "Powerful antioxidant serum with 20% L-ascorbic acid, vitamin E, and ferulic acid. Brightens skin tone, reduces fine lines, and protects against environmental damage.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 287 }
  },
  {
    id: 264,
    title: "Professional Hair Styling Set",
    price: 249.99,
    description: "Complete styling set including ionic hair dryer, titanium flat iron, and professional-grade curling wand with digital temperature control and heat protection technology.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 176 }
  },
  {
    id: 265,
    title: "Luxury Skincare Collection",
    price: 199.99,
    description: "Premium skincare set featuring cleansing balm, exfoliating toner, hydrating serum, moisturizer, and eye cream in a beautiful gift box. Made with clean, natural ingredients.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf13?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 203 }
  },
  {
    id: 266,
    title: "Retinol Night Cream",
    price: 89.99,
    description: "Advanced anti-aging night cream with encapsulated retinol, peptides, and ceramides. Reduces appearance of fine lines and wrinkles while improving skin texture and firmness.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 234 }
  },
  {
    id: 267,
    title: "Professional Makeup Brush Set",
    price: 129.99,
    description: "Comprehensive 24-piece makeup brush set with synthetic bristles, ergonomic handles, and vegan leather case. Includes brushes for face, eyes, and lips.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.8, count: 167 }
  },
  {
    id: 268,
    title: "Natural Hair Care Collection",
    price: 79.99,
    description: "Complete haircare set including sulfate-free shampoo, deep conditioning mask, leave-in conditioner, and hair oil. Formulated with organic ingredients for all hair types.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.6, count: 198 }
  },
  {
    id: 269,
    title: "LED Light Therapy Mask",
    price: 199.99,
    description: "Advanced at-home light therapy mask with red, blue, and infrared LED lights to target multiple skin concerns including acne, fine lines, and uneven skin tone.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.7, count: 145 }
  },
  {
    id: 270,
    title: "Luxury Perfume Collection",
    price: 299.99,
    description: "Exclusive set of three premium fragrances featuring notes of jasmine, sandalwood, amber, and vanilla. Presented in elegant glass bottles with gift packaging.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261e?auto=format&fit=crop&q=80&w=600",
    rating: { rate: 4.9, count: 123 }
  }
];
