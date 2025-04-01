
import { useState, useEffect } from "react";
import { Review } from "@/types/review";
import { fetchReviewsForProduct, addReviewForProduct } from "@/services/reviews";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

interface ProductReviewsProps {
  productId: number;
}

const reviewFormSchema = z.object({
  reviewer: z.string().min(2, { message: "Name must be at least 2 characters" }),
  rating: z.number().min(1, { message: "Please select a rating" }).max(5),
  comment: z.string().min(5, { message: "Review must be at least 5 characters" }),
});

type ReviewFormValues = z.infer<typeof reviewFormSchema>;

const ProductReviews = ({ productId }: ProductReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const { toast } = useToast();

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      reviewer: "",
      rating: 0,
      comment: "",
    },
  });

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setIsLoading(true);
        const data = await fetchReviewsForProduct(productId);
        setReviews(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading reviews:", error);
        setIsLoading(false);
      }
    };

    loadReviews();
  }, [productId]);

  const onSubmit = async (values: ReviewFormValues) => {
    try {
      setIsSubmitting(true);
      
      const newReview = await addReviewForProduct({
        productId,
        rating: values.rating,
        reviewer: values.reviewer,
        comment: values.comment,
      });

      setReviews((prev) => [newReview, ...prev]);
      form.reset({
        reviewer: "",
        rating: 0,
        comment: "",
      });
      setSelectedRating(0);

      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!",
      });
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit your review. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    form.setValue("rating", rating, { shouldValidate: true });
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : "No ratings yet";

  // Calculate rating distribution
  const ratingDistribution = [0, 0, 0, 0, 0]; // 5 stars, 4 stars, 3 stars, 2 stars, 1 star
  reviews.forEach(review => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingDistribution[5 - review.rating]++;
    }
  });

  // Calculate percentages for each rating
  const ratingPercentages = ratingDistribution.map(count => 
    reviews.length > 0 ? (count / reviews.length) * 100 : 0
  );

  return (
    <div className="mt-16 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Average Rating</h3>
          <div className="text-4xl font-bold text-amber-500 mb-2">{averageRating}</div>
          <div className="flex justify-center text-amber-500">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= Math.round(Number(averageRating))
                    ? "fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Based on {reviews.length} review{reviews.length !== 1 ? "s" : ""}
          </div>
        </div>

        <div className="col-span-2">
          <h3 className="font-semibold mb-4">Rating Distribution</h3>
          {[5, 4, 3, 2, 1].map((star, index) => (
            <div key={star} className="flex items-center mb-2">
              <div className="w-12 text-sm text-right pr-4">{star} stars</div>
              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: `${ratingPercentages[index]}%` }}
                ></div>
              </div>
              <div className="w-12 text-sm pl-4">
                {ratingDistribution[index]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="reviewer"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="reviewer">Your Name</Label>
                  <FormControl>
                    <Input id="reviewer" placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <Label>Your Rating</Label>
                  <FormControl>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-8 w-8 cursor-pointer ${
                            star <= (hoverRating || selectedRating)
                              ? "text-amber-500 fill-current"
                              : "text-gray-300"
                          }`}
                          onClick={() => handleRatingClick(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                        />
                      ))}
                      <input type="hidden" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="comment">Your Review</Label>
                  <FormControl>
                    <Textarea
                      id="comment"
                      placeholder="Tell us what you think about this product..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </Form>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        {isLoading ? (
          <div className="text-center py-8">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-500">Loading reviews...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="border-b pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{review.reviewer}</h4>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex text-amber-500 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating ? "fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
