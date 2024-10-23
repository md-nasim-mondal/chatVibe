"use client";
import { Card } from "@/components/ui/card";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { set } from "mongoose";
import { useState } from "react";

const CheckoutForm = () => {
    const [error,setError]=useState('')
  const stripe = useStripe();
  const elements = useElements();

  const handlesubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
      }
      
      const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card
      })
      if (error) {
          console.log('payment method', error);
          setError(error?.message)
      } else {
          console.log('payment method', paymentMethod);
          setError('')
}
      
  };

    
    
    
  return (
    <div className="text-white">
      this is from
      <form onSubmit={handlesubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className=" bg-white text-blue-1 px-2 py-1 rounded-md btn-sm  m-6"
          type="submit"
          // disabled={!stripe|| !clientSecret}
        >
          Pay
              </button>
              <p className="text-red-600">{ error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
