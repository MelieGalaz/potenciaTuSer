//***********************cerrar y abrir secciones******************************************* */
const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevenir el comportamiento por defecto de los enlaces
    event.preventDefault();

    // Obtener el href del enlace clicado
    const targetHref = link.getAttribute("href");

    // Redirigir a la página correspondiente
    window.location.href = targetHref;
  });
});
// const sections = ["quienSoy", "misServicios", "contacto"];

// // Ocultar todas las secciones excepto la de Balance al cargar la página
// sections.forEach((sectionId) => {
//   const section = document.getElementById(sectionId);
//   if (sectionId !== "quienSoy") {
//     section.classList.add("hidden");
//   }
// });

// // Agregar event listeners para cada enlace del menú
// const menuLinks = document.querySelectorAll("nav a");
// menuLinks.forEach((link) => {
//   link.addEventListener("click", (event) => {
//     const targetId = event.target.getAttribute("href").substring(1);
//     // Ocultar todas las secciones
//     sections.forEach((sectionId) => {
//       document.getElementById(sectionId).classList.add("hidden");

//       // //oculta el menu hamburguesa si se hace click en alguna sección
//       menuHambueguesa.classList.toggle("hidden");
//     });
//     // Mostrar la sección correspondiente al enlace clicado
//     document.getElementById(targetId).classList.remove("hidden");
//   });
// });
/*****************************abrir y cerral el menu hambuerguesa*********************/
const menuHambueguesa = document.getElementById("mobile-menu");

document.getElementById("hamburger").addEventListener("click", () => {
  menuHambueguesa.classList.remove("hidden");
});

document.getElementById("boton-menu-cerrar").addEventListener("click", () => {
  menuHambueguesa.classList.add("hidden");
});

const whatsappIcon = document.getElementById("whatsapp-link");

whatsappIcon.addEventListener("mousemove", function (e) {
  if (window.innerWidth > 768) {
    // Verifica si el ancho de la ventana es mayor que el de un celular típico (768px)
    whatsappIcon.classList.add("hover:text-fuchsia-500");
    for (let i = 0; i < 3; i++) {
      const mariposa = document.createElement("img");
      mariposa.src = "imagenes/mariposa5.gif"; // Ruta del archivo GIF de la mariposa
      mariposa.classList.add("mariposa5");
      mariposa.style.position = "fixed"; // Cambia la posición a fija para que esté relativa al viewport

      // Coordenadas del icono de WhatsApp
      const whatsappRect = whatsappIcon.getBoundingClientRect();
      const xPos = whatsappRect.left + whatsappRect.width / 2;
      const yPos = whatsappRect.top + whatsappRect.height / 2;

      // Calcula un ángulo aleatorio entre 0 y 360 grados
      const angle = Math.random() * 360;

      // Calcula las nuevas posiciones usando el ángulo y una distancia aleatoria
      const distance = Math.random() * 50 + 50; // Distancia entre 20 y 70 pixels
      const newX = xPos + distance * Math.cos(angle);
      const newY = yPos + distance * Math.sin(angle);

      mariposa.style.left = `${newX}px`; // Utiliza la posición de la página para fijar la posición de la mariposa
      mariposa.style.top = `${newY}px`;
      document.body.appendChild(mariposa); // Añade la mariposa al body para que aparezca por encima de otros elementos

      setTimeout(() => {
        mariposa.style.transform = "translate(-50%, -50%) scale(0.3)"; // Ajusta el tamaño de la mariposa
      }, 20);

      setTimeout(() => {
        mariposa.remove(); // Elimina la mariposa después de un tiempo
      }, 1000); // Cambia este valor para ajustar la duración de las mariposas
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".imgDesplazada");

  // Función para verificar si el elemento está en el viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para mostrar las imágenes si están en el viewport
  function showImagesOnScroll() {
    containers.forEach((container) => {
      if (isInViewport(container)) {
        container.classList.add("imgVisible");
      } else {
        container.classList.remove("imgVisible");
      }
    });
  }

  // Mostrar las imágenes al cargar la página
  showImagesOnScroll();

  // Mostrar las imágenes al hacer scroll
  window.addEventListener("scroll", showImagesOnScroll);
});
