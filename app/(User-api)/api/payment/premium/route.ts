import connectDB from "@/lib/connectDB";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";

// Connect to the database
connectDB();

export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url); // Extract search parameters from the request URL
    const email = searchParams.get("email"); // Get the email query parameter

    if (!email) {
      return NextResponse.json({ message: 'Email parameter is required' }, { status: 400 });
    }

    // Update user's isPremium field to true
    const user = await User.findOneAndUpdate(
      { emailAddresses: email }, // Replace 'emailAddresses' with your schema's field
      { isPremium: true },
      { new: true } // Return the updated document
    );

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User updated successfully', user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
