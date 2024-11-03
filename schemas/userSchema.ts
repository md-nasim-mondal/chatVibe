// /schemas/userSchema.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

interface IUser extends Document {
  emailAddresses: string;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl : string;
  password: string;
  role : string;
  isPremium : boolean;
  // Add other fields as needed
  // Add other fields as needed
  // Add other fields as needed
  // Add other fields as needed
}

const userSchema = new Schema<IUser>({
  emailAddresses: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  imageUrl: { type: String ,default:"http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"},
  isPremium : {type:Boolean,default:false},
  role: { type: String, enum: ['user', 'admin'], default: 'user' },

  // Define other fields
});

// Use mongoose.models to check if the model already exists, to prevent overwriting
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);


export default User;
