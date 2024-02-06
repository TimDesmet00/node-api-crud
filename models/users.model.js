const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    biography: {
      type: String,
      required: false,
    },
    picture: {
      type: String,
      required: false,
    },
    pokemonFavorite: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pokemon",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);
