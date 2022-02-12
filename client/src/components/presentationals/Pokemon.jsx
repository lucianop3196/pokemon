function Pokemon(props) {
  const { name, types, urlImg, id } = props.props;
  return (
    <>
      <img src={urlImg} alt="Pokemons" />
      <div>{id}</div>
      <div>{name} </div>
      <div>{types?.map((type) => `${type} `)} </div>
    </>
  );
}

export default Pokemon;
