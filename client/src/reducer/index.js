import { actionTypes } from "../actions";

const initialState = {
  pokemons: [], // {id, name, type, img_url} de todos los pokemones, se ira modificando con los filtrados y sorts
  pokemon: {}, //pokemon detail {id, name, type, img_url, hp, speed, ...stats, etc}
  allPokemons: [], //Siempre cuenta con todos los pokemones
  filtered: [], //Pokemones filtrados según corresponda.
  types: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POKEMONS: {
      return {
        ...state,
        allPokemons: action.payload,
        pokemons: action.payload,
      };
    }

    case actionTypes.GET_TYPES: {
      return { ...state, types: action.payload };
    }

    case actionTypes.GET_POKEMON_BY_ID: {
      return { ...state, pokemon: action.payload };
    }

    case actionTypes.SEARCH_POKEMON: {
      return { ...state, pokemons: action.payload };
    }

    case actionTypes.FILTER_POKEMONS_BY_TYPE: {
      const type = action.payload; //types debería llegar como un string "flying"
      if (type === "all") return { ...state };
      else {
        return {
          ...state,
          pokemons: state.allPokemons?.filter((pokemon) => {
            return pokemon.types.includes(type);
          }),
        };
      }
    }

    case actionTypes.FILTER_POKEMONS_CREATED: {
      if (action.payload === "created") {
        return {
          ...state,
          pokemons: state.allPokemons?.filter((pokemon) => {
            return pokemon.createInDb === true;
          }),
        };
      } else if (action.payload === "api") {
        return {
          ...state,
          pokemons: state.allPokemons?.filter((pokemon) => {
            return pokemon.createInDb === false;
          }),
        };
      } else {
        return { ...state };
      }
    }

    case actionTypes.POST_POKEMON: {
      return {
        ...state,
        pokemons: state.pokemons.push(action.payload),
        allPokemons: state.allPokemons.push(action.payload),
      };
    }

    case actionTypes.SORT_POKEMONS_BY_STRENGTH: {
      if (action.payload === "asc") {
        return {
          ...state,
          pokemons: state.allPokemons?.slice().sort((a, b) => {
            return b.attack - a.attack;
          }),
        };
      } else if (action.payload === "desc") {
        return {
          ...state,
          pokemons: state.allPokemons?.slice().sort((a, b) => {
            return a.attack - b.attack;
          }),
        };
      } else {
        return { ...state, pokemons: state.allPokemons  };
      }
    }

    case actionTypes.SORT_POKEMONS_ALPHABETICALLY: {
      if (action.payload === "asc") {
        return {
          ...state,
          pokemons: state.allPokemons?.slice().sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          }),
        };
      } else if (action.payload === "desc") {
        return {
          ...state,
          pokemons: state.allPokemons?.slice().sort((a, b) => {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
          }),
        };
      }
      else{
        return {...state, pokemons: state.allPokemons}
      }
    }

    default:
      return { ...state };
  }
}

export default rootReducer;
