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
      default: "Aucune biographie",
    },
    picture: {
      type: String,
      required: false,
      default: "pas d'image",
    },
    token: {
      type: String,
      required: false,
      default: "",
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

module.exports = mongoose.model("User", userSchema);
