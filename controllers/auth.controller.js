const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    const token = jwt.sign({ id: userId }, 'votre_cl�_secr�te', { expiresIn: '1h' });
    return token;
}

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'votre_cl�_secr�te');
        return decoded;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports.signup = async (req, res) => {
    const userId = 'id_de_l_utilisateur';
    const token = generateToken(userId);
    res.json({ token });
}

module.exports.login = async (req, res) => {
    const userId = 'id_de_l_utilisateur';
    const token = generateToken(userId);
    res.json({ token });
}

