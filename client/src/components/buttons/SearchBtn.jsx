//componente que recibe la función que trae el pokemon buscado
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../actions";

function SearchBtn() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSearchName = (e) => {
    setName(e.target.value);
  };

  const getPokemonbyName = (e) => {
    e.preventDefault();
    e.target[0].value = ""
    return dispatch(searchPokemon(name));
  };

  return (
    <div>
      <form onSubmit={getPokemonbyName}>
        <input type="search" name="name" onChange={handleSearchName} />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default SearchBtn;
