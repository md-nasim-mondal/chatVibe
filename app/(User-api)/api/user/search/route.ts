import connectDB from "@/lib/connectDB";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";

// Connect to the database
connectDB();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const text = searchParams.get("text"); // Get the text query parameter

    if (!text) {
      return NextResponse.json({ message: 'Text parameter is required' }, { status: 400 });
    }

    // Use a regular expression for partial matching (case insensitive)
    const searchRegex = new RegExp(text, 'i');
    const users = await User.find({
      $or: [
        { fullName: { $regex: searchRegex } },
        { emailAddresses: { $regex: searchRegex } }
      ]
    });

    if (!users.length) {
      return NextResponse.json({ message: 'No users found matching the search criteria' });
    }

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
