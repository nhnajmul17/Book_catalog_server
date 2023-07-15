import express, { Application, urlencoded } from "express";
import router from "./model/book/book.route";
import cors from "cors";

const app: Application = express();

//parser
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// app routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("This Is Book Catalog Server");
});

export default app;
