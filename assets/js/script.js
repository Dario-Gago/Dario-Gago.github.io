const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

// Evento para alternar el menú
menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('active');
});
