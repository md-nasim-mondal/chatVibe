import connectDB from "@/lib/connectDB";
import Payment from '@/schemas/paymentSchema'
import { NextResponse } from "next/server";

// Connect to the database
connectDB();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url); // Extract search parameters from the request URL
    const email = searchParams.get("email"); // Get the email query parameter

    if (!email) {
      return NextResponse.json({ message: 'Email parameter is required' }, { status: 400 });
    }

    // Find user by email
    const paymentHistory = await Payment.findOne({ emailAddresses: email }); // Replace 'emailAddresses' with your schema's field
   
    if (!paymentHistory) {
      return NextResponse.json({ message: 'Payment history not found' }, { status: 404 });
    }

    return NextResponse.json({paymentHistory},{status:201});
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
