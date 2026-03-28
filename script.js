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
// CV naming convention: SAMET-KIZILTAS-CV-YYYY-MM-DD.pdf
// The latest dated file is resolved automatically via the GitHub API.
const CV_OWNER = 'sametkiziltas';
const CV_REPO  = 'sametkiziltas.github.io';
const CV_REGEX = /^SAMET-KIZILTAS-CV-(\d{4}-\d{2}-\d{2})\.pdf$/;
const CV_FALLBACK = 'SAMET-KIZILTAS-CV-2026-03-17.pdf';

const latestCVPromise = (async () => {
  const cached = sessionStorage.getItem('latestCV');
  if (cached) return cached;
  try {
    const res = await fetch(
      `https://api.github.com/repos/${CV_OWNER}/${CV_REPO}/contents/`,
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    );
    if (!res.ok) return CV_FALLBACK;
    const files = await res.json();
    const cvFiles = files
      .map(f => ({ name: f.name, match: f.name.match(CV_REGEX) }))
      .filter(f => f.match)
      .sort((a, b) => b.match[1].localeCompare(a.match[1]));
    const latest = cvFiles.length ? cvFiles[0].name : CV_FALLBACK;
    sessionStorage.setItem('latestCV', latest);
    return latest;
  } catch (err) {
    console.warn('Failed to fetch CV list from GitHub API:', err);
    return CV_FALLBACK;
  }
})();

async function openCVViewer() {
  const path = await latestCVPromise;
  window.open(path, '_blank');
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
