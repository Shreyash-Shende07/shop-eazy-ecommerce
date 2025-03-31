
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, CheckCircle, Banknote, Smartphone } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  pincode: z.string().min(6, { message: "Valid pincode is required" }),
  paymentMethod: z.enum(["card", "cod", "upi"], {
    required_error: "Please select a payment method",
  }),
  // Card details are conditionally required based on payment method
  cardNumber: z.string().optional()
    .refine(val => !val || val.length >= 16, { message: "Valid card number is required" }),
  cardExpiry: z.string().optional()
    .refine(val => !val || val.length >= 5, { message: "Valid expiry date is required (MM/YY)" }),
  cardCvv: z.string().optional()
    .refine(val => !val || val.length >= 3, { message: "Valid CVV is required" }),
  // UPI ID for UPI payments
  upiId: z.string().optional()
    .refine(
      (val, ctx) => {
        if (ctx.path[0] === "upiId" && ctx.data.paymentMethod === "upi") {
          return val && val.includes("@") && val.length >= 5;
        }
        return true;
      },
      { message: "Valid UPI ID is required (e.g., name@upi)" }
    ),
});

type CheckoutFormValues = z.infer<typeof formSchema>;

const Checkout = () => {
  const { cart, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  
  // Calculate increased subtotal (USD to INR conversion)
  const inrSubtotal = subtotal * 83;

  // Initialize form
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      paymentMethod: "card",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
      upiId: "",
    },
  });

  // Get current payment method to conditionally render fields
  const paymentMethod = form.watch("paymentMethod");

  // Handle checkout submission
  const onSubmit = (data: CheckoutFormValues) => {
    // In a real app, you would send this data to a payment processor
    console.log("Order data:", data);
    console.log("Cart items:", cart);
    
    let successMessage = "Order placed successfully!";
    let description = "Thank you for your purchase!";
    
    if (data.paymentMethod === "cod") {
      description += " We'll collect payment on delivery.";
    } else if (data.paymentMethod === "upi") {
      description += " We've sent payment instructions to your email.";
    }
    
    // Show success message and clear cart
    toast.success(successMessage, {
      description: description,
    });
    
    clearCart();
    
    // Redirect to home page
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // Redirect to cart if cart is empty
  React.useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/cart" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to cart
      </Link>
      
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Mumbai" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="Maharashtra" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PIN Code</FormLabel>
                        <FormControl>
                          <Input placeholder="400001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2 rounded-md border p-4">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center gap-2 font-normal">
                              <CreditCard className="h-5 w-5" />
                              Credit / Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 rounded-md border p-4">
                            <RadioGroupItem value="upi" id="upi" />
                            <Label htmlFor="upi" className="flex items-center gap-2 font-normal">
                              <Smartphone className="h-5 w-5" />
                              UPI Payment
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 rounded-md border p-4">
                            <RadioGroupItem value="cod" id="cod" />
                            <Label htmlFor="cod" className="flex items-center gap-2 font-normal">
                              <Banknote className="h-5 w-5" />
                              Cash on Delivery
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4">
                    <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Card Number</FormLabel>
                          <FormControl>
                            <Input placeholder="4242 4242 4242 4242" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="cardExpiry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiry Date</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cardCvv"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVV</FormLabel>
                            <FormControl>
                              <Input placeholder="123" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div className="space-y-4 mt-4">
                    <FormField
                      control={form.control}
                      name="upiId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>UPI ID</FormLabel>
                          <FormControl>
                            <Input placeholder="yourname@upi" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                {paymentMethod === "card" ? (
                  <>
                    <CreditCard className="mr-2 h-5 w-5" />
                    Pay ₹{(inrSubtotal + (inrSubtotal * 0.05)).toFixed(2)}
                  </>
                ) : paymentMethod === "upi" ? (
                  <>
                    <Smartphone className="mr-2 h-5 w-5" />
                    Pay ₹{(inrSubtotal + (inrSubtotal * 0.05)).toFixed(2)} via UPI
                  </>
                ) : (
                  <>
                    <Banknote className="mr-2 h-5 w-5" />
                    Place Order (Pay ₹{(inrSubtotal + (inrSubtotal * 0.05)).toFixed(2)} on delivery)
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-md mr-3 p-1">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm line-clamp-1">{item.title}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium text-sm">₹{(item.price * 83 * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{inrSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>₹{(inrSubtotal * 0.05).toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{(inrSubtotal + (inrSubtotal * 0.05)).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 p-6 flex items-center justify-center text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              Secure checkout powered by ShopNow
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
