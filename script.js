const btn = document.querySelector('#menu-btn');
const mobileBtn = document.querySelector('#mobile-menu');

function navToggle() {
  btn.classList.toggle('open');
  mobileBtn.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle);
