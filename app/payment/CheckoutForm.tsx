"use client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Link from "next/link";
import { useState } from "react";
import { RiSecurePaymentFill } from "react-icons/ri";

const CheckoutForm = ({ price }) => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
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

      // Show success toast
      toast.success("Payment successful!", {
        position: "top-right",
        autoClose: 3000,
      });
      card.clear();
    }
  };

  return (
    <div className="text-white">
      {/* ToastContainer to display toasts */}
      <ToastContainer />

      <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-center text-gray-700 text-lg font-semibold mb-4">
            Total price
          </h2>
          <div className="my-4">
            <h3 className="text-4xl text-black  font-semibold text-center">
              {" "}
              ${price}
            </h3>
          </div>
          <div className="space-y-2 rounded-md  bg-black p-8">
           
              

              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#ffffff",
                      "::placeholder": {
                        color: "#ffffff",
                      },
                    },
                    invalid: {
                      color: "#fa755a",
                    },
                  },
                }}
              />
                          
          </div>
          <p className="text-red-600 mb-8">{ error}</p>
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-md mb-6">
            <RiSecurePaymentFill className="text-black text-5xl"></RiSecurePaymentFill>
            <p className="text-center text-sm text-gray-600">
              Your payment is 100% safe and secure. We use encryption to protect
              your data and only work with verified payment gateways. Your trust
              is a priority for us.
            </p>
          </div>

          <button
            type="submit"
            disabled={!stripe}
            className="w-full bg-lime-500 text-white font-semibold py-3 rounded-lg hover:bg-lime-600 transition duration-300"
          >
            Pay ${price} &rarr;
          </button>
        </div>
              </div>
              </form>
    </div>
  );
};

export default CheckoutForm;
