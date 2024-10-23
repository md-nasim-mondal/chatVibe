// "use client"
// import { useRouter } from "next/router";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";

// // const stripePromise =loadStripe(import.meta.env.NEXT_PAYMENT_GATEWAY_PK)
// const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_API_KEY}`);


// const Page = () => {
//     const router = useRouter();
//     const { price } = router.query;

//     return (
//         <div className="mt-60">
//       <h2 className="text-white text-center mb-8 text-3xl">Checkout - {price ? `$${price}` : 'No Price Selected'}</h2>
//       <Elements stripe={stripePromise}>
//                 <CheckoutForm price={ price} />
//       </Elements>
//     </div>
//     );
// };

// export default Page;

"use client";
import { useSearchParams } from "next/navigation"; // Use `next/navigation` for `useSearchParams`
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_API_KEY}`);

const PaymentPage = () => {
  const searchParams = useSearchParams(); // Get search params using the hook
  const price = searchParams.get("price"); // Extract the "price" parameter

  return (
    <div className="mt-60">
      <h2 className="text-white text-center mb-8 text-3xl">Checkout - {price ? `$${price}` : 'No Price Selected'}</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} /> {/* Pass price as prop */}
      </Elements>
    </div>
  );
};

export default PaymentPage;
