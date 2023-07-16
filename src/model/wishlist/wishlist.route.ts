import express from "express";
import { WishListController } from "./wishlist.controller";

const router = express.Router();
router.post("/addwishlist", WishListController.addwishlist);
router.get("/:email", WishListController.getwishlist);
// router.get("/book/:id", BookController.getSingleBook);
// router.delete("/delete-book/:id", BookController.deleteBook);
// router.put("/edit-book/:id", BookController.updateBook);
// router.post("/review", BookController.addReview);
// router.get("/books", BookController.getAllBooks);

export const WishListroutes = router;
