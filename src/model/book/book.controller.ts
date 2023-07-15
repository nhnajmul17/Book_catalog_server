import { Request, Response } from "express";
import { Book } from "./book.model";

// const CreateBook = async (req: Request, res: Response) => {
//   try {
//     const { orderItems, phone } = req.body;

//     // Create the order
//     const order = await Book.create({ phone });

//     // Create the order items
//     const orderItemPromises = orderItems.map(async (item: IOrderItem) => {
//       const { product, quantity } = item;
//       const orderItem = await OrderItem.create({
//         orderId: order._id,
//         product,
//         quantity,
//       });
//     });
//     await Promise.all(orderItemPromises);

//     res.status(200).json({ message: "Order created successfully" });
//   } catch (error) {
//     console.log("Error creating order:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while creating the order" });
//   }
// };
const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByIdAndDelete(bookId);
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
};
