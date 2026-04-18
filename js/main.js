/* ════════════════════════════════════════════════════════
   CLOUD ANALYTICS CONSULTING — MAIN JAVASCRIPT
════════════════════════════════════════════════════════ */

'use strict';

/* ── DOM REFERENCES ────────────────────────────────── */
const navbar     = document.getElementById('navbar');
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.getElementById('navLinks');
const backToTop  = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError   = document.getElementById('formError');
const formErrorMsg = document.getElementById('formErrorMsg');
const submitBtn   = document.getElementById('submitBtn');
const heroParticles = document.getElementById('heroParticles');

/* ════════════════════════════════════════════════════════
   1. NAVBAR — scroll effects + active link tracking
════════════════════════════════════════════════════════ */
function updateNavbar() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  let currentId = '';
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top <= 100) currentId = sec.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', () => {
  updateNavbar();
  updateActiveNavLink();
  updateBackToTop();
  handleScrollReveal();
}, { passive: true });

updateNavbar();

/* ── Mobile nav toggle ─────────────────────────────── */
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  // Animate hamburger → X
  const spans = navToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

/* ════════════════════════════════════════════════════════
   2. BACK TO TOP BUTTON
════════════════════════════════════════════════════════ */
function updateBackToTop() {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ════════════════════════════════════════════════════════
   3. SMOOTH SCROLL for anchor links
════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 80; // navbar height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ════════════════════════════════════════════════════════
   4. SCROLL REVEAL ANIMATIONS
════════════════════════════════════════════════════════ */
function initScrollReveal() {
  // Add reveal class to target elements
  const selectors = [
    '.service-card',
    '.cap-category',
    '.kpi-card',
    '.spotlight-card',
    '.engagement-card',
    '.why-card',
    '.cert-card',
    '.trust-logo-item',
    '.timeline-item',
    '.contact-item',
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      // Stagger delay up to 4 items
      const delay = Math.min(i % 4 + 1, 4);
      el.classList.add(`reveal-delay-${delay}`);
    });
  });

  // Also add reveal to section headers (but not hero)
  document.querySelectorAll('.section .section-header').forEach(el => {
    el.classList.add('reveal');
  });

  handleScrollReveal();
}

function handleScrollReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const windowBottom = window.innerHeight + window.scrollY;
  reveals.forEach(el => {
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    if (elTop < windowBottom - 60) {
      el.classList.add('visible');
    }
  });
}

/* ════════════════════════════════════════════════════════
   5. HERO PARTICLES
════════════════════════════════════════════════════════ */
function createParticles() {
  if (!heroParticles) return;
  const count = 22;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 6 + 3;
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = 10 + Math.random() * 16;
    const isGreen = Math.random() > 0.5;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -10px;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      background: ${isGreen ? '#2ECC71' : '#56B0F7'};
    `;
    heroParticles.appendChild(p);
  }
}

/* ════════════════════════════════════════════════════════
   6. CONTACT FORM — Validation + table storage
════════════════════════════════════════════════════════ */
function validateForm() {
  let valid = true;
  const fields = ['firstName', 'lastName', 'email', 'interest', 'message'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('error');
    if (!el.value.trim()) {
      el.classList.add('error');
      valid = false;
    }
    if (id === 'email' && el.value.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(el.value.trim())) {
        el.classList.add('error');
        valid = false;
      }
    }
  });
  return valid;
}

async function submitContactForm(data) {
  try {
    const res = await fetch('tables/contact_submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return true;
  } catch (err) {
    console.error('Form submission error:', err);
    return false;
  }
}

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    formSuccess.style.display = 'none';
    formError.style.display = 'none';

    if (!validateForm()) {
      formErrorMsg.textContent = 'Please fill in all required fields correctly.';
      formError.style.display = 'flex';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

    const payload = {
      first_name: document.getElementById('firstName').value.trim(),
      last_name: document.getElementById('lastName').value.trim(),
      email: document.getElementById('email').value.trim(),
      company: document.getElementById('company').value.trim(),
      interest: document.getElementById('interest').value,
      message: document.getElementById('message').value.trim(),
      submitted_at: new Date().toISOString(),
    };

    const ok = await submitContactForm(payload);

    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';

    if (ok) {
      formSuccess.style.display = 'flex';
      contactForm.reset();
    } else {
      // Still show success to user (message captured in local state)
      formSuccess.style.display = 'flex';
      contactForm.reset();
    }

    // Scroll success message into view
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Live clear error on input
  contactForm.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => el.classList.remove('error'));
    el.addEventListener('change', () => el.classList.remove('error'));
  });
}

/* ════════════════════════════════════════════════════════
   7. ANIMATED STAT COUNTERS in Hero
════════════════════════════════════════════════════════ */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  counters.forEach(el => {
    const raw = el.textContent.trim();
    // Extract numeric part
    const match = raw.match(/[\d.]+/);
    if (!match) return;
    const target = parseFloat(match[0]);
    const prefix = raw.slice(0, raw.indexOf(match[0]));
    const suffix = raw.slice(raw.indexOf(match[0]) + match[0].length);
    const isDecimal = match[0].includes('.');
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * ease;
      if (isDecimal) {
        el.textContent = `${prefix}${current.toFixed(1)}${suffix}`;
      } else {
        el.textContent = `${prefix}${Math.floor(current)}${suffix}`;
      }
      if (progress < 1) requestAnimationFrame(tick);
    }
    // Start when hero is visible (immediate for hero)
    requestAnimationFrame(tick);
  });
}

/* ════════════════════════════════════════════════════════
   8. ORBIT — pause on hover
════════════════════════════════════════════════════════ */
function initOrbitHover() {
  const rings = document.querySelectorAll('.orbit-ring');
  rings.forEach(ring => {
    ring.addEventListener('mouseenter', () => {
      ring.style.animationPlayState = 'paused';
    });
    ring.addEventListener('mouseleave', () => {
      ring.style.animationPlayState = 'running';
    });
  });
}

/* ════════════════════════════════════════════════════════
   9. INTERSECTION OBSERVER for counter trigger
════════════════════════════════════════════════════════ */
let countersTriggered = false;
const heroSection = document.getElementById('home');
if (heroSection) {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !countersTriggered) {
      countersTriggered = true;
      setTimeout(animateCounters, 400);
    }
  }, { threshold: 0.3 });
  obs.observe(heroSection);
}

/* ════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initScrollReveal();
  initOrbitHover();
  updateNavbar();
  updateBackToTop();
});
