const express = require("express");
const {
  setPokemons,
  editPokemon,
  getPokemon,
  getPokemons,
  deletePokemon,
} = require("../controllers/pokemon.controller");

const router = express.Router();

router.get("/", getPokemons);
router.get("/:id", getPokemon);
router.post("/", setPokemons);
router.put("/:id", editPokemon);
router.delete("/:id", deletePokemon);

module.exports = router;
