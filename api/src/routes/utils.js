// Función para normalizar la info que llega de las consultas a la db
normalizeDataDb = (pokemonDb) => {
  const typesNormalized = pokemonDb.dataValues.types?.map(
    (type) => type.name.charAt(0).toUpperCase() + type.name.slice(1)
  );

  return {
    name: pokemonDb.name.charAt(0).toUpperCase() + pokemonDb.name.slice(1),
    types: typesNormalized,
    urlImg: pokemonDb.urlImg,
    id: pokemonDb.id,
    height: pokemonDb.height,
    weight: pokemonDb.weight,
    hp: pokemonDb.hp,
    attack: pokemonDb.attack,
    defense: pokemonDb.defense,
    speed: pokemonDb.speed,
    createInDb: pokemonDb.createInDb,
  };
};

//Función para normalizar la respuesta que llega de la api
normalizeDataApi = (responseAPI) => {
  return {
    name:
      responseAPI.data.name.charAt(0).toUpperCase() +
      responseAPI.data.name.slice(1),
    types: responseAPI.data.types?.map((elem) => {
      return elem.type.name.charAt(0).toUpperCase() + elem.type.name.slice(1);
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

normalizeDataTypes = (types) => {
  return types?.map((type) => {
    return {
      ...type.dataValues,
      name: type.dataValues.name.charAt(0).toUpperCase() + type.name.slice(1),
    };
  });
};

module.exports = { normalizeDataApi, normalizeDataDb, normalizeDataTypes };
