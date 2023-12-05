const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const productRoutes = require("./routes/productRoutes")


app.use(express.json());
app.use(cors());

app.use("/products", productRoutes)

app.get("/", (req, res) => { 
    res.send("server is running")
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});