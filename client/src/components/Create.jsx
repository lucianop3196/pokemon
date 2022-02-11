import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearPokemons, getTypes, saveNewPokemon } from "../actions";
import BackBtn from "./buttons/BackBtn";
import validateForm from "../utils/validateForm";

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
  const [error, setError] = useState({}); //Estado local para validar el formulario
  const [disabled, setDisabled] = useState(true); //Habilitador del botón submit cuando no haya ningun error en el formulario

  let navigate = useNavigate();
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
    dispatch(clearPokemons());
  }, []);

  useEffect(() => {
    if (
      dataForm.name.length > 0 &&
      dataForm.types.length < 3 &&
      !error.hasOwnProperty("img") &&
      !error.hasOwnProperty("hp") &&
      !error.hasOwnProperty("attack") &&
      !error.hasOwnProperty("defense") &&
      !error.hasOwnProperty("speed") &&
      !error.hasOwnProperty("height") &&
      !error.hasOwnProperty("weight")
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [error, dataForm, disabled]);

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
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  const handleInput = (e) => {
    setError(validateForm({ ...dataForm, [e.target.name]: e.target.value }));
    setDataForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value.trim() };
    });
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
        {error.name && <p>{error.name}</p>}

        <label htmlFor="urlImg">URL Image:</label>
        <input
          onChange={handleInput}
          type="url"
          id="urlImg"
          name="urlImg"
          value={dataForm.urlImg}
        />
        {error.urlImg && <p>{error.urlImg}</p>}

        <label htmlFor="height">Height:</label>
        <input
          onChange={handleInput}
          type="number"
          id="height"
          name="height"
          value={dataForm.height}
        />
        {error.height && <p>{error.height}</p>}

        <label htmlFor="weight">Weight:</label>
        <input
          onChange={handleInput}
          type="number"
          id="weight"
          name="weight"
          value={dataForm.weight}
        />
        {error.weight && <p>{error.weight}</p>}

        <label htmlFor="hp">HP:</label>
        <input
          onChange={handleInput}
          type="number"
          id="hp"
          name="hp"
          value={dataForm.hp}
        />
        {error.hp && <p>{error.hp}</p>}

        <label htmlFor="attack">Attack:</label>
        <input
          onChange={handleInput}
          type="number"
          id="attack"
          name="attack"
          value={dataForm.attack}
        />
        {error.attack && <p>{error.attack}</p>}

        <label htmlFor="defense">Defense:</label>
        <input
          onChange={handleInput}
          type="number"
          id="defense"
          name="defense"
          value={dataForm.defense}
        />
        {error.defense && <p>{error.defense}</p>}

        <label htmlFor="speed">Speed:</label>
        <input
          onChange={handleInput}
          type="number"
          id="speed"
          name="speed"
          value={dataForm.speed}
        />
        {error.speed && <p>{error.speed}</p>}

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
        {dataForm.types.length > 2 && <p>Choose only two types</p>}

        <input type="submit" value="Create" disabled={disabled} />
      </form>
    </div>
  );
}

export default Create;
