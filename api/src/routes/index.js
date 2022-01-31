const { Router } = require("express");
const axios = require("axios");
//const { Model } = require("sequelize/dist");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", async (req, res) => {
  try {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemonsDataApi = data.data.results; //[{name, url}, {name2, url2}]
    const pokemonsDataApiPromises = pokemonsDataApi?.map((pokemon) => {
      // Hay un problema con el map, promise <pending>
      return axios
        .get(pokemon.url)
        .then((response) => {
          const types = response.data.types?.map((elem) => elem.type.name); //[type1, type2]
          const urlImg = response.data.sprites.other.dream_world.front_default; //"img_URL"
          return { name: pokemon.name, type: types, img: urlImg };
        })
        .catch((e) => console.log(e));
    });
    const pokemonsApi = Promise.all(pokemonsDataApiPromises).then(
      (value) => res.json(value)
      //Debo retornar [{name,type:[type1, type2] {, img}, {name, type, img}]
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
