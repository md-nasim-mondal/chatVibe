import mongooes from 'mongoose'

const userSchema =new mongooes.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  imageUrl: { type: String },
  password: { type: String, required: true }, //password will be hash
  role: { type: String, enum: ["user", "admin"], default: "user" },

})
export default mongooes.models.userSchema;