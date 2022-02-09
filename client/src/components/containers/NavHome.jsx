//Componente que renderizara todos los botones de filtrado y busqueda
import Filter from "../buttons/Filter";
import SearchButton from "../buttons/SearchButton";

function NavHome({handleSortAlph}) {
  return (
    <div>
      <ul>
        <li>
          <SearchButton />
          <Filter handleSortAlph={handleSortAlph}/>
        </li>
      </ul>
    </div>
  );
}

export default NavHome;
