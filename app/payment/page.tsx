"use client"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// const stripePromise =loadStripe(import.meta.env.NEXT_PAYMENT_GATEWAY_PK)
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_API_KEY}`);


const Page = () => {
    return (
        <div>
            <h1 className="text-center text-3xl text-white">payment koren vai</h1>

            <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>


        </div>
    );
};

export default Page;