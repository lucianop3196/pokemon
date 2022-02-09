//Componente que renderizara todos los botones de filtrado y busqueda
import SearchButton from "../buttons/SearchButton";

function NavHome() {
  return (
    <div>
      <ul>
        <li>
          <SearchButton />
        </li>
      </ul>
    </div>
  );
}

export default NavHome;
