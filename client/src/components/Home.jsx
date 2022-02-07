import NavHome from "./NavHome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../actions";

function Home() {
  //https://react-redux.js.org/api/hooks
  const dispatch = useDispatch();
  // const pokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  });
  return (
    <div>
      <NavHome />
      Soy home
    </div>
  );
}

export default Home;
