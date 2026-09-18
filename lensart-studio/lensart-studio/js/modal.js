/* LensArt Studio — Open / close / switch modals */

/* ─── MODALS ─── */
function openModal(type) {
  document.getElementById(type + 'Modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(type) {
  document.getElementById(type + 'Modal').classList.remove('open');
  document.body.style.overflow = '';
}

function switchModal(from, to) {
  closeModal(from);
  setTimeout(() => openModal(to), 300);
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});
