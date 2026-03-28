// ── Navigation helpers ───────────────────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function onScroll() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

// ── CV Viewer – opens PDF in a new browser tab ──────────────────
const CV_PATH = 'SAMET-KIZILTAS-CV-2026.pdf'; // update filename when CV is regenerated

function openCVViewer() {
  window.open(CV_PATH, '_blank');
}

// ── Intersection Observer – fade-in on scroll ────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll(
  '.stat-card, .skill-category, .timeline-card, .edu-card, .contact-card'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

// Add .visible style dynamically
const visibleStyle = document.createElement('style');
visibleStyle.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(visibleStyle);
