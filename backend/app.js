require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const router = require("express").Router();
const productRouter = require("./routes/product.routes")

const PORT = process.env.PORT || 7000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(
    res => console.log(`db connection successfull.`)
)
.catch(
    err => console.log(`db connection failed ${err}.`)
)

app.use(require("helmet")());
app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/", productRouter);

app.listen(
    PORT, () => console.log(`server is running on ${PORT}`)
)