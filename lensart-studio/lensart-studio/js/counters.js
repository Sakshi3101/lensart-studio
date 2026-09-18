/* LensArt Studio — Stats: animated counters */

/* ─── COUNTER ANIMATION ─── */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(el => {
        const target = +el.dataset.target;
        const suffix = el.textContent.includes('+') ? '+' : (el.textContent.includes('%') ? '%' : '');
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current) + (target >= 100 ? '+' : '');
          if (current >= target) clearInterval(timer);
        }, 25);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) counterObserver.observe(statsBar);
