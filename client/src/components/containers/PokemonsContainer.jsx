//Componente que renderizará los componente Pokemon

import { useSelector } from "react-redux";
import Refresh from "../buttons/Refresh";
import { pokemonContainer } from "../../styles/PokemonsContainer.module.css";
import Pokemon from "../presentationals/Pokemon";

function PokemonsContainer({ lastItemIndex, firstItemIndex, handleRefresh }) {
  //https://react-redux.js.org/api/hooks
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <>
      <div>
        <Refresh handleRefresh={handleRefresh} />
      </div>

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
