const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");

const router = Router();

router.get("/types", async (req, res) => {
  try {
    const typesDataApi = await axios.get("https://pokeapi.co/api/v2/type");
    const typesApi = typesDataApi.data.results?.map((type) => type.name);
    //[type1, type2....]

    const typesToDBPromises = await typesApi?.map(async (type) => {
      return await Type.findOrCreate({
        where: { name: type },
      });
    });

    const typesToDB = await Promise.all(typesToDBPromises);

    const typesDB = await Type.findAll();

    return res.json(typesDB);

    
  } catch (error) {
    return res.status(404).json(error);
  }
});

module.exports = router;
