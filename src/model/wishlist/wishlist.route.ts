import express from "express";
import { WishListController } from "./wishlist.controller";

const router = express.Router();
router.post("/addwishlist", WishListController.addwishlist);
router.delete("/removeWishList/:id", WishListController.removewishlist);
router.get("/:email", WishListController.getwishlist);

export const WishListroutes = router;
