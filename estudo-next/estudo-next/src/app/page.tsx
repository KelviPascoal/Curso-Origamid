import { GithubUsers } from "@/components/GithubUsers";
import { Pokemons } from "@/components/PokemonsList";

export default async function Home() {
  // const [pokemonResponse, usersResponse] = await Promise.all([
  //   fetch('https://pokeapi.co/api/v2/pokemon'), fetch('https://api.github.com/users')
  // ])



  return (
    <div>
      <Pokemons />
      ___________________________________________________________________
      <GithubUsers />

      {/* <ul>
        {results && results.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul>
      _____________________________________________________________________
      <ul>
        {users && users.map((user) => <li key={user.login}>{user.login}</li>)}
      </ul> */}
    </div>
  );
}
