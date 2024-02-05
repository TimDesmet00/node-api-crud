const PokemonModel = require("../models/pokemon.model");

module.exports.setPokemons = async (req, res) => {
  if (!req.body.name || !req.body.hp || !req.body.cp || !req.body.picture) {
    res
      .status(400)
      .send({ message: "Merci d'ajouté un Pokemon!" + req.body.types });
    return;
  }

  const pokemon = await PokemonModel.create({
    name: req.body.name,
    hp: req.body.hp,
    cp: req.body.cp,
    picture: req.body.picture,
    types: req.body.types,
  });
  res.status(200).json({ pokemon });
};
