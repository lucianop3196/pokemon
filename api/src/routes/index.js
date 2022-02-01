const { Router } = require("express");
const axios = require("axios");
//const { Model } = require("sequelize/dist");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const showDataApi = (response) => {
  return {
    types: response.data.types?.map((elem) => elem.type.name),
    urlImg: response.data.sprites.other["official-artwork"].front_default,
    id: response.data.id,
    height: response.data.height,
    weight: response.data.weight,
  };
};

router.get("/pokemons", async (req, res) => {
  //name, img, tipos
  try {
    const dataApi = await Promise.all([
      axios.get("https://pokeapi.co/api/v2/pokemon"),
      axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"),
    ]);
    // console.log(datApi) ---> [{ data: {results:[] } }, { data:{results:[] } }]

    dataArr1 = dataApi[0].data.results;
    dataArr2 = dataApi[1].data.results;

    const pokemonsDataApi = dataArr1.concat(dataArr2); //[{name, url}, {name2, url2}, ...]
    const pokemonsDataApiPromises = pokemonsDataApi?.map((pokemon) => {
      // Hay un problema con el map, promise <pending>
      return axios
        .get(pokemon.url)
        .then((response) => {
          const { types, urlImg } = showDataApi(response);
          return { name: pokemon.name, type: types, img: urlImg };
        })
        .catch((e) => console.log(e));
    });
    const pokemonsApi = await Promise.all(pokemonsDataApiPromises);
    res.json(pokemonsApi);
  } catch (error) {
    console.log(error);
  }
});

router.get("/pokemon/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    );
    if (response) {
      const { types, urlImg, id, height, weight } = showDataApi(response);
      const stats = response.data.stats.map((stat) => {
        return {};
      });

      res.json("ok");
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
