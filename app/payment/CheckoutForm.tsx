
"use client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useRouter } from 'next/navigation'
import { useUser } from "@clerk/clerk-react";
import savePayment from "@/utilities/api-call/savePayment";
import axios from "axios";

interface CheckoutFormProps {
  price: any;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ price }) => {
  const router = useRouter()
 
  const {user} = useUser()
  const emailAddresses = user?.emailAddresses[0].emailAddress;
  const [error, setError] = useState<string>("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent) => {
    if(user){
      event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

  if(user){
      const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
     
      setError(error.message || "An error occurred");
      toast.error("Something wrong", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      try {
      savePayment(user,price,"dolar")
      setError("");
  
       axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/payment/premium?email=${emailAddresses}`,
        {
          isPremium: true
        }
       
      );
      
      // Show success toast
      toast.success("Payment successful!", {
        position: "top-right",
        autoClose: 3000,
      });
      router.push('/pricing')
      card.clear();
      } catch (error) {
      setError( "Something wrong");
       toast.error("Something wrong", {
        position: "top-right",
        autoClose: 3000,
      });
      }
      
    }
    }
  };
  }

  return (
    <div className="text-white">
      {/* ToastContainer to display toasts */}
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center ">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-center text-gray-700 text-xl font-bold mb-4">
              Total price
            </h2>
            <div className="my-4">
              <h3 className="text-4xl text-black font-semibold text-center">
                ${price}
              </h3>
            </div>
            <div className="space-y-2 rounded-md bg-black p-8">
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
            <p className="text-red-600 mb-8">{error}</p>
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-md mb-6 border border-violet-300">
              <RiSecurePaymentFill className="text-black text-5xl" />
              <p className="text-center text-sm text-gray-600">
                Your payment is 100% safe and secure. We use encryption to
                protect your data and only work with verified payment gateways.
                Your trust is a priority for us.
              </p>
            </div>

            <button
              type="submit"
              disabled={!stripe}
              className="w-full bg-[#227670] text-white font-semibold py-3 rounded-lg hover:bg-[#259990] transition duration-300"
            >
              Pay ${price} &rarr;
            </button>

            <Link href="/pricing">
              <button className="w-full mt-2 bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;