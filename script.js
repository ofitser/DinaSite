const toggleBtn = document.querySelector('.header__toggle-btn');
const mobileMenu = document.querySelector('.header__menu--mobile');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

