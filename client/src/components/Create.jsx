import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearPokemons, getTypes, saveNewPokemon } from "../actions";
import BackBtn from "./buttons/BackBtn";
import validateForm from "../utils/validateForm";
import styles from "../styles/Form.module.css";

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
  }, [dispatch]);

  useEffect(() => {
    //useEffect para habilitar o deshabilitar el boton create, cuando se cumplan ciertas condiciones
    if (
      dataForm.name.length > 0 &&
      dataForm.name.length <= 10 &&
      dataForm.types.length < 3 &&
      !error.hasOwnProperty("urlImg") &&
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
    if (dataForm.urlImg.length === 0) {
      dataForm.urlImg =
        "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg";
    }

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
    alert("Pokemon creado correctamente")
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
    <div className={styles.formContainer}>
      <BackBtn />
      <h2>Create your own Pokemon!!</h2>
      <form onSubmit={handleOnSubmit} className={styles.creationForm}>
        <div className={styles.creationFormGrid}>
          <div className={styles.question}>
            <input
              className={styles.input_form}
              onChange={handleInput}
              type="text"
              id="name"
              name="name"
              required
              autoComplete="off"
              value={dataForm.name}
            />
            <label htmlFor="name">Name:</label>
            {error.name && <p>{error.name}</p>}
          </div>
          <div className={styles.question}>
            <input
              className={styles.input_form}
              onChange={handleInput}
              type="url"
              id="urlImg"
              name="urlImg"
              autoComplete="off"
              value={dataForm.urlImg}
            />
            <label htmlFor="urlImg">URL Image:</label>
            {error.urlImg && <p>{error.urlImg}</p>}
          </div>
          <div className={styles.question}>
            <input
              className={styles.input_form}
              onChange={handleInput}
              type="number"
              id="height"
              name="height"
              autoComplete="off"
              value={dataForm.height}
            />
            <label htmlFor="height">Height:</label>
            {error.height && <p>{error.height}</p>}
          </div>
          <div className={styles.question}>
            <input
              className={styles.input_form}
              onChange={handleInput}
              type="number"
              id="weight"
              name="weight"
              autoComplete="off"
              value={dataForm.weight}
            />
            <label htmlFor="weight">Weight:</label>
            {error.weight && <p>{error.weight}</p>}
          </div>
          <div className={styles.question}>
            <input
              className={styles.input_form}
              onChange={handleInput}
              type="number"
              id="hp"
              name="hp"
              autoComplete="off"
              value={dataForm.hp}
            />
            <label htmlFor="hp">HP:</label>
            {error.hp && <p>{error.hp}</p>}
          </div>
          <div className={styles.question}>
            <input
              className={styles.input_form}
              onChange={handleInput}
              type="number"
              id="attack"
              name="attack"
              autoComplete="off"
              value={dataForm.attack}
            />
            <label htmlFor="attack">Attack:</label>
            {error.attack && <p>{error.attack}</p>}
          </div>
          <div className={styles.question}>
            <input
              className={styles.input_form}
              onChange={handleInput}
              type="number"
              id="defense"
              name="defense"
              autoComplete="off"
              value={dataForm.defense}
            />
            <label htmlFor="defense">Defense:</label>
            {error.defense && <p>{error.defense}</p>}
          </div>
          <div className={styles.question}>
            <input
              className={styles.input_form}
              onChange={handleInput}
              type="number"
              id="speed"
              name="speed"
              autoComplete="off"
              value={dataForm.speed}
            />
            <label htmlFor="speed">Speed:</label>
            {error.speed && <p>{error.speed}</p>}
          </div>
        </div>
        <div className={styles.typesContainer}>
          {types?.map((type) => {
            return (
              <div className={styles.checkboxContainer} key={type.id}>
                <input
                  className={`${styles.inputCheckbox} ${styles[type.name]}`}
                  type="checkbox"
                  name="types"
                  value={type.name}
                  onChange={(e) => handleCheckbox(e)}
                />
                <label>{type.name}</label>
              </div>
            );
          })}
        </div>
        {dataForm.types.length > 2 && <p>Choose only two types</p>}
        <input
          type="submit"
          value="Create"
          disabled={disabled}
          className={`${styles.form_button} ${disabled || styles.is_valid}`}
        />
      </form>
    </div>
  );
}

export default Create;
