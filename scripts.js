const openButton = document.querySelector('.open-menu');
const closeButton = document.querySelector('.menu-close');
const menu = document.querySelector('.menu-navigation');


openButton.addEventListener('click', () => {
  menu.classList.add('open'); // Adiciona a classe 'open' para abrir o menu
});


closeButton.addEventListener('click', () => {
  menu.classList.remove('open'); // Remove a classe 'open' para fechar o menu
});

function closeMenu() {
  menu.classList.toggle('open'); // Fecha o menu quando um link é clicado
}