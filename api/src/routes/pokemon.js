const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const showDataApi = (response) => {
  return {
    name: response.data.name,
    types: response.data.types?.map((elem) => {
      return elem.type.name;
    }),
    urlImg: response.data.sprites.other["official-artwork"].front_default,
    id: response.data.id,
    height: response.data.height,
    weight: response.data.weight,
    stats: response.data.stats.reduce(
      (prevValue, actualValue) => ({
        ...prevValue,
        [actualValue.stat.name]: actualValue.base_stat,
      }),
      {}
    ),
  };
};

router.get("/pokemons", async (req, res) => {
  const { name } = req.query;
  try {
    /////////////Llamada a API por name/////////////////
    if (name) {
      const dataDbByName = await Pokemon.findOne({
        where: { name },
        include: Type,
      });
      if (dataDbByName !== null) return res.json(dataDbByName);
      else {
        ////////////////Consulta a DB por name/////////////////
        const dataApiResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const dataApiByName = showDataApi(dataApiResponse);
        const { types, urlImg, id, height, weight, stats } = dataApiByName;
        return res.json({
          name: dataApiByName.name,
          types,
          urlImg,
          id,
          height,
          weight,
          ...stats,
        });
      }
    }
    ////////7///////Llamada a la API/////////////////////7
    const dataApi = await Promise.all([
      axios.get("https://pokeapi.co/api/v2/pokemon"),
      axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"),
    ]);
    // console.log(datApi) ---> [{ data: {results:[] } }, { data:{results:[] } }]
    dataArr1 = dataApi[0].data.results;
    dataArr2 = dataApi[1].data.results;

    const pokemonsDataApi = dataArr1.concat(dataArr2); //[{name, url}, {name2, url2}, ...]
    const pokemonsDataApiPromises = pokemonsDataApi?.map((pokemon) => {
      return axios
        .get(pokemon.url)
        .then((response) => {
          const { name, types, urlImg } = showDataApi(response);
          return { name, types, urlImg };
        })
        .catch((e) => console.log(e));
    });

    const pokemonsApi = await Promise.all(pokemonsDataApiPromises);

    ////////7///////Consulta a la base de datos/////////////////////7
    const dataDB = await Pokemon.findAll();

    totalPokemons = pokemonsApi.concat(dataDB);
    return res.json(totalPokemons);
  } catch (error) {
    res.status(404).json("No se encontraron el/los pokemons. " + error);
  }
});

//{type, urlimg, id, height, weitght, stats:{hp, attack...}}
router.get("/pokemon/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;

  try {
    const pokemonDB = await Pokemon.findByPk(idPokemon, { include: Type });
    if (pokemonDB === null)
      return res.status(404).json("Error, no encuentra el id: " + error);
    return res.json(pokemonDB);
  } catch {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
      );
      const { name, types, urlImg, id, height, weight, stats } =
        showDataApi(response);
      return res.json({ name, types, urlImg, id, height, weight, ...stats });
    } catch (error) {
      res.status(404).json("Error, no encuentra el id: " + error);
    }
  }
});

router.post("/pokemons", async (req, res) => {
  try {
    const { name, types, urlImg, height, weight, hp, attack, defense, speed } =
      req.body;
    const pokemonCreated = await Pokemon.create({
      name,
      urlImg,
      height,
      weight,
      hp,
      attack,
      defense,
      speed,
    });

    const typeDbArr = await Type.findAll({
      where: { name: types },
    });
    const typeDbId = typeDbArr?.map((p) => p.dataValues.id);

    await pokemonCreated.addType(typeDbId);

    const newPokemon = await Pokemon.findOne({
      where: { name },
      include: Type,
    });

    return res.json(newPokemon);
  } catch (e) {
    return res.status(404).json("Error ---> " + e);
  }
});

// router.post("/pokemons", async (req, res) => {
//   try {
//     const { name, types, urlImg, height, weight, hp, attack, defense, speed } =
//       req.body;
//     const pokemonCreate = await Pokemon.create({
//       name,
//       urlImg,
//       height,
//       weight,
//       hp,
//       attack,
//       defense,
//       speed,
//     });

//     const typeDbArr = await Type.findAll({
//       where: {name: types}
//     })
//     const typeDb = typeDbArr.map(p => p.dataValues.name )
//     console.log(typeDb);

//     if (typeof types === "Number") {
//       await pokemonCreate.addType(types, { through: "pokemon_type" });
//     } else {
//       await pokemonCreate.addType(types[0], { through: "pokemon_type" });
//       await pokemonCreate.addType(types[1], { through: "pokemon_type" });
//     }
//     const pokemon = await Pokemon.findOne({ where: { name }, include: Type });
//     return res.json(pokemon);
//   } catch (e) {
//     return res.json(e);
//   }
// });

module.exports = router;
