import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../actions";
import Pokemon from "../presentationals/Pokemon";
import PokemonDetail from "../presentationals/PokemonDetail";

function DetailContainer() {
  const pokemon = useSelector((state) => state.pokemon);
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(getPokemonById(id));
  }, []);

  return (
    <div>
      <PokemonDetail pokemonDetail={pokemon}/>
    </div>
  );
}

export default DetailContainer;
