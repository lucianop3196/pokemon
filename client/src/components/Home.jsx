import NavHome from "./NavHome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../actions";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  });
  return (
    <div>
      <NavHome />
      Soy home
    </div>
  );
}

export default Home;
