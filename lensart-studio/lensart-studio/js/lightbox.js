/* LensArt Studio — Gallery lightbox */

/* ─── LIGHTBOX ─── */
function openLightbox(el) {
  const img = el.querySelector('.port-img');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
