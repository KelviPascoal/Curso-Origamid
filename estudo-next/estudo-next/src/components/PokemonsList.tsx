
export async function Pokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const { results } = await response.json()
    return (
        <ul>
            {results && results.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)}
        </ul>
    );
}
