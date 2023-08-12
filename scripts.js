const openMenuButton = document.querySelector('.open-menu');
const menuNavigation = document.querySelector('.menu-navigation');
const closeMenuButton = document.querySelector('.menu-close');

openMenuButton.addEventListener('click', () => {
  openMenuButton.classList.toggle('open');
  menuNavigation.classList.toggle('show');
  menuNavigation.classList.toggle('open');
});

closeMenuButton.addEventListener('click', () => {
  openMenuButton.classList.remove('open');
  menuNavigation.classList.remove('show');
});

function closeMenu() {
  openMenuButton.classList.remove('open');
  menuNavigation.classList.remove('open');
}