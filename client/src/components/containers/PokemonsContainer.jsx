//Componente que renderizará los componente Pokemon
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions";
import Pagination, { objIndex } from "../Pagination";
import Pokemon from "../presentationals/Pokemon";

function PokemonsContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  //https://react-redux.js.org/api/hooks
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const allPokemons = useSelector((state) => state.allPokemons);
  const quantityXPage = 12;

  useEffect(() => {
    dispatch(getPokemons());
        // dispatch(slicePokemons(firstItemIndex, lastItemIndex));

  }, []);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const { lastItemIndex, firstItemIndex } = objIndex(
    currentPage,
    quantityXPage
  );


  return (
    <div>
      <div>
        {pokemons.length > 0 ? (
          <Pagination
            items={allPokemons}
            quantityXPage={quantityXPage}
            handlePagination={handlePagination}
          />
        ) : null}
      </div>
      <div>
        {pokemons?.slice(firstItemIndex,lastItemIndex).map((pokemon) => {
          return <Pokemon key={pokemon.id} props={pokemon} />;
        })}
      </div>
    </div>
  );
}

export default PokemonsContainer;
