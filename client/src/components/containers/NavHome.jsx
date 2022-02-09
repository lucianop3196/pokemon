//Componente que renderizara todos los botones de filtrado y busqueda
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../actions";
import SearchButton from "../buttons/SearchButton";

function NavHome() {
  const dispatch = useDispatch();

  //Llamada a la api por name
  const getPokemonbyName = (name) => {
    return dispatch(searchPokemon(name));
  };

  return (
    <div>
      <ul>
        <li>
          <SearchButton getPokemonbyName={getPokemonbyName} />
        </li>
      </ul>
    </div>
  );
}

export default NavHome;
