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