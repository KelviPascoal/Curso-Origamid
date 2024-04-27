
export async function GithubUsers() {
    const response = await fetch('https://api.github.com/users')
    const users = await response.json()
    return (
        <ul>
            {users && users.map((user) => <li key={user.login}>{user.login}</li>)}
        </ul>
    );
}
