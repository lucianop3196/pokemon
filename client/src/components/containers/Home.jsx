import { useEffect } from "react";
import NavHome from "./NavHome";
import PokemonsContainer from "./PokemonsContainer";
import { useDispatch } from "react-redux";
import { getTypes } from "../../actions/index";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, []);
  return (
    <div>
      <NavHome /> {/* Botones para filtrar...*/}
      <PokemonsContainer />
      
    </div>
  );
}

export default Home;
