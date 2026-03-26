/* ============================================================
   main.js — minimal JavaScript
   Header shrink is handled entirely via CSS scroll-driven
   animation — no JS needed for that.
============================================================ */

'use strict';

/* --- Theme: default dark, respect stored preference --- */
const stored = localStorage.getItem('wildwuchs-theme');
document.documentElement.dataset.theme = stored ?? 'dark';

/* --- Back to top button --- */
const btt = document.getElementById('back-to-top');

btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* --- Scrollspy --- */
const navLinks = document.querySelectorAll('.site-nav a[data-section]');
const sections = Array.from(navLinks).map(a =>
    document.getElementById(a.dataset.section)
).filter(Boolean);

const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove('active'));
            const active = document.querySelector(
                `.site-nav a[data-section="${entry.target.id}"]`
            );
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spy.observe(s));

/* --- Theme toggle --- */
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('wildwuchs-theme', next);
});

/* --- Language toggle --- */
document.getElementById('lang-toggle').addEventListener('click', () => {
    const isEN = document.documentElement.lang === 'en';
    window.location.href = isEN ? 'index.html' : 'index-en.html';
});

/* --- Scroll-reveal fallback (browsers without animation-timeline) --- */
if (!CSS.supports('animation-timeline', 'scroll()')) {
    const revealObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.sda-reveal').forEach(el => {
        el.classList.add('reveal');
        revealObs.observe(el);
    });
}