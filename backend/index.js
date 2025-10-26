import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "../backend/route/book.route.js";
import userRoute from "../backend/route/user.route.js";

dotenv.config();

const app = express();
app.use(cors());

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

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
