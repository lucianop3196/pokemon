import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, saveNewPokemon } from "../actions";
import BackBtn from "./buttons/BackBtn";

function Create() {
  const [dataForm, setDataForm] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    urlImg: "",
  });
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const cleanTypes = dataForm.types?.reduce((prev, actual) => {
      if (!prev.includes(actual)) {
        prev.push(actual);
      }
      return prev;
    }, []);
    setDataForm((prevState) => {
      return { ...prevState, types: cleanTypes };
    });
    dispatch(saveNewPokemon(dataForm));
    console.log(dataForm);
    setDataForm({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
      urlImg: "",
    });
  };

  const handleInput = (e) => {
    setDataForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    console.log(dataForm);
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setDataForm((prevState) => {
        return {
          ...prevState,
          types: [...prevState.types, e.target.value],
        };
      });
    }
    if (!e.target.checked) {
      dataForm.types.splice(dataForm.types.indexOf(e.target.value), 1);
      setDataForm((prevState) => {
        return { ...prevState };
      });
    }
  };

  return (
    <div>
      <BackBtn />
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleInput}
          type="text"
          id="name"
          name="name"
          required
          value={dataForm.name}
        />

        <label htmlFor="urlImg">URL Image:</label>
        <input
          onChange={handleInput}
          type="url"
          id="urlImg"
          name="urlImg"
          value={dataForm.urlImg}
        />

        <label htmlFor="height">Height:</label>
        <input
          onChange={handleInput}
          type="number"
          id="height"
          name="height"
          value={dataForm.height}
        />

        <label htmlFor="weight">Weight:</label>
        <input
          onChange={handleInput}
          type="number"
          id="weight"
          name="weight"
          value={dataForm.weight}
        />

        <label htmlFor="hp">HP:</label>
        <input
          onChange={handleInput}
          type="number"
          id="hp"
          name="hp"
          value={dataForm.hp}
        />

        <label htmlFor="attack">Attack:</label>
        <input
          onChange={handleInput}
          type="number"
          id="attack"
          name="attack"
          value={dataForm.attack}
        />

        <label htmlFor="defense">Defense:</label>
        <input
          onChange={handleInput}
          type="number"
          id="defense"
          name="defense"
          value={dataForm.defense}
        />

        <label htmlFor="speed">Speed:</label>
        <input
          onChange={handleInput}
          type="number"
          id="speed"
          name="speed"
          value={dataForm.speed}
        />

        {types?.map((type) => {
          return (
            <label key={type.id}>
              <input
                type="checkbox"
                name="types"
                value={type.name}
                onChange={(e) => handleCheckbox(e)}
              />
              {type.name}
            </label>
          );
        })}

        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

export default Create;
