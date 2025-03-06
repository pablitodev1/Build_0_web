// Script para menu responsivo HEADER//
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".nav-menu");

        burger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        burger.classList.toggle("active");
        navMenu.classList.toggle("active"); 
    }


    const navLink = document.querySelectorAll(".nav-link");

        navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
    }
 
 //Slide-in NOSOTROS
  document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', (event) => {
      
      if (event.target.classList.contains('boton-abrir')) {
        const container = event.target.closest('.contenedor-nosotros');
        const content = container.querySelector('.contenido-principal');
        const panel = container.querySelector('.panel-principal');
  
        content.style.width = '50%'; 
        panel.style.transform = 'translateX(-100%)'; 
      }
  
      
      if (event.target.classList.contains('boton-cerrar')) {
        const container = event.target.closest('.contenedor-nosotros');
        const content = container.querySelector('.contenido-principal');
        const panel = container.querySelector('.panel-principal');
  
        content.style.width = '100%'; 
        panel.style.transform = 'translateX(0)'; 
      }
    });
  });
