//Componente que renderizará los componente Pokemon

import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions";
import Refresh from "../buttons/Refresh";

import Pokemon from "../presentationals/Pokemon";

function PokemonsContainer({ lastItemIndex, firstItemIndex, handleRefresh }) {
  //https://react-redux.js.org/api/hooks
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  // //Función para el boton refresh.
  // const handleRefresh = () => {
  //   dispatch(getPokemons());
  // };

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
            return <Pokemon key={pokemon.id} props={pokemon} />;
          })
        )}
      </div>
    </div>
  );
}

export default PokemonsContainer;
