// Menu de navegação do Pet Feliz

const menu = document.querySelector('.menu-toggle');
const navegacao = document.querySelector('#menu');

if (menu && navegacao) {
  menu.addEventListener('click', () => {
    navegacao.classList.toggle('active');
  });
}
