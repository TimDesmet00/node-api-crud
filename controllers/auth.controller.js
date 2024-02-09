const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const generateToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.jwt_secret, { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.jwt_token);
    return decoded;
  } catch (err) {
    console.log(err);
    throw new Error('Token invalide');
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
