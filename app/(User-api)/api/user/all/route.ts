// import connectDB from "@/lib/connectDB";
// import User from "@/schemas/userSchema";
// import { NextResponse } from "next/server";


// connectDB()

// // Handle GET requests
// export async function GET() {
//   try {
//     const users = await User.find(); // Fetch all users
//     return NextResponse.json(users,  { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
//   }
// }


import connectDB from "@/lib/connectDB";
import User from "@/schemas/userSchema";
import { NextResponse } from "next/server";

connectDB();

// Handle GET requests
export async function GET() {
  try {
    const users = await User.find(); // Fetch all users

    const response = NextResponse.json(users, { status: 200 });
    
    // Add headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

