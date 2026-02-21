function PokemonCard({ pokemon, onClick }) {
  return (
    <div 
      className="card" 
      onClick={onClick} 
      style={{ cursor: "pointer" }} // shows hand cursor
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <h2>{pokemon.name.toUpperCase()}</h2>
      <p>ID: {pokemon.id}</p>
      <div className="types">
        {pokemon. types.map((typeInfo)=> 
        (
          <span 
          key= {typeInfo.type.name}>
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;