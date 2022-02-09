//Componente que renderizara todos los botones de filtrado y busqueda
import SearchButton from "../buttons/SearchButton";
import Sort from "../buttons/Sort";
import { useSelector } from "react-redux";
import Filters from "../buttons/Filters";

function NavHome({ handleSortAlph, handleSortStrength, handleTypeFilter }) {
  const pokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);

  return (
    <div>
      <ul>
        <li>
          <SearchButton />
          <Sort
            handleSort={handleSortAlph}
            sortDescription="Orden alfabético"
          />
        </li>
        <li>
          <Sort
            handleSort={handleSortStrength}
            sortDescription="Orden por fuerza"
          />
        </li>
        <li>
          <Filters
            types={types}
            defaultDescription="Filtrar por tipo"
            handleFilter={handleTypeFilter}
          />
        </li>
        {/* <li>
          <Filters
            types={pokemons}
            defaultDescription="Origen"
            handleFilter={handleFilter}
          />
        </li> */}
      </ul>
    </div>
  );
}

export default NavHome;
