import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT} in ${process.env.NODE_ENV}`)
);
