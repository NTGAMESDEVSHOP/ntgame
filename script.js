document.addEventListener('DOMContentLoaded', () => {
    const loginStatusElement = document.getElementById('login-status');

    // Check if user is logged in
    fetch('/callback') // Adjust the endpoint if necessary
        .then(response => response.json())
        .then(data => {
            if (data && data.id) {
                loginStatusElement.innerHTML = `
                    <img src="${data.avatar ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png` : 'https://cdn.discordapp.com/embed/avatars/0.png'}" alt="Profile Picture" style="width: 40px; height: 40px; border-radius: 50%;">
                    <span>${data.username}</span>
                `;
            } else {
                loginStatusElement.innerHTML = '<a href="https://discord.com/api/oauth2/authorize?client_id=1175760765513375785&redirect_uri=https%3A%2F%2Fntgamesdevshop.github.io%2Fntgame%2Fcallback&response_type=code&scope=identify">Login with Discord</a>';
            }
        })
        .catch(err => {
            console.error('Error fetching user data:', err);
            loginStatusElement.innerHTML = '<a href="https://discord.com/api/oauth2/authorize?client_id=1175760765513375785&redirect_uri=https%3A%2F%2Fntgamesdevshop.github.io%2Fntgame%2Fcallback&response_type=code&scope=identify">Login with Discord</a>';
        });
});