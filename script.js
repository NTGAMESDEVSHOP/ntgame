const express = require('express');
const axios = require('axios');
const session = require('express-session');
const app = express();

const client_id = '1175760765513375785';
const client_secret = '9c1CTuP2qbKp4SXRCxvWEniTDW_Iyzrg';
const redirect_uri = 'https://ntgamesdevshop.github.io/ntgame/callback';

app.use(express.static('public')); // Serve static files

// Set up session management
app.use(session({
    secret: 'your_secret_key', // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
}));

app.get('/callback', async (req, res) => {
    const code = req.query.code;

    try {
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
        req.session.accessToken = accessToken; // Store token in session

        const userResponse = await axios.get('https://discord.com/api/users/@me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const user = userResponse.data;
        res.send(`
            <h1>Welcome ${user.username}</h1>
            <form action="/logout" method="post">
                <button type="submit">Logout</button>
            </form>
        `);

    } catch (error) {
        res.status(500).send('Authentication failed');
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Failed to log out');
        }
        res.redirect('/');
    });
});

app.get('/', (req, res) => {
    if (req.session.accessToken) {
        res.send('You are already logged in. <a href="/logout">Logout</a>');
    } else {
        res.send('<a href="https://discord.com/api/oauth2/authorize?client_id=' + client_id + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&response_type=code&scope=identify">Login with Discord</a>');
    }
});
});