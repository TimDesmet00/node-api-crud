const PokemonModel = require("../models/pokemon.model");

module.exports.getPokemons = async (req, res) => {
  const pokemons = await PokemonModel.find();
  res.status(200).json({ pokemons });
};

module.exports.getPokemon = async (req, res) => {
  const pokemon = await PokemonModel.findById(req.params.id);
  res.status(200).json({ pokemon });
};

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

module.exports.editPokemon = async (req, res) => {
  const pokemon = await PokemonModel.findById(req.params.id);

  if (!pokemon) {
    res.status(400).send({ message: "Pokemon non trouvé" });
    return;
  }

  const updatedPokemon = await PokemonModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ updatedPokemon });
};

module.exports.deletePokemon = async (req, res) => {
  const pokemon = await PokemonModel.findById(req.params.id);

  if (!pokemon) {
    res.status(400).send({ message: "Pokemon non trouvé" });
    return;
  }

  await PokemonModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Pokemon supprimé" });
};
