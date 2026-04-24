/* ── DARK MODE ── */
function toggleDark(){
  const isDark = document.body.classList.toggle('dark');
  document.getElementById('themeToggle').textContent = isDark ? '☀️ Modalità chiara' : '🌙 Modalità scura';
}

/* ── ACCORDION ── */
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    item.classList.toggle('open');
  });
});

/* ── ACTIVE NAV LINK (IntersectionObserver) ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if(active) active.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));