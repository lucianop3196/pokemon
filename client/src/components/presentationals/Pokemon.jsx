import { Link } from "react-router-dom";
import style, {
  card,
  cover,
  img__back,
  description,
  idPokemon,
  typesContainer,
} from "../../styles/Pokemon.module.css";

function Pokemon(props) {
  const { name, types, urlImg, id, createInDb } = props.props;
  return (
    <div className={card}>
      <div className={cover}>
        <img src={urlImg} alt="Pokemons" />
        <div className={img__back}></div>
      </div>
      <div className={description}>
        <h2>{name} </h2>
        {createInDb ? (
          <div className={idPokemon}>#{id.slice(0, 5)}</div>
        ) : (
          <div className={idPokemon}>#{id}</div>
        )}
        <div className={typesContainer}>
          {types?.map((type, i) => (
            <p className={style[type.toLowerCase()]} key={i}>
              {type}
            </p>
          ))}
        </div>
        <Link to={`/detail/${id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Pokemon;
