"use client";
import SectionContainer from "@/components/landingPage/ShareComponents/SectionContainer";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
import Loader from "@/components/meetComponents/Loader";
import useOnePayment from "@/hooks/apiHooks/paymentHooks/getOnePaymet";
import { useState, useEffect } from "react";

// Define the structure of a pricing plan
type PricingPlan = {
  name: string;
  price: number;
  features: string[];
  buttonLabel: string;
  buttonLink: string;
  plan: string;
};

const Page: React.FC = () => {
  const { isLoaded, user } = useUser();
  const { amount } = useOnePayment(); // Directly destructure amount here
  const [perces, setPerces] = useState<number | null>(null); // State for amount

  useEffect(() => {
    if (amount) {
      setPerces(amount);
    }
  }, [amount]);

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: 0,
      features: [
        "1 Hours Per Meeting",
        "High-Quality Video",
        "Multi-User Calls",
      ],
      plan: "LifeTime",
      buttonLabel: "Free",
      buttonLink: "dashboard",
    },
    {
      name: "Standard",
      price: 19,
      plan: "Month",
      features: ["Unlimited", "High-Quality Video", "Multi-User Calls"],
      buttonLabel: "Buy Now",
      buttonLink: "/payment?price=19",
    },
    {
      name: "Premium",
      price: 49,
      plan: "Year",
      features: ["Unlimited", "High-Quality Video", "Multi-User Calls"],
      buttonLabel: "Buy Now",
      buttonLink: "/payment?price=49",
    },
  ];

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {user &&
          pricingPlans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`bg-gradient-to-b h-[460px] rounded-lg p-6 text-white shadow-lg flex flex-col justify-between ${
                amount === plan.price
                  ? "to-[#227670] from-[#111024] border-2 border-red-600"
                  : "from-[#227670] to-[#111024]"
              }`}
            >
              <div className="bg-[#4d99da] text-white rounded-full text-center py-1 px-4 w-fit mx-auto">
                <span className="font-bold uppercase text-sm">{plan.name}</span>
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-extrabold">
                  {plan.price === amount ? "Purchased" : plan.price}
                  <span className="text-sm font-light">/{plan?.plan}</span>
                </h1>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <Link href={plan.buttonLink}>
                  <button
                    disabled={amount !== null} // Disable if amount is processed
                    className={`mb-4 px-4 py-2 text-base font-medium text-white rounded-lg shadow transition-colors duration-300 ${
                      amount !== null
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-main-2 hover:bg-main-3"
                    }`}
                  >
                    {amount !== null ? "Already Purchased" : plan.buttonLabel}
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </SectionContainer>
  );
};

export default Page;
