"use client";
import { UserResource } from "@clerk/types";
import axios from "axios";
const savePayment = async (user: UserResource,amount:string,currency:string) => {

  const emailAddresses = user?.emailAddresses[0].emailAddress;
  const { fullName, imageUrl } = user || {};

  const userData = {
        "fullName":  fullName,
        "emailAddresses": emailAddresses,
        "imageUrl": imageUrl,
        "amount": 2500,
        "currency": "usd",
        "status": "succeeded"
  };

  const paymentData = {
    "fullName":  fullName,
    "emailAddresses": emailAddresses,
    "imageUrl": imageUrl,
    "amount": amount,
    "currency": currency,
    "status": "succeeded"
};

try {
const res = await axios.post(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/save`,
  paymentData
);
if (res.status === 201) {
  console.log("Payment History save in database");
} 
} catch (error) {
console.error("Error saving payment to DB", error);
}
};

export default savePayment;
