const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { normalizeDataApi, normalizeDataDb } = require("./utils");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", async (req, res) => {
  const { name } = req.query;
  try {
    /////////////Llamada a DB por name/////////////////
    if (name) {
      const pokemonDbByName = await Pokemon.findOne({
        where: { name },
        include: Type,
      });
      if (pokemonDbByName !== null)
        return res.json(normalizeDataDb(pokemonDbByName));
      else {
        ////////////////Consulta a la API por name/////////////////
        const dataApiResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const dataApiByName = normalizeDataApi(dataApiResponse);

        return res.json(dataApiByName);
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
          const { name, types, urlImg, createInDb } = normalizeDataApi(response);
          return { name, types, urlImg, createInDb };
        })
        .catch((e) => console.log(e));
    });

    const pokemonsApi = await Promise.all(pokemonsDataApiPromises);

    ////////7///////Consulta a la base de datos/////////////////////7
    const dataDB = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: { attributes: [] },
      },
      attributes: ["name", "urlImg", "createInDb"],
    });
    //Normalizamos la info para que llegue igual que la API
    const dataDBNormalized = dataDB?.map((pokemon) => {
      return normalizeDataDb(pokemon);
    });

    //Concatenamos los pokemones de DB y API
    const totalPokemons = pokemonsApi.concat(dataDBNormalized);
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
    return res.json(normalizeDataDb(pokemonDB));
  } catch {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
      );
      const dataApiResponse = normalizeDataApi(response);
      return res.json(dataApiResponse);
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
    const newPokemonNormalized = normalizeDataDb(newPokemon);
    return res.json(newPokemonNormalized);
  } catch (e) {
    return res.status(404).json("Error ---> " + e);
  }
});

module.exports = router;
