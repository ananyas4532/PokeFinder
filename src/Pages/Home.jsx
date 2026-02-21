import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";

function Home() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSeletedPokemon]= useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            const res = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=50"
            );
            const data = await res.json();

            const detailedData = await Promise.all(
                data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    return response.json();
                })
            );

            setPokemonList(detailedData);
        }

        fetchPokemon();
    }, []);

    return (
        <div className="container">
            {pokemonList.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    onClick = {()=> setSeletedPokemon(pokemon)}
                />
            ))}
            {selectedPokemon && (
                <PokemonModal
                pokemon={setSeletedPokemon}
                onClose={()=>
                    setSelectedPokemon(null)}/>
                
            )}
        </div>
    );
}

export default Home;