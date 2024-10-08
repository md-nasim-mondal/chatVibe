import mongooes from 'mongoose'

const user =new mongooes.Schema({
  emailAddresses: { type: String, required: true, unique: true },
  fristName: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: { type: String, required: true },
  imageUrl: { type: String},
  role: { type: String, enum: ["user", "admin"], default: "user" },

})
export default mongooes.models.user;