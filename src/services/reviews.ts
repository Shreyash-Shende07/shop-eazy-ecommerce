import { v4 as uuidv4 } from 'uuid';
import { Review } from '@/types/review';

// Generate a sample set of reviews for each product
const generateReviewsForProduct = (productId: number): Review[] => {
  const reviewCount = Math.floor(Math.random() * 5) + 3; // 3-7 reviews per product
  const reviews: Review[] = [];
  
  const reviewers = [
    "Emily Johnson", "Michael Smith", "Sarah Williams", "David Brown", 
    "Jessica Taylor", "Christopher Davis", "Amanda Wilson", "James Miller",
    "Olivia Martinez", "Daniel Anderson", "Sophia Thomas", "Matthew Jackson",
    "Ava White", "Ethan Harris", "Isabella Martin", "Ryan Thompson",
    "Emma Garcia", "Joshua Robinson", "Mia Lewis", "William Clark",
    "Abigail Rodriguez", "Alexander Wright", "Charlotte Young", "Tyler Hill",
    "Harper Walker", "Benjamin Green", "Lily Adams", "Samuel Baker",
    "Sofia Nelson", "Andrew Carter", "Chloe Mitchell", "Jacob Phillips"
  ];
  
  const positiveComments = [
    "Absolutely love this product! It exceeded all my expectations.",
    "Great quality for the price. Would definitely buy again.",
    "Fast shipping and exactly as described. Very satisfied!",
    "This is the best purchase I've made this year. Highly recommend.",
    "Perfect fit and amazing performance. Couldn't be happier!",
    "Exceptional value for money. Totally worth it.",
    "The quality is outstanding, better than I expected.",
    "I've been using this for a month now and it still works perfectly.",
    "Elegant design and superior functionality. 5 stars!",
    "This product changed my life. I use it every day.",
    "Incredibly versatile and easy to use. Great purchase.",
    "I bought this as a gift and they absolutely loved it!",
    "Surpassed my expectations in every way possible.",
    "The attention to detail in this product is remarkable.",
    "I'm impressed with how durable and well-made this is."
  ];
  
  const mixedComments = [
    "Good product overall, but the shipping took longer than expected.",
    "I like it, though it's slightly different from what I imagined.",
    "Works well for the price, but there's room for improvement.",
    "Nice product, but the instructions could be clearer.",
    "Mostly satisfied, but I wish it had more features.",
    "Pretty good value, though not perfect in every aspect.",
    "Decent quality but slightly overpriced in my opinion.",
    "It does what it's supposed to do, but nothing extraordinary.",
    "Okay for now, but I'm not sure about the long-term durability.",
    "Satisfied with my purchase, but had a small issue with customer service."
  ];
  
  const negativeComments = [
    "Disappointed with the quality. Not worth the price.",
    "Doesn't function as advertised. Considering returning it.",
    "The product arrived damaged. Customer service was slow to respond.",
    "Broke after just two weeks of normal use.",
    "Too expensive for what you get. I expected better."
  ];
  
  // Generate unique reviews for this product
  for (let i = 0; i < reviewCount; i++) {
    const rating = Math.floor(Math.random() * 5) + 1; // 1-5 stars
    let comment;
    
    if (rating >= 4) {
      comment = positiveComments[Math.floor(Math.random() * positiveComments.length)];
    } else if (rating >= 3) {
      comment = mixedComments[Math.floor(Math.random() * mixedComments.length)];
    } else {
      comment = negativeComments[Math.floor(Math.random() * negativeComments.length)];
    }
    
    // Generate a random date within the last year
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 365));
    
    reviews.push({
      id: uuidv4(),
      productId,
      rating,
      reviewer: reviewers[Math.floor(Math.random() * reviewers.length)],
      comment,
      date
    });
  }
  
  return reviews.sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by newest first
};

// Simulate a database of reviews
const reviewsDatabase: { [key: number]: Review[] } = {};

export const fetchReviewsForProduct = async (productId: number): Promise<Review[]> => {
  // If we haven't generated reviews for this product yet, do so now
  if (!reviewsDatabase[productId]) {
    reviewsDatabase[productId] = generateReviewsForProduct(productId);
  }
  
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(reviewsDatabase[productId]);
    }, 300);
  });
};

export const addReviewForProduct = async (review: Omit<Review, 'id' | 'date'>): Promise<Review> => {
  const newReview: Review = {
    ...review,
    id: uuidv4(),
    date: new Date()
  };
  
  // Initialize the product's review array if it doesn't exist
  if (!reviewsDatabase[review.productId]) {
    reviewsDatabase[review.productId] = [];
  }
  
  // Add the new review
  reviewsDatabase[review.productId].unshift(newReview);
  
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(newReview);
    }, 500);
  });
};
