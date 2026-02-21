function PokemonModal({ pokemon, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          X
        </button>

        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="modal-img"
        />

        <h2>{pokemon.name.toUpperCase()}</h2>
        <p>ID: {pokemon.id}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>

        <div>
          {pokemon.types.map((typeInfo) => (
            <span key={typeInfo.type.name}>
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonModal;