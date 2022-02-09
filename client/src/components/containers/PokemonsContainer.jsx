//Componente que renderizará los componente Pokemon
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions";
import Refresh from "../buttons/Refresh";
import Pagination, { objIndexPagination } from "../Pagination";
import Pokemon from "../presentationals/Pokemon";

function PokemonsContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  //https://react-redux.js.org/api/hooks
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const allPokemons = useSelector((state) => state.allPokemons);
  const quantityXPage = 12;

  useEffect(() => {
    //llamado a la API, se traen los pokemones
    dispatch(getPokemons());
  }, []);

  //Paginado
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const { lastItemIndex, firstItemIndex } = objIndexPagination(
    currentPage,
    quantityXPage
  );

  //Función para el boton refresh.
  const handleRefresh = () => {
    dispatch(getPokemons());
  };

  return (
    <div>
      <div>
        <Refresh handleRefresh={handleRefresh} />
      </div>
      <div>
        {allPokemons ? (
          <Pagination
            items={allPokemons}
            quantityXPage={quantityXPage}
            handlePagination={handlePagination}
          />
        ) : null}
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
