// pages/api/users/saveUser.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/connectDB';
import User from '@/schemas/userSchema';

// Define the expected request body interface
interface UserRequestBody {
  clerkId: string;
  email: string;
  name: string;
}

// Define the response data type
interface ResponseData {
  message: string;
  newUser?: typeof User;
  error?: any;
}

// Handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  await connectDB();

  if (req.method === 'POST') {
    const { clerkId, email, name }: UserRequestBody = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ clerkId });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create a new user
      const newUser = new User({ clerkId, email, name });
      await newUser.save();

      return res.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
