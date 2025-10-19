const btn = document.getElementById('lang-toggle');
let lang = 'vi';

btn.addEventListener('click', () => {
  lang = lang === 'vi' ? 'en' : 'vi';
  btn.textContent = lang === 'vi' ? 'EN' : 'VI';
  document.querySelectorAll('.lang').forEach(el => {
    const txt = el.getAttribute(`data-${lang}`);
    if (txt) el.textContent = txt;
  });
});
