export var api = {
    getBio(username) {
        username = username.toLowerCase().trim();
        var url = `https://api.github.com/users/${username}`;
        return fetch(url).then(res => res.json())
    },
    getRepo(username) {
        var url = `https://api.github.com/users/${username.toLowerCase().trim()}/repos`;
        fetch(url).then(res => res.json()).catch(err)
    }
}