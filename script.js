// ── Internationalization (i18n) ──────────────────────────────────
const translations = {
  en: {
    page_title: 'Samet Kızıltaş – Senior Software Developer',
    page_desc: 'Personal website and CV of Samet Kızıltaş, Senior Software Developer specialising in C#, .NET and Microservices.',
    nav_about: 'About', nav_skills: 'Skills', nav_experience: 'Experience',
    nav_projects: 'Projects', nav_education: 'Education', nav_contact: 'Contact',
    nav_view_cv: 'View CV', nav_download_cv: 'Download CV',
    hero_greeting: "Hello, I'm", hero_title: 'Senior Software Developer',
    hero_view_cv: 'View My CV', hero_download_cv: 'Download CV',
    hero_badge: 'Available for opportunities',
    about_title: 'About Me',
    about_p1: 'Results-driven <strong>Senior Software Developer</strong> with 7+ years of hands-on experience in backend development, specialising in <strong>C#, .NET, and Microservices Architecture</strong>. Proven track record of delivering scalable, high-performance solutions in collaboration with cross-functional teams.',
    about_p2: 'Committed to <strong>Clean Architecture</strong>, <strong>Domain-Driven Design</strong>, and customer-centric development practices. Approaches challenges as opportunities for continuous improvement.',
    stat_years: 'Years Experience', stat_companies: 'Companies',
    stat_test: 'Unit Test Coverage', stat_degrees: 'Degrees',
    skills_title: 'Skills & Technologies',
    skill_lang: 'Languages & Frameworks', skill_db: 'Databases',
    skill_arch: 'Architecture & Design', skill_api: 'APIs & Security',
    skill_msg: 'Messaging & Jobs', skill_test: 'Testing & Monitoring',
    skill_tools: 'Tools & Workflow',
    exp_title: 'Work Experience',
    exp1_title: 'Senior Backend Developer', exp1_period: 'May 2025 – Present',
    exp1_desc: 'Contributing to enterprise-level e-commerce platform initiatives, driving data integration and digital product transformation projects.',
    exp1_d1: 'Implemented sales data integration with the Insider platform, enabling data-driven marketing and customer engagement workflows.',
    exp1_d2: 'Contributed to the Boyner Giftcard Redesign initiative, improving the digital gift card experience for end users.',
    exp1_d3: 'Actively leveraged GitHub Copilot (Opus 4.5 and 4.6 models) throughout development workflows, serving primarily as a code reviewer and implementing documented flows through dedicated AI agents.',
    exp2_title: 'Senior Backend Developer', exp2_period: 'Apr 2023 – May 2025',
    exp2_desc: 'Developed a hospital asset management product utilising Clean Architecture and Microservices with event-based communication.',
    exp2_d1: 'Achieved up to 90% unit test coverage across all microservices using NUnit and Moq.',
    exp2_d2: 'Led the architectural refactoring of microservices into a Modular Monolith structure to improve maintainability and reduce operational complexity.',
    exp2_d3: 'Designed and developed a workflow and actions mechanism to extend user functionality, similar to N8N, enabling no-code automation capabilities.',
    exp3_title: 'Senior Backend Developer', exp3_period: 'Nov 2021 – Apr 2023',
    exp3_desc: 'Delivered key features including financial assistance and budget management modules for a credit product comparison platform.',
    exp3_d1: 'Migrated the existing custom authentication system to IdentityServer, enhancing security and standards compliance with OAuth 2.0 and JWT.',
    exp3_d2: 'Implemented a new API Gateway using Ocelot and introduced a Backend for Frontend (BFF) layer to orchestrate 10+ microservices efficiently.',
    exp4_title: 'Backend Developer', exp4_period: 'Nov 2020 – Nov 2021',
    exp4_desc: 'Played a key role in optimising the performance of critical modules within the Material Management Team.',
    exp4_d1: 'Mentored junior developers on .NET and Entity Framework Core best practices.',
    exp4_d2: 'Guided team members in adopting Domain-Driven Design (DDD) and Modular Monolith architecture principles.',
    exp5_title: 'Full-Stack Developer', exp5_period: 'Jul 2018 – Nov 2020',
    exp5_desc: 'Collaborated with cross-departmental teams to digitalise business processes by developing rapid, tailor-made applications.',
    exp5_d1: 'Designed and established a reusable architecture framework optimised for rapid application development.',
    exp5_d2: 'Developed a Dynamic Form Builder tool with a no-code interface using React, enabling non-technical users to create custom forms.',
    projects_title: 'Projects', status_live: 'Live', status_soon: 'Coming Soon',
    proj1_summary: 'A scheduling and sharing platform for streamers and content creators.',
    proj1_detail: 'A platform where individuals or streamers plan their broadcast schedules and events, share these plans with their followers, and followers can import these plans into their calendars.',
    proj2_summary: 'A vehicle service management and tracking platform for auto repair shops.',
    proj2_detail: 'A platform where auto repair shops or individual mechanics can manage information about the vehicles they work on, service times, and maintenance schedules. It can send notifications to users about their vehicles in service, and appointments can be created. In later phases, vehicle service and maintenance history can be queried by license plate.',
    proj3_summary: 'A digital loyalty program platform designed for small and medium businesses.',
    proj3_detail: 'A platform where SMBs can define loyalty flows based on the products they sell and create flows for users to reach certain goals. Especially for multiple coffee chain brands, this project digitalises the physical loyalty card flows.',
    btn_visit: 'Visit',
    edu_title: 'Education',
    edu1_degree: 'Master of Computer Engineering (Non-Thesis)', edu1_inst: 'Üsküdar University',
    edu2_degree: 'Management Information Systems (MIS)', edu2_inst: 'Anadolu University',
    edu3_degree: 'Computer Programming', edu3_inst: 'Balıkesir University',
    edu4_degree: 'Computer Programming', edu4_inst: 'Tuzla Technical High School',
    contact_title: 'Get In Touch',
    contact_intro: 'Feel free to reach out for collaboration, opportunities, or just a chat about technology.',
    contact_email_label: 'Email', contact_phone_label: 'Phone',
    contact_location_label: 'Location', contact_location: 'Istanbul, Turkey',
    cta_more: 'Want to know more?', cta_view_cv: 'View Full CV', cta_download_cv: 'Download CV (PDF)',
    footer: '© 2026 Samet Kızıltaş. Built with ❤️ and deployed via GitHub Pages.'
  },
  tr: {
    page_title: 'Samet Kızıltaş – Kıdemli Yazılım Geliştirici',
    page_desc: 'Samet Kızıltaş\'ın kişisel web sitesi ve CV\'si. C#, .NET ve Mikroservisler konusunda uzmanlaşmış Kıdemli Yazılım Geliştirici.',
    nav_about: 'Hakkımda', nav_skills: 'Yetenekler', nav_experience: 'Deneyim',
    nav_projects: 'Projeler', nav_education: 'Eğitim', nav_contact: 'İletişim',
    nav_view_cv: 'CV Görüntüle', nav_download_cv: 'CV İndir',
    hero_greeting: 'Merhaba, ben', hero_title: 'Kıdemli Yazılım Geliştirici',
    hero_view_cv: "CV'mi Görüntüle", hero_download_cv: 'CV İndir',
    hero_badge: 'Yeni fırsatlara açığım',
    about_title: 'Hakkımda',
    about_p1: '7+ yıllık uygulamalı deneyime sahip, backend geliştirme alanında <strong>C#, .NET ve Mikroservis Mimarisi</strong> konularında uzmanlaşmış, sonuç odaklı <strong>Kıdemli Yazılım Geliştirici</strong>. Çapraz fonksiyonel ekiplerle iş birliği içinde ölçeklenebilir, yüksek performanslı çözümler sunma konusunda kanıtlanmış başarı geçmişi.',
    about_p2: '<strong>Clean Architecture</strong>, <strong>Domain-Driven Design</strong> ve müşteri odaklı geliştirme pratiklerine bağlı. Zorlukları sürekli iyileştirme fırsatları olarak değerlendirir.',
    stat_years: 'Yıl Deneyim', stat_companies: 'Şirket',
    stat_test: 'Birim Test Kapsama', stat_degrees: 'Diploma',
    skills_title: 'Yetenekler & Teknolojiler',
    skill_lang: 'Diller & Framework\'ler', skill_db: 'Veritabanları',
    skill_arch: 'Mimari & Tasarım', skill_api: 'API\'ler & Güvenlik',
    skill_msg: 'Mesajlaşma & İş Kuyruğu', skill_test: 'Test & İzleme',
    skill_tools: 'Araçlar & İş Akışı',
    exp_title: 'İş Deneyimi',
    exp1_title: 'Kıdemli Backend Geliştirici', exp1_period: 'Mayıs 2025 – Devam Ediyor',
    exp1_desc: 'Kurumsal düzeyde e-ticaret platformu girişimlerine katkıda bulunarak, veri entegrasyonu ve dijital ürün dönüşüm projelerini yönetmektedir.',
    exp1_d1: 'Insider platformuyla satış verisi entegrasyonunu gerçekleştirerek, veri odaklı pazarlama ve müşteri etkileşim iş akışlarını mümkün kıldı.',
    exp1_d2: 'Boyner Hediye Kartı Yeniden Tasarım projesine katkıda bulunarak, son kullanıcılar için dijital hediye kartı deneyimini iyileştirdi.',
    exp1_d3: 'Geliştirme iş akışları boyunca GitHub Copilot\'u (Opus 4.5 ve 4.6 modelleri) aktif olarak kullanarak, ağırlıklı olarak kod gözden geçirici rolünde bulundu ve belgelenmiş akışları özel AI ajanları aracılığıyla uyguladı.',
    exp2_title: 'Kıdemli Backend Geliştirici', exp2_period: 'Nisan 2023 – Mayıs 2025',
    exp2_desc: 'Clean Architecture ve olay tabanlı iletişimle Mikroservisler kullanarak bir hastane varlık yönetim ürünü geliştirdi.',
    exp2_d1: 'NUnit ve Moq kullanarak tüm mikroservislerde %90\'a varan birim test kapsaması elde etti.',
    exp2_d2: 'Sürdürülebilirliği artırmak ve operasyonel karmaşıklığı azaltmak için mikroservislerin Modüler Monolit yapısına mimari yeniden düzenlemesini yönetti.',
    exp2_d3: 'Kullanıcı işlevselliğini genişletmek için N8N\'e benzer bir iş akışı ve eylemler mekanizması tasarlayıp geliştirerek, kodsuz otomasyon yetenekleri sağladı.',
    exp3_title: 'Kıdemli Backend Geliştirici', exp3_period: 'Kasım 2021 – Nisan 2023',
    exp3_desc: 'Kredi ürünü karşılaştırma platformu için finansal yardım ve bütçe yönetimi modülleri dahil önemli özellikleri teslim etti.',
    exp3_d1: 'Mevcut özel kimlik doğrulama sistemini IdentityServer\'a taşıyarak, OAuth 2.0 ve JWT ile güvenlik ve standart uyumluluğunu artırdı.',
    exp3_d2: 'Ocelot kullanarak yeni bir API Gateway uyguladı ve 10\'dan fazla mikroservisi verimli bir şekilde yönetmek için Backend for Frontend (BFF) katmanı tanıttı.',
    exp4_title: 'Backend Geliştirici', exp4_period: 'Kasım 2020 – Kasım 2021',
    exp4_desc: 'Malzeme Yönetimi Ekibi bünyesinde kritik modüllerin performansını optimize etmede kilit rol oynadı.',
    exp4_d1: 'Junior geliştiricilere .NET ve Entity Framework Core en iyi uygulamaları konusunda mentorluk yaptı.',
    exp4_d2: 'Ekip üyelerinin Domain-Driven Design (DDD) ve Modüler Monolit mimari prensiplerini benimsemesine rehberlik etti.',
    exp5_title: 'Full-Stack Geliştirici', exp5_period: 'Temmuz 2018 – Kasım 2020',
    exp5_desc: 'Hızlı, özel uygulamalar geliştirerek iş süreçlerinin dijitalleştirilmesi için departmanlar arası ekiplerle iş birliği yaptı.',
    exp5_d1: 'Hızlı uygulama geliştirme için optimize edilmiş yeniden kullanılabilir bir mimari çerçeve tasarladı ve kurdu.',
    exp5_d2: 'React kullanarak kodsuz arayüzlü Dinamik Form Oluşturucu aracı geliştirerek, teknik olmayan kullanıcıların özel formlar oluşturmasını sağladı.',
    projects_title: 'Projeler', status_live: 'Yayında', status_soon: 'Yakında',
    proj1_summary: 'Yayıncılar ve içerik üreticileri için zamanlama ve paylaşım platformu.',
    proj1_detail: 'Bireysellerin ya da yayıncıların yayın akışlarını, etkinliklerini planladığı, bu planları takipçileri ile paylaştığı ve takipçilerin bu planları takvimlerine import edebildiği bir platform.',
    proj2_summary: 'Oto tamir atölyeleri için araç servis yönetimi ve takip platformu.',
    proj2_detail: 'Araba servislerinin ya da bireysel tamircilerin kendi yaptığı, üzerinde çalıştığı arabalar ile ilgili bilgileri, servis zamanlarını, bakımlarını yönetebildiği, kullanıcılara servisteki arabalar ile ilgili bilgileri notification olarak atabilen, randevu oluşturulabilen bir platform. İleri fazda plaka ile araç servis ve bakım geçmişi sorgulanabilecek.',
    proj3_summary: 'KOBİ\'ler için tasarlanmış dijital sadakat programı platformu.',
    proj3_detail: 'KOBİ\'lerin sattığı ürünler üzerinden loyalty akışları tanımlayabildiği, kullanıcılarına belirli bir hedefe ulaşması için akışlar oluşturabildiği bir platform. Özellikle birden çok kahve zinciri markasının tercih edebileceği, loyalty card ile verilen fiziksel akışların dijitale aktarılmasını sağlayan proje.',
    btn_visit: 'Ziyaret Et',
    edu_title: 'Eğitim',
    edu1_degree: 'Bilgisayar Mühendisliği Yüksek Lisans (Tezsiz)', edu1_inst: 'Üsküdar Üniversitesi',
    edu2_degree: 'Yönetim Bilişim Sistemleri (YBS)', edu2_inst: 'Anadolu Üniversitesi',
    edu3_degree: 'Bilgisayar Programcılığı', edu3_inst: 'Balıkesir Üniversitesi',
    edu4_degree: 'Bilgisayar Programcılığı', edu4_inst: 'Tuzla Teknik Lisesi',
    contact_title: 'İletişime Geç',
    contact_intro: 'İş birliği, fırsatlar veya teknoloji hakkında sohbet etmek için bana ulaşmaktan çekinmeyin.',
    contact_email_label: 'E-posta', contact_phone_label: 'Telefon',
    contact_location_label: 'Konum', contact_location: 'İstanbul, Türkiye',
    cta_more: 'Daha fazla bilgi almak ister misiniz?', cta_view_cv: 'CV Görüntüle', cta_download_cv: 'CV İndir (PDF)',
    footer: '© 2026 Samet Kızıltaş. ❤️ ile yapıldı, GitHub Pages ile yayınlandı.'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!dict[key]) return;

    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, dict[key]);
    } else if (el.tagName === 'TITLE') {
      document.title = dict[key];
    } else {
      el.innerHTML = dict[key];
    }
  });

  // Update all language toggle labels
  const nextLang = lang === 'en' ? 'TR' : 'EN';
  document.querySelectorAll('.lang-label').forEach(el => {
    el.textContent = nextLang;
  });
}

function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'tr' : 'en');
}

// Apply saved language on load
applyLanguage(currentLang);

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
  '.stat-card, .skill-category, .timeline-card, .project-card, .edu-card, .contact-card'
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
