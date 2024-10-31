import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  emailAddresses: {
    type: String,
    required: true,
    // Removed `unique: true` to allow duplicate emails
  },
  imageUrl: {
    type: String,
    default: "http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "succeeded",
    enum: ["succeeded", "pending", "failed"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;
