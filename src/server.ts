import mongoose from "mongoose";
import app from "./app";
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookscatalog");
    console.log("connected mongodbdatabase");
    app.listen(5000, () => {
      console.log(`Application Listening on 5000`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
