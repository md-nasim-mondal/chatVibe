"use client";
import { Card } from "@/components/ui/card";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { set } from "mongoose";
import { useState } from "react";
import { RiSecurePaymentFill } from "react-icons/ri";

const CheckoutForm = () => {
  const [error, setError] = useState("");
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
      type: "card",
      card,
    });
    if (error) {
      console.log("payment method", error);
      setError(error?.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
  };

  return (
    <div className="text-white">
      <form onSubmit={handlesubmit}>

        <div className=" flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            {/* Total Price */}
            <div className="text-center mb-4">
              <p className="text-gray-500 text-sm">Total price</p>
              <h1 className="text-4xl font-bold text-black">$33,79</h1>
            </div>

            {/* Item Details */}
                      <div className="bg-black text-white p-4 rounded-lg mb-4">
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
            </div>

            {/* Payment Security */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-2">
               
              <RiSecurePaymentFill className="text-black text-6xl"/>
       

              </div>
              <p className="text-gray-500 text-sm">
                Your payment is 100% safe and secure. We use encryption to
                protect your data and only work with verified payment gateways.
                Your trust is a priority for us.
              </p>
            </div>

                      {/* Continue Button */}
                      
                      <button
         className="bg-lime-500 text-white font-bold py-3 px-6 rounded-full w-full hover:bg-lime-600 transition duration-300 ease-in-out"
          type="submit"
          // disabled={!stripe|| !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>

        
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
