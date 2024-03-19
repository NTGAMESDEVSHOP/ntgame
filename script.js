document.getElementById('login-btn').addEventListener('click', function() {
  // Redirect user to Discord OAuth login page
  window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify';
});
