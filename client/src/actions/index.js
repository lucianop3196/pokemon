import axios from "axios";

export const actionTypes = {
  GET_POKEMONS: "GET_POKEMONS",
  SEARCH_POKEMON: "SEARCH_POKEMON",
  FILTER_POKEMONS_BY_TYPE: "FILTER_POKEMONS_BY_TYPE",
  FILTER_POKEMONS_CREATED: "FILTER_POKEMONS_CREATED",
  GET_POKEMON_BY_ID: "GET_POKEMON_BY_ID",
  GET_TYPES: "GET_TYPES",
  POST_POKEMON: "POST_POKEMON",
  SORT_POKEMONS_BY_STRENGTH: "SORT_POKEMONS_BY_STRENGTH",
  SORT_POKEMONS_ALPHABETICALLY: "SORT_POKEMONS_ALPHABETICALLY",
  SLICE_POKEMONS: "SLICE_POKEMONS",
};

export function getTypes() {
  return function (dispatch) {
    return axios("http://localhost:3001/types")
      .then((resp) => {
        return dispatch({ type: actionTypes.GET_TYPES, payload: resp.data });
      })
      .catch((e) => console.log(e));
  };
}

export function getPokemons() {
  return function (dispatch) {
    return axios("http://localhost:3001/pokemons")
      .then((response) => {
        return dispatch({
          type: actionTypes.GET_POKEMONS,
          payload: response.data,
        });
      })
      .catch((e) =>
        console.log("Ha ocurrido un error. Porfvor, intente nuevamnete " + e)
      );
  };
}

export function getPokemonById(id) {
  return function (dispatch) {
    return axios(`http://localhost:3001/pokemon/${id}`)
      .then((resp) => {
        return dispatch({
          type: actionTypes.GET_POKEMON_BY_ID,
          payload: resp.data,
        });
      })
      .catch((e) => console.log(e));
  };
}

export function searchPokemon(name) {
  return function (dispatch) {
    return axios(`http://localhost:3001/pokemons?name=${name}`)
      .then((response) => {
        return dispatch({
          type: actionTypes.SEARCH_POKEMON,
          payload: response.data,
        });
      })
      .catch((e) => console.log(e));
  };
}

export function filterPokemonByType(type) {
  return {
    type: actionTypes.FILTER_POKEMONS_BY_TYPE,
    payload: type,
  };
}

export function filterPokemonCreated(created) {
  return {
    type: actionTypes.FILTER_POKEMONS_CREATED,
    payload: created,
  };
}

// Documentación para dispachar código asincrono https://redux.js.org/tutorials/fundamentals/part-6-async-logic
export function saveNewPokemon(pokemon) {
  return function (dispatch) {
    //Chequear de que forma llega pokemon. Como un objeto?
    return axios
      .post("http://localhost:3001/pokemons", pokemon)
      .then((resp) => {
        return dispatch({ type: actionTypes.POST_POKEMON, payload: resp });
      })
      .catch((e) => console.log(e));
  };
}

export function sortPokemonsByStrength(typeOfSort) {
  //typeOfSort= ascendente o descendente
  return {
    type: actionTypes.SORT_POKEMONS_BY_STRENGTH,
    payload: typeOfSort,
  };
}

export function sortPokemonsAlphabetically(typeOfSort) {
  //typeOfSort= ascendente o descendente
  return {
    type: actionTypes.SORT_POKEMONS_ALPHABETICALLY,
    payload: typeOfSort,
  };
}
