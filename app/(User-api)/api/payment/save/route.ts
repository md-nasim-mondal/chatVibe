import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import Payment from '@/schemas/paymentSchema'

// Make sure to connect to the database
connectDB();
// Handle GET request for fetching a single user by ID

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
     // Check if the user already exists
   
    
    const newPayment = new Payment(body); // Create a new user
    await newPayment.save(); // Save the user to the database
    return NextResponse.json({ message: 'Payment successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
