export default async function Home() {
    const { data: { results } } = await fetch<any>('https://pokeapi.co/api/v2/pokemon');

    return (
        <div>
            <ul>
                <li>aaaaaaa</li>
            </ul>

        </div>
    );
}
