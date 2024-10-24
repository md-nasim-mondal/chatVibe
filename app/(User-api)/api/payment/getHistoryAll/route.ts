import connectDB from "@/lib/connectDB";
import Payment from "@/schemas/paymentSchema";
import { NextResponse } from "next/server";


connectDB()

// Handle GET requests
export async function GET() {
  try {
    const paymentsHistory = await Payment.find(); // Fetch all users
    return NextResponse.json(paymentsHistory ,  { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
