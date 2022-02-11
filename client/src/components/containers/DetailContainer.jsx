import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clearPokemons, getPokemonById } from "../../actions";
import PokemonDetail from "../presentationals/PokemonDetail";
import BackBtn from "../buttons/BackBtn";

function DetailContainer() {
  const pokemon = useSelector((state) => state.pokemon);
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearPokemons());
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  return (
    <div>
      <BackBtn />
      <PokemonDetail pokemonDetail={pokemon} />
    </div>
  );
}

export default DetailContainer;
