document.getElementById('login-btn').addEventListener('click', function() {
  // Redirect user to Discord OAuth login page
  window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1212026266291806288&redirect_uri=https://discord.com/oauth2/authorize?client_id=1212026266291806288&response_type=code&redirect_uri=https%3A%2F%2Fntgamesdevshop.github.io%2Fntgame%2F&scope=connections';
});
