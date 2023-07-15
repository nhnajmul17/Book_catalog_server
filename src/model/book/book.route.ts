import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();
router.get("/book/:id", BookController.getSingleBook);
router.delete("/books/:id", BookController.deleteBook);
router.post("/books", BookController.addBook);
router.get("/books", BookController.getAllBooks);
// router.post("/books", BookController.CreateBook);

export default router;
