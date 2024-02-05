const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Liste de tous les pokemons" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Pokemon avec l'id ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.json({ message: req.body });
});

router.put("/:id", (req, res) => {
  res.json({ message: `Modifier le pokemon avec l'id ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Supprimer le pokemon avec l'id ${req.params.id}` });
});

module.exports = router;
