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
  CLEAR_POKEMONS: "CLEAR_POKEMONS",
  LOADER_TRUE: "LOADER_TRUE",
  LOADER_FALSE: "LOADER_FALSE",
};

export function getTypes() {
  return function (dispatch) {
    return axios("http://localhost:3001/types")
      .then((resp) => {
        return dispatch({ type: actionTypes.GET_TYPES, payload: resp.data });
      })
      .catch((e) => {
        console.log(e);
        return alert(
          "Ha ocurrido un error, por favor, ingrese al sitio web nuevamente"
        );
      });
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
      .catch((e) => {
        console.log(e);
        return alert("Ha ocurrido un error, intente ingresar nuevamente");
      });
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
      .catch((e) => {
        console.log(e);
        return alert("Hubo un error, intentelo nuevamente");
      });
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
      .catch((e) => {
        console.log(e);
        return alert("No se encontró el Pokemon");
      });
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
        alert("Se creó el Pokemon correctamente");
        return dispatch({ type: actionTypes.POST_POKEMON, payload: resp });
      })
      .catch((e) => {
        console.log(e);
        return alert(
          "El pokemon no se ha creado correctamente, por favor ingrese los datos nuevamente"
        );
      });
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

export function clearPokemons() {
  return {
    type: actionTypes.CLEAR_POKEMONS,
  };
}

export function setLoaderTrue() {
  return {
    type: actionTypes.LOADER_TRUE,
  };
}

export function setLoaderFalse() {
  return {
    type: actionTypes.LOADER_FALSE,
  };
}
