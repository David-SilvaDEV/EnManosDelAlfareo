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

// Selecciona TODOS los elementos con la clase .donaciones
const donaciones = document.querySelectorAll('.donaciones');
const cerrar = document.querySelector('#cerrar');
const overlay = document.querySelector('#overlay');

// Recorre cada botón/enlace de donaciones
donaciones.forEach(boton => {
  boton.addEventListener('click', (e) => {
    e.preventDefault(); // evita saltar al inicio por el href="#"
    overlay.classList.remove('oculto');
  });
});

cerrar.addEventListener('click', () => overlay.classList.add('oculto'));
