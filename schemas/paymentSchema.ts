import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema({
   fullName : {
    type: String, required: true
   },
   emailAddress: {
    type: String,required:true
   },
     // Amount in cents (or smallest unit of the currency)
  amount: {
    type: Number,
    required: true,
  },

  // Currency (e.g., 'usd', 'eur')
  currency: {
    type: String,
    required: true,
  },

  // Payment status ('succeeded', 'pending', 'failed')
  status: {
    type: String,
    default: "succeeded",
    enum: ['succeeded', 'pending', 'failed'],
  },
   // Timestamp for when the payment was created
  createdAt: {
    type: Date,
    default: Date.now,
  },

})

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment