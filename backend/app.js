require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const productRouter = require("./routes/product.routes")
const userRouter = require("./routes/user.routes")

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

//Routes
app.use("/api/v1/product/", productRouter);
app.use("/api/v1/user/", userRouter);

app.listen(
    PORT, () => console.log(`server is running on ${PORT}`)
)