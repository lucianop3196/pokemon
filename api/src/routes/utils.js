// Función para normalizar la info que llega de types en las consultas a la db
normalizeDataDb = (pokemonDb) => {
  const typesNormalized = pokemonDb.dataValues.types?.map((type) => type.name);

  return {
    name: pokemonDb.name,
    types: typesNormalized,
    urlImg: pokemonDb.urlImg,
    id: pokemonDb.id,
    height: parseInt(pokemonDb.height),
    weight: parseInt(pokemonDb.weight),
    hp: parseInt(pokemonDb.hp),
    attack: parseInt(pokemonDb.attack),
    defense: parseInt(pokemonDb.defense),
    speed: parseInt(pokemonDb.speed),
    createInDb: pokemonDb.createInDb,
  };
};

//Función para normalizar la respuesta que llega de la api
normalizeDataApi = (responseAPI) => {
  return {
    name: responseAPI.data.name,
    types: responseAPI.data.types?.map((elem) => {
      return elem.type.name;
    }),
    urlImg: responseAPI.data.sprites.other["official-artwork"].front_default,
    id: responseAPI.data.id,
    height: responseAPI.data.height,
    weight: responseAPI.data.weight,
    ...responseAPI.data.stats.reduce(
      //El metodo reduce me retorna un objeto: {hp: , speed: , attack:  , defense: }
      (prevValue, actualValue) => ({
        ...prevValue,
        [actualValue.stat.name]: actualValue.base_stat,
      }),
      {}
    ),
    createInDb: false,
  };
};
module.exports = { normalizeDataApi, normalizeDataDb };
