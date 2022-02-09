//Componente que renderizara todos los botones de filtrado y busqueda
import SearchButton from "../buttons/SearchButton";
import Sort from "../buttons/Sort";
import { useSelector } from "react-redux";
import Filters from "../buttons/Filters";

function NavHome({
  handleSortAlph,
  handleSortStrength,
  handleTypeFilter,
  handleSourceFilter,
}) {
  const pokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);

  const sourceOptions = [
    { name: "api", id: 1 },
    { name: "created", id: 2 },
  ];

  return (
    <div>
      <ul>
        <li>
          <SearchButton />
          <Sort
            handleSort={handleSortAlph}
            sortDescription="Sort alphabetically"
          />
        </li>
        <li>
          <Sort
            handleSort={handleSortStrength}
            sortDescription="Sort by strength"
          />
        </li>
        <li>
          <Filters
            items={types}
            defaultDescription="Filter by type"
            handleFilter={handleTypeFilter}
          />
        </li>
        <li>
          <Filters
            items={sourceOptions}
            defaultDescription="Filter by source"
            handleFilter={handleSourceFilter}
          />
        </li>
      </ul>
    </div>
  );
}

export default NavHome;
