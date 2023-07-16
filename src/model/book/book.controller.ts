import { Request, Response } from "express";
import { Book } from "./book.model";

const addReview = async (req: Request, res: Response) => {
  try {
    const review = req.body.review;
    const bookId = req.body.id;
    const result = await Book.updateOne(
      { _id: bookId },
      { $push: { reviews: review } }
    );
    await res.json(result);
  } catch (error) {
    console.log("Error Adding Book:", error);
    res.status(500).json({ error: "An error occurred while adding Book" });
  }
};

const addBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;
    const book = await Book.create(bookData);
    await res.json(book);
  } catch (error) {
    console.log("Error Adding Book:", error);
    res.status(500).json({ error: "An error occurred while adding Book" });
  }
};
const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const bookData = req.body;

    const book = await Book.findByIdAndUpdate({ _id: id }, bookData);
    await res.json(book);
  } catch (error) {
    console.log("Error Adding Book:", error);
    res.status(500).json({ error: "An error occurred while adding Book" });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByIdAndDelete({ _id: bookId });
    await res.json(book);
  } catch (error) {
    console.log("Error Deleting Book:", error);
    res.status(500).json({ error: "An error occurred while Deleting Book" });
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    await res.json(book);
  } catch (error) {
    console.log("Error retrieving Book:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the Book" });
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find({});
    await res.json(books);
  } catch (error) {
    console.log("Error retrieving Books:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the Books" });
  }
};

export const BookController = {
  getAllBooks,
  getSingleBook,
  deleteBook,
  addBook,
  addReview,
  updateBook,
};
