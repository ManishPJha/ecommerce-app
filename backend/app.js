const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("express").Router();

app.use(require("helmet")());
app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);

