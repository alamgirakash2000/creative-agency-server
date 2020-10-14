import mongoose from "mongoose";

const instance = mongoose.Schema(
  {
    title: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("services", instance);
