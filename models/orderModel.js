import mongoose from "mongoose";

const instance = mongoose.Schema(
  {
    username: String,
    email: String,
    service: Object,
    description: String,
    status: String,
    price: Number,
    image: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("orders", instance);
