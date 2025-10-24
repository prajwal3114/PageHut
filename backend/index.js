import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "../backend/route/book.route.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

app.use(express.json());

(async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
})();
app.use("/book",bookRoute);
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
