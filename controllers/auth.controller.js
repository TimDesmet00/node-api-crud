const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  const token = jwt.sign({ id: userId }, "secret-key", { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, "secret-key");
    return decoded;
  } catch (err) {
    console.log(err);
    return null;
  }
};

/*
module.exports.login = async (req, res) => {
  const userId = "id_de_l_utilisateur";
  const token = generateToken(userId);
  res.json({ token });
};]
*/

module.exports.login = async (req, res) => {
  const userId = "id user";

  try {
    const token = await generateToken(userId);
    res.json({ token });
  } catch (err) {
    console.log(err);
    res.json({ message: "Erreur lors de la connexion" });
  }
};
