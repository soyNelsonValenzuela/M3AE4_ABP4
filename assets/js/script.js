// JS mínimo para abrir/cerrar el menú en móvil
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});