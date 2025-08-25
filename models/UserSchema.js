import mongoose from "mongoose";

//creating schema
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: Number },
});

// export if already created this collection else create collection named "User"

export default mongoose.models.User || mongoose.model("User", userSchema);
