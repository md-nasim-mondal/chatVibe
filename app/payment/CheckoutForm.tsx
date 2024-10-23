// // "use client";
// // import { Card } from "@/components/ui/card";
// // import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// // import { set } from "mongoose";
// // import Link from "next/link";
// // import { useState } from "react";
// // import { RiSecurePaymentFill } from "react-icons/ri";

// // const CheckoutForm = () => {
// //   const [error, setError] = useState("");
// //   const stripe = useStripe();
// //   const elements = useElements();

// //   const handlesubmit = async (event) => {
// //     event.preventDefault();

// //     if (!stripe || !elements) {
// //       return;
// //     }
// //     const card = elements.getElement(CardElement);
// //     if (card === null) {
// //       return;
// //     }

// //     const { error, paymentMethod } = await stripe.createPaymentMethod({
// //       type: "card",
// //       card,
// //     });
// //     if (error) {
// //       console.log("payment method", error);
// //       setError(error?.message);
// //     } else {
// //       console.log("payment method", paymentMethod);
// //       setError("");
// //     }
// //   };

// //   return (
// //     <div className="text-white">
// //       <form onSubmit={handlesubmit}>

// //         <div className=" flex items-center justify-center ">
// //           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
// //             {/* Total Price */}
// //             <div className="text-center mb-4">
// //               <p className="text-gray-500 text-sm">Total price</p>
// //               <h1 className="text-4xl font-bold text-black">$33,79</h1>
// //             </div>

// //             {/* Item Details */}
// //                       <div className="bg-black text-white p-4 rounded-lg mb-4">
// //                       <CardElement
// //           options={{
// //             style: {
// //               base: {
// //                 fontSize: "16px",
// //                 color: "#424770",
// //                 "::placeholder": {
// //                   color: "#aab7c4",
// //                 },
// //               },
// //               invalid: {
// //                 color: "#9e2146",
// //               },
// //             },
// //           }}
// //         />
// //             </div>

// //             {/* Payment Security */}
// //             <div className="text-center mb-6">
// //               <div className="flex justify-center mb-2">

// //               <RiSecurePaymentFill className="text-black text-6xl"/>

// //               </div>
// //               <p className="text-gray-500 text-sm">
// //                 Your payment is 100% safe and secure. We use encryption to
// //                 protect your data and only work with verified payment gateways.
// //                 Your trust is a priority for us.
// //               </p>
// //             </div>

// //                       {/* Continue Button */}

// //                       <button
// //          className="bg-[#227670] text-white font-bold py-3 px-6 rounded-full w-full hover:bg-lime-600 transition duration-300 ease-in-out"
// //           type="submit"
// //           // disabled={!stripe|| !clientSecret}
// //         >
// //           Pay
// //         </button>
// //         <p className="text-red-600">{error}</p>

// //                       <Link href={'pricing'}>
// //                       <button className="mt-2 bg-red-600 text-white font-bold py-3 px-6 rounded-full w-full hover:bg-red-400 transition duration-300 ease-in-out">Cancel</button>
// //                       </Link>

// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CheckoutForm;

// "use client";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import the styles
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import Link from "next/link";
// import { useState } from "react";
// import { RiSecurePaymentFill } from "react-icons/ri";

// const CheckoutForm = () => {
//   const [error, setError] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   const handlesubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }
//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });
//     if (error) {
//       console.log("payment method", error);
//       setError(error?.message);
//     } else {
//       console.log("payment method", paymentMethod);
//       setError("");

//       // Show success toast
//       toast.success("Payment successful!", {
//         position: "top-right",
//         autoClose: 3000, // Auto closes after 3 seconds
//       });
//       card.clear();
//     }
//   };

//   return (
//     <div className="text-white">
//       {/* ToastContainer to display toasts */}
//       <ToastContainer />

//       <form onSubmit={handlesubmit}>
//         <div className="flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             {/* Total Price */}
//             <div className="text-center mb-4">
//               <p className="text-gray-500 text-sm">Total price</p>
//               <h1 className="text-4xl font-bold text-black">$33.79</h1>
//             </div>

//             {/* Item Details */}
//             <div className="bg-black text-white p-4 rounded-lg mb-4">
//               <CardElement
//                 options={{
//                   style: {
//                     base: {
//                       fontSize: "16px",
//                       color: "#424770",
//                       "::placeholder": {
//                         color: "#aab7c4",
//                       },
//                     },
//                     invalid: {
//                       color: "#9e2146",
//                     },
//                   },
//                 }}
//               />
//             </div>

//             {/* Payment Security */}
//             <div className="text-center mb-6">
//               <div className="flex justify-center mb-2">
//                 <RiSecurePaymentFill className="text-black text-6xl" />
//               </div>
//               <p className="text-gray-500 text-sm">
//                 Your payment is 100% safe and secure. We use encryption to
//                 protect your data and only work with verified payment gateways.
//                 Your trust is a priority for us.
//               </p>
//             </div>

//             {/* Pay Button */}
//             <button
//               className="bg-[#227670] text-white font-bold py-3 px-6 rounded-full w-full hover:bg-lime-600 transition duration-300 ease-in-out"
//               type="submit"
//             >
//               Pay
//             </button>
//             <p className="text-red-600">{error}</p>

//             {/* Cancel Button */}
//             <Link href="/pricing">
//               <button className="mt-2 bg-red-600 text-white font-bold py-3 px-6 rounded-full w-full hover:bg-red-400 transition duration-300 ease-in-out">
//                 Cancel
//               </button>
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;

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
