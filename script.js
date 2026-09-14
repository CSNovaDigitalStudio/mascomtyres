const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    const service = document.getElementById('service').value;
    const issue = document.getElementById('issue').value.trim();

    const message = `DOMBO TYRES ASSISTANCE REQUEST\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nService: ${service}\n\nIssue:\n${issue}`;
    const whatsappURL = `https://wa.me/27729973337?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
