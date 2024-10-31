import connectDB from "@/lib/connectDB";
import Payment from '@/schemas/paymentSchema';
import { NextResponse } from "next/server";

// Connect to the database
connectDB();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    // Set up the query: if `email` is provided, search by it; otherwise, get all records
    const query = email ? { emailAddresses: email } : {}; // Update `emailAddresses` if your schema field is different

    // Retrieve all matching payment records
    const paymentHistory = await Payment.find(query); 

    // Check if any payment history was found
    if (!paymentHistory || paymentHistory.length === 0) {
      return NextResponse.json({ message: 'Payment history not found' }, { status: 404 });
    }

    return NextResponse.json({ paymentHistory }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
