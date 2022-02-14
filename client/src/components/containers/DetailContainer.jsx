import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clearPokemons, getPokemonById } from "../../actions";
import PokemonDetail from "../presentationals/PokemonDetail";
import BackBtn from "../buttons/BackBtn";
import spinner from "../../assets/spinner2.gif";
import { btnMargin } from "../../styles/Buttons.module.css";
import { spinnerStyle, spinnerContainer } from "../../styles/Home.module.css";

function DetailContainer() {
  const pokemon = useSelector((state) => state.pokemon);
  let { id } = useParams();
  const dispatch = useDispatch();
  const spinnerLoader = useSelector((state) => state.spinnerLoader);

  useEffect(() => {
    dispatch(clearPokemons()); //El clearPokemons establece en su reducers un loader: true
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className={btnMargin}>
        <BackBtn />
      </div>

      {spinnerLoader ? (
        <div className={spinnerContainer}>
          {" "}
          <img src={spinner} alt="...loading" className={spinnerStyle} />
        </div>
      ) : (
        <PokemonDetail pokemonDetail={pokemon} />
      )}
    </div>
  );
}

export default DetailContainer;
