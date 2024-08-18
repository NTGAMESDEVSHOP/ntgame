const express = require('express');
const { port } = require('./config.json');

const app = express();

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.listen(port, () => console.log(`App listening at https://ntgamesdevshop.github.io/ntgame`));

function generateRandomString() {
	let randomString = '';
	const randomNumber = Math.floor(Math.random() * 10);

	for (let i = 0; i < 20 + randomNumber; i++) {
		randomString += String.fromCharCode(33 + Math.floor(Math.random() * 94));
	}

	return randomString;
}

window.onload = () => {
	// ...
	if (!accessToken) {
		const randomString = generateRandomString();
		localStorage.setItem('oauth-state', randomString);

		document.getElementById('login').href += `https://discord.com/oauth2/authorize?client_id=1175760765513375785&response_type=code&redirect_uri=https%3A%2F%2Fntgamesdevshop.github.io%2Fntgame&scope=identify`;
		return (document.getElementById('login').style.display = 'block');
	}
};