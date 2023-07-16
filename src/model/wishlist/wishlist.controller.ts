import { Request, Response } from "express";
import { WishList } from "./wishlist.model";

const addwishlist = async (req: Request, res: Response) => {
  try {
    const wishlistBook = req.body;
    const wishList = await WishList.create(wishlistBook);
    await res.json(wishList);
  } catch (error) {
    console.log("Error in wishlist:", error);
    res.status(500).json({ error: "An error occurred while posting wishlist" });
  }
};
const getwishlist = async (req: Request, res: Response) => {
  try {
    const userEmail = req.params.email;
    const wishList = await WishList.find({ email: userEmail }).select({
      book: 1,
    });
    await res.json(wishList);
  } catch (error) {
    console.log("Error in wishlist:", error);
    res.status(500).json({ error: "An error occurred while posting wishlist" });
  }
};

export const WishListController = {
  addwishlist,
  getwishlist,
};
