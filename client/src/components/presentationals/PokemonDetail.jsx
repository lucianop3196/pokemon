import React from "react";

const PokemonDetail = ({ pokemonDetail }) => {
  const {
    name,
    id,
    types,
    urlImg,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  } = pokemonDetail;
  return (
    <div>
      <img src={urlImg} alt="Pokemon" />
      <p>{id}</p>
      <p>{name}</p>
      <p>{types}</p>
      <p>{hp}</p>
      <p>{attack}</p>
      <p>{defense}</p>
      <p>{speed}</p>
      <p>{height}</p>
      <p>{weight}</p>
    </div>
  );
};

export default PokemonDetail;
