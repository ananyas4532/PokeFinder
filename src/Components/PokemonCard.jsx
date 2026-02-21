function PokemonCard({ pokemon }) {
  return (
    <div className="card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <h2>{pokemon.name.toUpperCase()}</h2>
      <p>ID: {pokemon.id}</p>

     
    </div>
  );
}

export default PokemonCard;