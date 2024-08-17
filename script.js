const CLIENT_ID = '1175760765513375785';
const REDIRECT_URI = 'https://ntgamesdevshop.github.io/ntgame/index.html'; // แก้ไข URI ให้เป็น URL ของหน้าเว็บคุณที่ต้องการให้เรียกกลับ
const AUTH_ENDPOINT = 'https://discord.com/api/oauth2/authorize';
const RESPONSE_TYPE = 'token';
const SCOPE = 'identify';

const loginBtn = document.getElementById('login-btn');
const loginStatus = document.getElementById('login-status');

function checkLoginStatus() {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    fetch('https://discord.com/api/users/@me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      loginStatus.innerHTML = `
        <span>Welcome, ${data.username}#${data.discriminator}</span>
        <button id="logout-btn" class="btn">Logout</button>
      `;
      loginBtn.style.display = 'none';

      document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('access_token');
        loginStatus.innerHTML = '';
        loginBtn.style.display = 'inline-block';
      });
    })
    .catch(() => {
      localStorage.removeItem('access_token');
      loginStatus.innerHTML = '';
      loginBtn.style.display = 'inline-block';
    });
  }
}

loginBtn.addEventListener('click', () => {
  window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
});

window.onload = () => {
  const hash = window.location.hash;
  if (hash) {
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      window.history.replaceState({}, document.title, "/");
    }
  }

  checkLoginStatus();
};