const express = require("express");

const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/pokemons", require("./routes/pokemons.routes"));

app.listen(port, () => {
  console.log(`Le server est démarré sur le port: ${port}`);
});
