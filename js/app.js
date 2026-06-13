// ===========================
// GITHUB PAGES SPA ROUTING
// Restaure le chemin sauvé par 404.html
// ===========================
(function () {
  var redirect = sessionStorage.getItem('spa_redirect');
  if (redirect && redirect !== '/') {
    sessionStorage.removeItem('spa_redirect');
    history.replaceState(null, null, redirect);
  }
})();

// ===========================
// SPA ROUTER
// ===========================
const routes = {
  '/': 'page-home',
  '/resume': 'page-resume',
  '/projects': 'page-projects',
  '/contact': 'page-contact',
};

function navigate(path) {
  if (!routes[path]) path = '/';

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(routes[path]).classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.path === path);
  });

  history.pushState({ path }, '', path);
  document.querySelector('.nav-links').classList.remove('open');
  window.scrollTo(0, 0);
}

document.querySelectorAll('[data-path]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigate(el.dataset.path);
  });
});

window.addEventListener('popstate', e => {
  navigate(e.state?.path || '/');
});

// Charge la bonne page au démarrage
navigate(window.location.pathname);

// ===========================
// MOBILE MENU
// ===========================
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// ===========================
// CONTACT FORM
// ===========================
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = 'Envoi en cours…';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('form-success').style.display = 'block';
    this.reset();
    btn.textContent = 'Envoyer le message';
    btn.disabled = false;
  }, 1200);
});
