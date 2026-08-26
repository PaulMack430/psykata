// ── Active nav link ────────────────────────────────────────────
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
})();

// ── Level tabs ─────────────────────────────────────────────────
function initTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  if (!btns.length) return;

  function activate(btn) {
    btns.forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const pane = document.getElementById(btn.dataset.tab);
    if (pane) pane.classList.add('active');
  }

  btns.forEach(btn => btn.addEventListener('click', () => activate(btn)));

  // Honor ?level= URL param on the videos page
  const param = new URLSearchParams(location.search).get('level');
  if (param) {
    const target = document.querySelector(`.tab-btn[data-tab="${param}"]`);
    if (target) activate(target);
  }
}

// ── Login form (stub — no backend yet) ────────────────────────
function initLogin() {
  const form  = document.getElementById('loginForm');
  const errEl = document.getElementById('loginError');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email    = form.email.value.trim();
    const password = form.password.value;

    if (!email || !password) {
      errEl.textContent = 'Please fill in all fields.';
      errEl.style.display = 'block';
      return;
    }

    errEl.style.display = 'none';
    const btn = form.querySelector('.login-submit');
    btn.textContent = 'Signing in…';
    btn.disabled = true;

    // Replace with real auth call
    setTimeout(() => {
      alert('Login successful! (Backend not yet connected.)');
      btn.textContent = 'Sign In';
      btn.disabled = false;
    }, 1200);
  });
}

// ── Nav scroll state ───────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', update, { passive: true });
  update();
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTabs();
  initLogin();
});
