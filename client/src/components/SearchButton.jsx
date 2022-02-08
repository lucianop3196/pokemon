import { useState } from "react";

function SearchButton({ getPokemonbyName }) {
  const [name, setName] = useState("");

  const handleSeachName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="search" name="searchName" onChange={handleSeachName} />
      <button
        onClick={() => {
          getPokemonbyName(name);
        }}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchButton;
