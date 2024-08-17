document.addEventListener("DOMContentLoaded", function () {
  // Check login status
  var loggedIn = false; // Change this value based on login status
  var loginStatusElement = document.getElementById("login-status");

  if (loggedIn) {
    // If logged in, display Discord user info
    loginStatusElement.innerHTML = "Logged in as: Your Discord Username";
  } else {
    // If not logged in, display login prompt
    loginStatusElement.innerHTML = 'Please <a href="login.html">login</a>';
  }
});

document.getElementById("login-btn").addEventListener("click", function () {
  window.location.href =
    "https://discord.com/oauth2/authorize?client_id=1175760765513375785&response_type=code&redirect_uri=https%3A%2F%2Fntgamesdevshop.github.io%2Fntgame%2F&scope=identify";
});
