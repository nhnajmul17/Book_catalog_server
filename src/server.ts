import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("connected mongodbdatabase");
    app.listen(5000, () => {
      console.log(`Application Listening on 5000`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
