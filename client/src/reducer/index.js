const initialState = {
  pokemons: [], // {id, name, type, img_url} de todos los pokemones
  pokemon: {}, //pokemon detail {id, name, type, img_url, hp, speed, ...stats, etc}
  filtered: [], //Pokemones filtrados según corresponda.
};

function rootReducer(state = initialState, action) {}

export default rootReducer;
