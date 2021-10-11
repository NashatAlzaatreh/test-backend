"use strict";

const axios = require("axios");

require("dotenv").config();

const { Fruits, fruitsModel } = require("../models/pract.model");

const getFruits = async (req, res) => {
  const api = "https://fruit-api-301.herokuapp.com/getFruit";
  await axios.get(api).then((results) => {
    const fruitsArr = results.data.fruits.map((item) => {
      return new Fruits(item.name, item.price, item.image);
    });
    res.json(fruitsArr);
  });
};

const addToFav = async (req, res) => {
  const { name, price, image } = req.body;
  const newFruit = new fruitsModel({
    name,
    price,
    image,
  });
  newFruit.save();
  res.json(newFruit);
};

const getFavFruits = async (req, res) => {
  fruitsModel.find((error, favFruitsData) => {
    res.json(favFruitsData);
  });
};

const deleteFavFruits = async (req, res) => {
  fruitsModel.deleteOne({ _id: req.params._id }, (error, deleteFavData) => {
    res.json(deleteFavData);
  });
};

const updateFavFruits = async (req, res) => {
  const { name, price, image } = req.body;
  fruitsModel.findByIdAndUpdate(
    { _id: req.params._id },
    { name, price, image },
    { new: true },
    (error, updateFavData) => {
      res.json(updateFavData);
    }
  );
};

module.exports = {
  getFruits,
  getFavFruits,
  addToFav,
  deleteFavFruits,
  updateFavFruits,
};
