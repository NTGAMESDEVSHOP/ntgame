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

		document.getElementById('login').href += `&state=${btoa(randomString)}`;
		return (document.getElementById('login').style.display = 'block');
	}
};