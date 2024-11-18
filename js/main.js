// Seleciona o botão hambúrguer e a lista de navegação
const hamburger = document.getElementById('hamburger');
const navbarList = document.getElementById('navbar-list');

// Adiciona o evento de clique no botão hambúrguer
hamburger.addEventListener('click', () => {
  // Alterna a classe 'active' para mostrar/ocultar o menu
  navbarList.classList.toggle('active');
});
