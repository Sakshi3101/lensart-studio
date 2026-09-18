/* LensArt Studio — Toast notification */

/* ─── TOAST ─── */
function showToast(msg, success = true) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.style.background = success ? 'var(--crimson-dark)' : '#1a1a00';
  toast.querySelector('.toast-icon').textContent = success ? '✓' : '⚠';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}
