const UserModel = require("../models/users.model");

module.exports.getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json({ users });
};

module.exports.getUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  res.status(200).json({ user });
};

module.exports.setUsers = async (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message:
        "Merci de renseigner les champs: username, email et password" +
        req.body.username,
    });
    return;
  }

  const user = await UserModel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    biography: req.body.biography,
    picture: req.body.picture,
    token: req.body.token,
    pokemonFavorite: req.body.pokemonFavorite,
  });
  res.status(200).json({ user });
};

module.exports.editUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (!user) {
    res.status(400).send({ message: "Utilisateur non trouvé" });
    return;
  }

  const updatedUser = await UserModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ updatedUser });
};

module.exports.deleteUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (!user) {
    res.status(400).send({ message: "Utilisateur non trouvé" });
    return;
  }

  await UserModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Utilisateur supprimé" });
};

module.exports.addPokemonFavorite = async (req, res) => {
  try {
    const FavoritePokemon = await UserModel.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { pokemonFavorite: req.body.pokemonId } },
      { new: true }
    );
    res.status(200).send({ FavoritePokemon });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports.removePokemonFavorite = async (req, res) => {
  try {
    const FavoritePokemon = await UserModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { pokemonFavorite: req.body.pokemonId } },
      { new: true }
    );
    res.status(200).json({ FavoritePokemon });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
