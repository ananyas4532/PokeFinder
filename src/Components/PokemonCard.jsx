function PokemonCard({pokemon}) {
return(
    <div className="card">
        <img src={pokemon.sprites.font_default}
        alt={pokemon.name}/>

        <h2>{pokemon.name.toUpperCase()}</h2>
        <p>ID: {pokemon.id}</p>
        <div className="types">
            {pokemon.types.map((typeInfo)=> (
                <span 
                key={typeInfo.type.name}>
                    {typeInfo.type.name}
                </span>
            ))}
        </div>
    </div>
)
}
export default PokemonCard;




