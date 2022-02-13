//componente que recibe la función que trae el pokemon buscado
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../actions";
import { searchBox, btnSearch, inputSearch } from "../../styles/SearchBtn.module.css";

function SearchBtn() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSearchName = (e) => {
    setName(e.target.value);
  };

  const getPokemonbyName = (e) => {
    e.preventDefault();
    e.target[0].value = "";
    return dispatch(searchPokemon(name));
  };

  return (
    <div className={searchBox}>
      <form onSubmit={getPokemonbyName} name="search">
      <button className={btnSearch}><i className="fas fa-search"></i></button>
        <input
          type="text"
          name="name"
          onChange={handleSearchName}
          autoComplete="off"
          className={inputSearch}
          placeholder="Search pokemon by name"
        />

        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
}

export default SearchBtn;
