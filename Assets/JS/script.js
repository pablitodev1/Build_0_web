
  const toggleButton = document.getElementById('boton-abrir');
  const closeButton = document.getElementById('boton-cerrar');
  const content = document.querySelector('.contenido-principal');
  const panel = document.querySelector('.panel-principal');

  toggleButton.addEventListener('click', () => {
    content.style.width = '50%';
    panel.style.transform = 'translateX(-100%)';
  });

  closeButton.addEventListener('click', () => {
    content.style.width = '100%';
    panel.style.transform = 'translateX(0)';
  });

