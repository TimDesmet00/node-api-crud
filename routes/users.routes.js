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
router.patch("/add-favorite/:id", addPokemonFavorite);
router.patch("/remove-favorite/:id", removePokemonFavorite);

module.exports = router;
