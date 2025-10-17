document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.div-icon'); // Icono hamburguesa
  const menu = document.querySelector('.ul-hambuerguesa'); // El menú desplegable

  // Al hacer clic en el icono hamburguesa, mostrar u ocultar el menú
  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Opcional: Cerrar el menú si se hace clic fuera del menú
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove('active');
    }
  });
});
