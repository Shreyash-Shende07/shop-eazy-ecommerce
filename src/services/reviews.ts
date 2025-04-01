
import { Review } from "@/types/review";

// Sample customer names for generating reviews
const reviewerNames = [
  "Raj Sharma", "Priya Patel", "Amit Kumar", "Neha Singh", "Vikram Mehta",
  "Anjali Desai", "Samir Shah", "Deepa Gupta", "Kiran Reddy", "Meera Joshi",
  "Arjun Nair", "Kavita Verma", "Rahul Malhotra", "Shreya Iyer", "Aditya Menon",
  "Pooja Kapoor", "Sanjay Mishra", "Ritu Chauhan", "Vivek Khanna", "Divya Bansal"
];

// Sample review texts
const reviewTexts = [
  "Excellent product! Exactly what I was looking for.",
  "Great quality for the price. Highly recommend.",
  "Arrived earlier than expected and in perfect condition.",
  "Good product, but the packaging could be better.",
  "Amazing value for money. Will definitely buy again.",
  "Very satisfied with my purchase. Works perfectly.",
  "Not bad, but I expected a bit more for the price.",
  "Superb quality and excellent customer service!",
  "This product exceeded my expectations. Love it!",
  "Decent quality, fast shipping, happy with my purchase.",
  "The product is good but slightly different from what's shown in the picture.",
  "Absolutely love it! Just what I needed.",
  "Good product but delivery took longer than expected.",
  "Very helpful for my everyday needs. Worth every penny.",
  "The quality is outstanding. Very impressed!",
  "Works as described. No complaints.",
  "Perfect fit for my needs. Would recommend to friends.",
  "Not the best quality, but does the job for now.",
  "Fantastic product and excellent value!",
  "Better than I expected. Very happy with this purchase."
];

// Generate a random review text
const getRandomReviewText = () => {
  return reviewTexts[Math.floor(Math.random() * reviewTexts.length)];
};

// Generate a random reviewer name
const getRandomReviewerName = () => {
  return reviewerNames[Math.floor(Math.random() * reviewerNames.length)];
};

// Generate a random date within the past 3 months
const getRandomReviewDate = () => {
  const now = new Date();
  const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
  const randomTimestamp = threeMonthsAgo.getTime() + Math.random() * (now.getTime() - threeMonthsAgo.getTime());
  return new Date(randomTimestamp);
};

// Generate a random rating between 3 and 5
const getRandomRating = () => {
  return Math.floor(Math.random() * 3) + 3; // Generates 3, 4, or 5
};

// Generate random reviews for a product
export const generateReviews = (productId: number, count: number = Math.floor(Math.random() * 5) + 3): Review[] => {
  const reviews: Review[] = [];
  
  for (let i = 0; i < count; i++) {
    reviews.push({
      id: `${productId}-${i}`,
      productId,
      rating: getRandomRating(),
      reviewer: getRandomReviewerName(),
      comment: getRandomReviewText(),
      date: getRandomReviewDate(),
    });
  }
  
  return reviews;
};

// Get reviews for a specific product
export const getProductReviews = (productId: number): Promise<Review[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateReviews(productId));
    }, 300);
  });
};
