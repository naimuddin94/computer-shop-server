const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
const connectDB = require("./database/connectDB");
const globalErrorHandler = require("./lib/globalErrorHandler");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

// handling all route not found errors
app.get("*", (req, res, next) => {
  const error = new Error(`Can't find route ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main = async (req, res) => {
  await connectDB();
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
};

main();
