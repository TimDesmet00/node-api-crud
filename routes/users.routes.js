const express = require("express");
const {
  getUsers,
  getUser,
  setUsers,
  editUser,
  deleteUser,
  addPokemonFavorite,
  removePokemonFavorite,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", setUsers);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
router.patch("/:id", addPokemonFavorite);
router.patch("/:id", removePokemonFavorite);

module.exports = userrouter;
