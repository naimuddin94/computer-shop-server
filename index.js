const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./database/connectDB");

app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

const main = async (req, res) => {
  await connectDB();
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
};

main();
