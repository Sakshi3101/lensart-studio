/* LensArt Studio — Login & register handlers */

/* ─── LOGIN / REGISTER ─── */
function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;
  if (!email || !pass) { showToast('Please fill all fields.', false); return; }
  closeModal('login');
  showToast('Welcome back! You are now logged in.');
}

function handleRegister() {
  const first = document.getElementById('regFirst').value;
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPass').value;
  if (!first || !email || !pass) { showToast('Please fill all required fields.', false); return; }
  closeModal('register');
  showToast('Account created! Welcome to LensArt Studio 🎉');
}
