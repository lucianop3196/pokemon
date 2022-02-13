//Componente que renderizará los componente Pokemon

import { useSelector } from "react-redux";
import { pokemonContainer } from "../../styles/PokemonsContainer.module.css";
import Pokemon from "../presentationals/Pokemon";

function PokemonsContainer({ lastItemIndex, firstItemIndex }) {
  //https://react-redux.js.org/api/hooks
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <>
      <div className={pokemonContainer}>
        {Array.isArray(pokemons) === false ? (
          <>
            <Pokemon key={pokemons.id} props={pokemons} />
          </>
        ) : (
          pokemons?.slice(firstItemIndex, lastItemIndex).map((pokemon) => {
            return (
                <Pokemon props={pokemon} key={pokemon.id}/>
            );
          })
        )}
      </div>
    </>
  );
}

export default PokemonsContainer;
