//Componente que renderizara todos los botones de filtrado y busqueda
import SearchButton from "../buttons/SearchButton";
import Sort from "../buttons/Sort";

function NavHome({ handleSortAlph, handleSortStrength }) {
  return (
    <div>
      <ul>
        <li>
          <SearchButton />
          <Sort
            handleSort={handleSortAlph}
            sortDescription="Orden alfabético"
          />
          <Sort
            handleSort={handleSortStrength}
            sortDescription="Orden por fuerza"
          />
        </li>
      </ul>
    </div>
  );
}

export default NavHome;
