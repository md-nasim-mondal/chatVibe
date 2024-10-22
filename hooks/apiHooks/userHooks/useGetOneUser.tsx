import connectDB from "@/lib/connectDB";
import User from "@/schemas/userSchema";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// Connect to the database
connectDB();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
   const { id } = req.query; // get ID from URL

    if (!id) {
      return NextResponse.json({ message: 'id  is required' }, { status: 400 });
    }

    // Find user by email
    const user = await User.findOne({ _d: id }); // Replace 'emailAddresses' with your schema's field
   
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user,{status:201});
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
