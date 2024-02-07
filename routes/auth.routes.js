const { signup, login } = require('../controllers/auth.controller');

const express = import('express');

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;