//CODIGO DE SEBA//
// Mostrar contenido de la primera opción por defecto
  showContent(1);

  // Agregar event listeners para hover en los enlaces de la lista de servicios
  listItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      item.style.fontWeight = 'bold';
      item.style.textDecoration = 'underline';
    });

    item.addEventListener('mouseout', function() {
      if (!item.classList.contains('active')) {
        item.style.fontWeight = 'normal';
        item.style.textDecoration = 'none';
      }
    });
  });
});

// Función para mostrar contenido y estilizar el elemento clicado
function showContent(index) {
  const contentContainer = document.getElementById('dynamic-content');
  const parentContainer = contentContainer.parentElement;
  const footer = document.querySelector('footer');
  const listItems = document.querySelectorAll('.lista-servicios ul li a');
  let content = '';
  let additionalContent = '';

  // Eliminar negrita y subrayado de todos los elementos
  listItems.forEach(item => {
    item.style.fontWeight = 'normal';
    item.style.textDecoration = 'none';
    item.classList.remove('active');
  });

  // Añadir negrita y subrayado al elemento clicado
  const clickedItem = document.querySelector(`.lista-servicios ul li a[onclick="showContent(${index})"]`);
  if (clickedItem) {
    clickedItem.style.fontWeight = 'bold';
    clickedItem.style.textDecoration = 'underline';
    clickedItem.classList.add('active');
  }

  switch (index) {
    // Tax Planning
    case 1:
      content = `
        <div class="seccion izquierda">
          <div class="bg-img-izq"></div>
          <div class="content-container">
            <h1>Tax Planning</h1>
            <div class="linea-2"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Possimus laboriosam aliquam 
                commodi saepe sint tempore, doloribus ipsam 
                repellat consequatur ex delectus, adipisci 
                tenetur inventore, amet aperiam mollitia unde ipsum nisi!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vel incidunt sunt illum voluptas minima at ea consectetur itaque, facilis sapiente, commodi iusto quae libero debitis odio ipsum, assumenda ipsa.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus nihil reiciendis labore corporis ratione asperiores, nam minima voluptatem mollitia, recusandae eligendi fugiat provident repellendus. Explicabo ipsa incidunt dolorem a?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex, officia deserunt ullam veniam vero provident natus! Corporis non officiis dolore totam laboriosam, quas natus quaerat corrupti, quibusdam, voluptatem ea!

            </p>
          </div>
        </div>

        <div class="seccion derecha">
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
            <li>Servicio 4</li>
            <li>Servicio 5</li>
            <li>Servicio 6</li>
            <li>Servicio 7</li>
          </ul>
        </div>
        `;
      break;
    // Estrategia y Finanzas
    case 2:
      content = `
        <div class="seccion izquierda">
          <div class="bg-img-izq"></div>
          <div class="content-container">
            <h1>Estrategia Corporativa</h1>
            <div class="linea-2"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Possimus laboriosam aliquam 
                commodi saepe sint tempore, doloribus ipsam 
                repellat consequatur ex delectus, adipisci 
                tenetur inventore, amet aperiam mollitia unde ipsum nisi!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vel incidunt sunt illum voluptas minima at ea consectetur itaque, facilis sapiente, commodi iusto quae libero debitis odio ipsum, assumenda ipsa.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus nihil reiciendis labore corporis ratione asperiores, nam minima voluptatem mollitia, recusandae eligendi fugiat provident repellendus. Explicabo ipsa incidunt dolorem a?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex, officia deserunt ullam veniam vero provident natus! Corporis non officiis dolore totam laboriosam, quas natus quaerat corrupti, quibusdam, voluptatem ea!

            </p>
          </div>
        </div>

        <div class="seccion derecha">
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
            <li>Servicio 4</li>
            <li>Servicio 5</li>
            <li>Servicio 6</li>
            <li>Servicio 7</li>
          </ul>
        </div>`;
        additionalContent = `
        <div class="secciones" id="dynamic-content">
          <div class="seccion izquierda" style="background-color: white; color: black;">
              <div class="content-container">
                <h1>Estrategia Corporativa</h1>
                <div class="linea-2"></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Possimus laboriosam aliquam 
                    commodi saepe sint tempore, doloribus ipsam 
                    repellat consequatur ex delectus, adipisci 
                    tenetur inventore, amet aperiam mollitia unde ipsum nisi!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vel incidunt sunt illum voluptas minima at ea consectetur itaque, facilis sapiente, commodi iusto quae libero debitis odio ipsum, assumenda ipsa.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus nihil reiciendis labore corporis ratione asperiores, nam minima voluptatem mollitia, recusandae eligendi fugiat provident repellendus. Explicabo ipsa incidunt dolorem a?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex, officia deserunt ullam veniam vero provident natus! Corporis non officiis dolore totam laboriosam, quas natus quaerat corrupti, quibusdam, voluptatem ea!
                </p>
            </div>
          </div>

          <div class="seccion derecha">
            <div class="bg-img-der"></div>
            <ul style="color: white;">
              <li>Servicio 1</li>
              <li>Servicio 2</li>
              <li>Servicio 3</li>
              <li>Servicio 4</li>
              <li>Servicio 5</li>
              <li>Servicio 6</li>
              <li>Servicio 7</li>
            </ul>
          </div>
        </div>
        
        <div class="secciones" id="dynamic-content">
          <div class="seccion izquierda">
            <div class="bg-img-izq"></div>
              <div class="content-container">
              <h1>Estrategia Corporativa</h1>
              <div class="linea-2"></div>
              <p>
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Possimus laboriosam aliquam 
                  commodi saepe sint tempore, doloribus ipsam 
                  repellat consequatur ex delectus, adipisci 
                  tenetur inventore, amet aperiam mollitia unde ipsum nisi!
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vel incidunt sunt illum voluptas minima at ea consectetur itaque, facilis sapiente, commodi iusto quae libero debitis odio ipsum, assumenda ipsa.
              </p>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus nihil reiciendis labore corporis ratione asperiores, nam minima voluptatem mollitia, recusandae eligendi fugiat provident repellendus. Explicabo ipsa incidunt dolorem a?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex, officia deserunt ullam veniam vero provident natus! Corporis non officiis dolore totam laboriosam, quas natus quaerat corrupti, quibusdam, voluptatem ea!
              </p>
            </div>
          </div>

          <div class="seccion derecha">
            <ul>
              <li>Servicio 1</li>
              <li>Servicio 2</li>
              <li>Servicio 3</li>
              <li>Servicio 4</li>
              <li>Servicio 5</li>
              <li>Servicio 6</li>
              <li>Servicio 7</li>
            </ul>
          </div>
        </div>`;
      break;
    // Legal Corporativo
    case 3:
      content = `
        <div class="seccion izquierda">
          <div class="bg-img-izq"></div>
          <div class="content-container">
            <h1>Legal Corporativo</h1>
            <div class="linea-2"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Possimus laboriosam aliquam 
                commodi saepe sint tempore, doloribus ipsam 
                repellat consequatur ex delectus, adipisci 
                tenetur inventore, amet aperiam mollitia unde ipsum nisi!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vel incidunt sunt illum voluptas minima at ea consectetur itaque, facilis sapiente, commodi iusto quae libero debitis odio ipsum, assumenda ipsa.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus nihil reiciendis labore corporis ratione asperiores, nam minima voluptatem mollitia, recusandae eligendi fugiat provident repellendus. Explicabo ipsa incidunt dolorem a?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex, officia deserunt ullam veniam vero provident natus! Corporis non officiis dolore totam laboriosam, quas natus quaerat corrupti, quibusdam, voluptatem ea!

            </p>
          </div>
        </div>

        <div class="seccion derecha">
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
            <li>Servicio 4</li>
            <li>Servicio 5</li>
            <li>Servicio 6</li>
            <li>Servicio 7</li>
          </ul>
        </div>`;
      break;
    // Defensa Judicial y Tributaria
    case 4:
      content = `
        <div class="seccion izquierda">
          <div class="bg-img-izq"></div>
          <div class="content-container">
            <h1>Defensa Judicial y Tributaria</h1>
            <div class="linea-2"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Possimus laboriosam aliquam 
                commodi saepe sint tempore, doloribus ipsam 
                repellat consequatur ex delectus, adipisci 
                tenetur inventore, amet aperiam mollitia unde ipsum nisi!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vel incidunt sunt illum voluptas minima at ea consectetur itaque, facilis sapiente, commodi iusto quae libero debitis odio ipsum, assumenda ipsa.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus nihil reiciendis labore corporis ratione asperiores, nam minima voluptatem mollitia, recusandae eligendi fugiat provident repellendus. Explicabo ipsa incidunt dolorem a?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex, officia deserunt ullam veniam vero provident natus! Corporis non officiis dolore totam laboriosam, quas natus quaerat corrupti, quibusdam, voluptatem ea!

            </p>
          </div>
        </div>

        <div class="seccion derecha">
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
            <li>Servicio 4</li>
            <li>Servicio 5</li>
            <li>Servicio 6</li>
            <li>Servicio 7</li>
          </ul>
        </div>`;
      break;
    // Contabilidad
    case 5:
      content = `
        <div class="seccion izquierda">
          <div class="bg-img-izq"></div>
          <div class="content-container">
            <h1>Contabilidad</h1>
            <div class="linea-2"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Possimus laboriosam aliquam 
                commodi saepe sint tempore, doloribus ipsam 
                repellat consequatur ex delectus, adipisci 
                tenetur inventore, amet aperiam mollitia unde ipsum nisi!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vel incidunt sunt illum voluptas minima at ea consectetur itaque, facilis sapiente, commodi iusto quae libero debitis odio ipsum, assumenda ipsa.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus nihil reiciendis labore corporis ratione asperiores, nam minima voluptatem mollitia, recusandae eligendi fugiat provident repellendus. Explicabo ipsa incidunt dolorem a?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ex, officia deserunt ullam veniam vero provident natus! Corporis non officiis dolore totam laboriosam, quas natus quaerat corrupti, quibusdam, voluptatem ea!

            </p>
          </div>
        </div>

        <div class="seccion derecha">
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
            <li>Servicio 4</li>
            <li>Servicio 5</li>
            <li>Servicio 6</li>
            <li>Servicio 7</li>
          </ul>
        </div>`;
      break;
    default:
      content = '<div class="dynamic-box">No content available.</div>';
  }

  contentContainer.innerHTML = content;

  if (additionalContent) {
    const additionalContentElement = document.createElement('div');
    additionalContentElement.innerHTML = additionalContent;
  
    // Verificar si el footer existe antes de insertar el contenido adicional
    if (footer) {
      footer.insertAdjacentElement('beforebegin', additionalContentElement);
    } else {
      console.error('Footer element not found.');
    }
  }
}
//FIN CODIGO SEBA//


