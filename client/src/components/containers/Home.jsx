import { useEffect, useState } from "react";
import NavHome from "./NavHome";
import PokemonsContainer from "./PokemonsContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes,
  sortPokemonsAlphabetically,
} from "../../actions/index";
import Pagination, { objIndexPagination } from "../Pagination";

function Home() {
  //Hooks para manejar el estado local y el renderizado de mi componente
  const [order, setOrder] = useState(""); // Hook para manejar el ordenamiento
  const [currentPage, setCurrentPage] = useState(1); // Hook para manejar el paginado

  const allPokemons = useSelector((state) => state.allPokemons);
  const quantityXPage = 12;
  const dispatch = useDispatch();

  //Funcion de ordenamiento alfabetico
  const handleSortAlph = (e) => {
    dispatch(sortPokemonsAlphabetically(e));
    setOrder(e);
    setCurrentPage(1);
  };

  //Llamado a la API para obtener types y pokemons
  useEffect(() => {
    dispatch(getTypes());
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

  //Función para el boton refresh. Setea la pagina en 1
  const handleRefresh = () => {
    dispatch(getPokemons());
    setCurrentPage(1);
  };

  return (
    <div>
      <NavHome handleSortAlph={handleSortAlph} />

      {allPokemons ? (
        <Pagination
          items={allPokemons}
          quantityXPage={quantityXPage}
          handlePagination={handlePagination}
        />
      ) : null}

      <PokemonsContainer
        handleRefresh={handleRefresh}
        lastItemIndex={lastItemIndex}
        firstItemIndex={firstItemIndex}
      />
    </div>
  );
}

export default Home;
