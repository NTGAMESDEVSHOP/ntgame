document.getElementById('login-btn').addEventListener('click', function() {
  // Redirect user to Discord OAuth login page
  window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1212026266291806288&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3D1212026266291806288%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fntgamesdevshop.github.io%252Fntgame%252F%26scope%3Didentify&response_type=code&scope=identify';
});
