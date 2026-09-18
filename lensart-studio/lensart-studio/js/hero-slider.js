/* LensArt Studio — Hero slideshow */

/* ─── HERO SLIDESHOW ─── */
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.getElementById('slideDots');
let current = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
});

function goToSlide(n) {
  slides[current].classList.remove('active');
  document.querySelectorAll('.slide-dot')[current].classList.remove('active');
  current = n;
  slides[current].classList.add('active');
  document.querySelectorAll('.slide-dot')[current].classList.add('active');
}

setInterval(() => goToSlide((current + 1) % slides.length), 5000);
