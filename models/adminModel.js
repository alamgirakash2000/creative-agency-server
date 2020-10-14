import mongoose from "mongoose";

const instance = mongoose.Schema(
  {
    email: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("admins", instance);
