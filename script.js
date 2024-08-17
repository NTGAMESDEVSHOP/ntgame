const express = require('express');
const axios = require('axios');
const app = express();

const client_id = '1175760765513375785';
const client_secret = '9c1CTuP2qbKp4SXRCxvWEniTDW_Iyzrg';
const redirect_uri = 'https://ntgamesdevshop.github.io/ntgame/callback';

app.use(express.static('public')); // Serve static files

app.get('/callback', async (req, res) => {
    const code = req.query.code;

    const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
        client_id,
        client_secret,
        code,
        grant_type: 'authorization_code',
        redirect_uri,
    }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const accessToken = tokenResponse.data.access_token;

    const userResponse = await axios.get('https://discord.com/api/users/@me', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    // Send user data to client
    res.json(userResponse.data);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

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