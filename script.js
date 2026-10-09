const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Update these placeholders after adding your real profiles and resume.
const links = {
  linkedin: 'https://www.linkedin.com/in/nandha-kishore-nandhakishore-b08942344?utm_source=share_via&utm_content=profile&utm_medium=member_android', // Example: https://www.linkedin.com/in/your-profile
  github: 'https://github.com/Nandhakishore27/SMART-PHONE-PRICE-DROP-PREDICTION',   // Example: https://github.com/your-username
  resume: 'assets/NANDHAKISHORE RESUME.pdf',   // Example: assets/Nandhakishore-Resume.pdf
  project: '',
  smartphoneProject: ''
};
document.querySelectorAll('[data-placeholder="linkedin"]').forEach(a => setPlaceholderLink(a, links.linkedin));
document.querySelectorAll('[data-placeholder="github"]').forEach(a => setPlaceholderLink(a, links.github));
document.getElementById('resumeLink').addEventListener('click', event => {
  if (!links.resume) { event.preventDefault(); alert('Add your resume file and update the resume URL in script.js first.'); }
  else event.currentTarget.href = links.resume;
});
document.querySelectorAll('.placeholder-link').forEach(a => a.addEventListener('click', event => {
  event.preventDefault();
  const key = a.dataset.placeholder === 'smartphone project' ? links.smartphoneProject : links.project;
  if (key) window.open(key, '_blank', 'noopener,noreferrer');
  else alert('Add your project URL in script.js first.');
}));
function setPlaceholderLink(anchor, url) {
  if (url) { anchor.href = url; anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; }
  else anchor.addEventListener('click', event => { event.preventDefault(); alert('Add your profile URL in script.js first.'); });
}
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get('name');
  const email = form.get('email');
  const message = form.get('message');
  const recipient = 'nandhakis27@gmail.com'; // Replace with your real email.
  if (recipient === 'YOUR_EMAIL@example.com') {
    alert('Please replace YOUR_EMAIL@example.com in index.html with your real email address first.');
    return;
  }
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
