"use strict";

const express = require("express");

const cors = require("cors");

const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const mongoose = require("mongoose");
mongoose.connect(MONGO_URL);

const {
  getFruits,
  getFavFruits,
  addToFav,
  deleteFavFruits,
  updateFavFruits,
} = require("./controllers/pract.controller");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/fruits", getFruits);
app.get("/fruiting", getFavFruits);
app.post("/fruiting", addToFav);
app.delete("/fruiting/:_id", deleteFavFruits);
app.put("/fruiting/:_id", updateFavFruits);

app.listen(PORT, () => {
  console.log(`server run in ${PORT}`);
});
