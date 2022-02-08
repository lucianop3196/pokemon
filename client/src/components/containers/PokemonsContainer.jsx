//Componente que renderizará los componente Pokemon
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, slicePokemons } from "../../actions";
import Pagination from "../Pagination";
import Pokemon from "../presentationals/Pokemon";

function PokemonsContainer() {
  //https://react-redux.js.org/api/hooks
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handlePagination = (firstIndex, lastIndex) => {
    return dispatch(slicePokemons(firstIndex, lastIndex));
  };

  return (
    <div>
      <div>
        {pokemons.length > 0 ? (
          <Pagination
            items={allPokemons}
            quantityXPage={12}
            handlePagination={handlePagination}
          />
        ) : null}
      </div>
      <div>
        {pokemons?.map((pokemon) => {
          return <Pokemon key={pokemon.id} props={pokemon} />;
        })}
      </div>
    </div>
  );
}

export default PokemonsContainer;
