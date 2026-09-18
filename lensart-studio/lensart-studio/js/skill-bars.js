/* LensArt Studio — About: animated skill bars */

/* ─── SKILL BARS ─── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsWrap = document.querySelector('.skills-wrap');
if (skillsWrap) skillObserver.observe(skillsWrap);
