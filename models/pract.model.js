"use strict";

const mongoose = require("mongoose");

class Fruits {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const fruitsSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  image: { type: String },
});

const fruitsModel = mongoose.model("frtcollection", fruitsSchema);

module.exports = { Fruits, fruitsModel };
