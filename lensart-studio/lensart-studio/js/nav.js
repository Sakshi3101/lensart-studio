/* LensArt Studio — Navbar scroll effect + mobile menu */

/* ─── NAV SCROLL EFFECT ─── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 80) {
    nav.style.padding = '0.8rem 4rem';
    nav.style.borderBottomColor = 'rgba(192,0,26,0.4)';
  } else {
    nav.style.padding = '1.2rem 4rem';
    nav.style.borderBottomColor = 'rgba(192,0,26,0.25)';
  }
});

/* ─── MOBILE MENU ─── */
function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:rgba(5,5,5,0.98);padding:2rem;gap:1.5rem;border-bottom:1px solid rgba(192,0,26,0.3);z-index:999;';
    links.querySelectorAll('a').forEach(a => {
      a.onclick = () => { links.style.display = 'none'; };
    });
  }
}
