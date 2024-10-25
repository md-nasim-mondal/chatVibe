import connectDB from "@/lib/connectDB";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";

// Connect to the database
connectDB();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url); // Extract search parameters from the request URL
    const id = searchParams.get("id"); // Get the email query parameter

    if (!id) {
      return NextResponse.json({ message: 'id parameter is required' }, { status: 400 });
    }

    // Find user by email
    const user = await User.findOne({ _id: id }); // Replace 'emailAddresses' with your schema's field
   
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user,{status:201});
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
