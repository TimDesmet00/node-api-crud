const PokemonModel = require("../models/pokemon.model");

module.exports.setPokemons = async (req, res) => {
  if (!req.body.pokemon) {
    res.status(400).send({ message: "Merci d'ajouté un Pokemon!" });
    return;
  }

  const pokemon = await PokemonModel.create({
    name: req.body.pokemon.name,
    hp: req.body.pokemon.hp,
    cp: req.body.pokemon.cp,
    picture: req.body.pokemon.picture,
    types: req.body.pokemon.types,
  });
};
