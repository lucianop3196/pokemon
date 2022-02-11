//Componente que renderizará los componente Pokemon

import { useSelector } from "react-redux";
import Refresh from "../buttons/Refresh";
import { Link } from "react-router-dom";

import Pokemon from "../presentationals/Pokemon";

function PokemonsContainer({ lastItemIndex, firstItemIndex, handleRefresh }) {
  //https://react-redux.js.org/api/hooks
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div>
      <div>
        <Refresh handleRefresh={handleRefresh} />
      </div>
      <div>
        {Array.isArray(pokemons) === false ? (
          <>
            <Pokemon key={pokemons.id} props={pokemons} />
          </>
        ) : (
          pokemons?.slice(firstItemIndex, lastItemIndex).map((pokemon) => {
            return (
              <Link to={`/detail/${pokemon.id}`} key={pokemon.id}>
                <Pokemon props={pokemon} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default PokemonsContainer;
