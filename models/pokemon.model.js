const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hp: {
      type: Number,
      required: true,
    },
    cp: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    types: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
