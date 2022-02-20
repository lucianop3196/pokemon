//Componente que renderizará los componente Pokemon

import { useSelector, useDispatch } from "react-redux";
import { pokemonContainer } from "../../styles/PokemonsContainer.module.css";
import Pokemon from "../presentationals/Pokemon";
import {
  pokemonsNotFound,
  p_pokemonNotFound,
} from "../../styles/PageNotFound.module.css";
import { clearPokemons, deletePokemon, getPokemons } from "../../actions";

function PokemonsContainer({ lastItemIndex, firstItemIndex }) {
  //https://react-redux.js.org/api/hooks
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePokemon(id));
    dispatch(clearPokemons());
    dispatch(getPokemons());
  };

  return (
    <>
      {pokemons.length !== 0 ? (
        <div className={pokemonContainer}>
          {Array.isArray(pokemons) === false ? (
            <>
              <Pokemon
                key={pokemons.id}
                pokemons={pokemons}
                handleDelete={handleDelete}
              />
            </>
          ) : (
            pokemons?.slice(firstItemIndex, lastItemIndex).map((pokemon) => {
              return (
                <Pokemon
                  pokemons={pokemon}
                  handleDelete={handleDelete}
                  key={pokemon.id}
                />
              );
            })
          )}
        </div>
      ) : (
        <>
          <p className={p_pokemonNotFound}>Pokemons not found</p>
          <div className={pokemonsNotFound} />
        </>
      )}
    </>
  );
}

export default PokemonsContainer;
