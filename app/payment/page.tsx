"use client";
import { useSearchParams } from "next/navigation"; 
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_API_KEY}`);

const PaymentPage = () => {
  const searchParams = useSearchParams(); // Get search params using the hook
  const price = searchParams.get("price"); // Extract the "price" parameter


  return (
    <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"> 
      
      <Elements stripe={stripePromise}>
        
        <CheckoutForm price={price} /> {/* Pass price as prop */}
      </Elements>
    </div>
  );
};

export default PaymentPage;