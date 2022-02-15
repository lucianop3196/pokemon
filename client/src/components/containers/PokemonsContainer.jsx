//Componente que renderizará los componente Pokemon

import { useSelector } from "react-redux";
import { pokemonContainer } from "../../styles/PokemonsContainer.module.css";
import Pokemon from "../presentationals/Pokemon";
import { pokemonsNotFound, p_pokemonNotFound } from "../../styles/PageNotFound.module.css";

function PokemonsContainer({ lastItemIndex, firstItemIndex }) {
  //https://react-redux.js.org/api/hooks
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <>
      {pokemons.length !== 0 ? (
        <div className={pokemonContainer}>
          {Array.isArray(pokemons) === false ? (
            <>
              <Pokemon key={pokemons.id} props={pokemons} />
            </>
          ) : (
            pokemons?.slice(firstItemIndex, lastItemIndex).map((pokemon) => {
              return <Pokemon props={pokemon} key={pokemon.id} />;
            })
          )}
        </div>
      ) : (<>
      <p className={p_pokemonNotFound}>Pokemons not found</p>
        <div className={pokemonsNotFound}/>
         </>
      )}
    </>
  );
}

export default PokemonsContainer;
