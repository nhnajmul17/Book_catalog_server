import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();
router.get("/book/:id", BookController.getSingleBook);
router.delete("/delete-book/:id", BookController.deleteBook);
router.put("/edit-book/:id", BookController.updateBook);
router.post("/books", BookController.addBook);
router.post("/review", BookController.addReview);
router.get("/books", BookController.getAllBooks);

export const Bookroutes = router;
