import mongoose from "mongoose";

const instance = mongoose.Schema(
  {
    username: String,
    image: String,
    company: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("reviews", instance);
