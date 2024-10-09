import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import User from '@/schemas/userSchema';


// Make sure to connect to the database
connectDB();
// Handle GET requests
export async function GET() {
  try {
    // const users = await User.find(); // Fetch all users
    return NextResponse.json({ message: "yess get all user"});
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
    const newUser = new User(body); // Create a new user
    await newUser.save(); // Save the user to the database
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
