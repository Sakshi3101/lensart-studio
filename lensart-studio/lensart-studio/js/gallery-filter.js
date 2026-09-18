/* LensArt Studio — Portfolio category filter */

/* ─── GALLERY FILTER ─── */
function filterGallery(btn, category) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.port-item').forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.opacity = '1';
      item.style.transform = 'scale(1)';
      item.style.pointerEvents = 'all';
    } else {
      item.style.opacity = '0.15';
      item.style.transform = 'scale(0.97)';
      item.style.pointerEvents = 'none';
    }
  });
}
