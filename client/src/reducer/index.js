import { actionTypes } from "../actions";

const initialState = {
  pokemons: [], // {id, name, type, img_url} de todos los pokemones
  pokemon: {}, //pokemon detail {id, name, type, img_url, hp, speed, ...stats, etc}
  filtered: [], //Pokemones filtrados según corresponda.
  types: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POKEMONS: {
      return { ...state, pokemons: action.payload, filtered: action.payload };
    }
    case actionTypes.GET_TYPES: {
      return { ...state, types: action.payload };
    }
    case actionTypes.GET_POKEMON_BY_ID: {
      return { ...state, pokemon: action.payload };
    }
    case actionTypes.SEARCH_POKEMON: {
      return { ...state, filtered: action.payload };
    }
    case actionTypes.FILTER_POKEMONS_BY_TYPE: {
      const type = action.payload; //types debería llegar como un string "flying"
      if (type === "all") return { ...state };
      else {
        return {
          ...state,
          filtered: state.pokemons?.filter((pokemon) => {
            return pokemon.types.includes(type);
          }),
        };
      }
    }
    case actionTypes.FILTER_POKEMONS_CREATED: {
      if (action.payload === "created") {
        return {
          ...state,
          filtered: state.pokemons?.filter((pokemon) => {
            return pokemon.createInDb === true;
          }),
        };
      } else if (action.payload === "api") {
        return {
          ...state,
          filtered: state.pokemons?.filter((pokemon) => {
            return pokemon.createInDb === false;
          }),
        };
      } else {
        return { ...state };
      }
    }
    default:
      return { ...state };
  }
}

export default rootReducer;
