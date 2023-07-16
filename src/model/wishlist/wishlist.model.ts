import mongoose, { Schema, model } from "mongoose";

const WishListSchema = new Schema(
  {
    book: {
      type: Object,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const WishList = model("WishList", WishListSchema);
