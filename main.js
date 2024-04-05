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

// whatsappIcon.addEventListener("mousemove", function (e) {
//   if (window.innerWidth > 768) {
//     // Verifica si el ancho de la ventana es mayor que el de un celular típico (768px)
//     whatsappIcon.classList.add("hover:text-fuchsia-500");
//     for (let i = 0; i < 3; i++) {
//       const mariposa = document.createElement("img");
//       mariposa.src = "imagenes/mariposa5.gif"; // Ruta del archivo GIF de la mariposa
//       mariposa.classList.add("mariposa5");
//       mariposa.style.position = "fixed"; // Cambia la posición a fija para que esté relativa al viewport

//       // Coordenadas del icono de WhatsApp
//       const whatsappRect = whatsappIcon.getBoundingClientRect();
//       const xPos = whatsappRect.left + whatsappRect.width / 2;
//       const yPos = whatsappRect.top + whatsappRect.height / 2;

//       // Calcula un ángulo aleatorio entre 0 y 360 grados
//       const angle = Math.random() * 360;

//       // Calcula las nuevas posiciones usando el ángulo y una distancia aleatoria
//       const distance = Math.random() * 50 + 50; // Distancia entre 20 y 70 pixels
//       const newX = xPos + distance * Math.cos(angle);
//       const newY = yPos + distance * Math.sin(angle);

//       mariposa.style.left = `${newX}px`; // Utiliza la posición de la página para fijar la posición de la mariposa
//       mariposa.style.top = `${newY}px`;
//       document.body.appendChild(mariposa); // Añade la mariposa al body para que aparezca por encima de otros elementos

//       setTimeout(() => {
//         mariposa.style.transform = "translate(-50%, -50%) scale(0.3)"; // Ajusta el tamaño de la mariposa
//       }, 20);

//       setTimeout(() => {
//         mariposa.remove(); // Elimina la mariposa después de un tiempo
//       }, 1000); // Cambia este valor para ajustar la duración de las mariposas
//     }
//   }
// });

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

// const btnServicios = document.querySelectorAll("btn-servicio ");

const servicio1 = document.getElementById("servicio1");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const servicioUnoContenedor = document.getElementById("servicio-1-contenedor");
const servicioDosContenedor = document.getElementById("servicio-2-contenedor");
const servicioTresContenedor = document.getElementById("servicio-3-contenedor");
const servicioCuatroContenedor = document.getElementById(
  "servicio-4-contenedor"
);
const servicioCincoContenedor = document.getElementById(
  "servicio-5-contenedor"
);
const servicioSeisContenedor = document.getElementById("servicio-6-contenedor");
const servicioSieteContenedor = document.getElementById(
  "servicio-7-contenedor"
);
const btnServicio = document.querySelectorAll(".btn-servicio");
console.log(btnServicio);
const sectionCard = document.getElementById("section-card");
btn1.addEventListener("click", () => {
  servicioUnoContenedor.classList.remove("hidden");

  sectionCard.classList.add("hidden");
});
btn2.addEventListener("click", () => {
  servicioDosContenedor.classList.remove("hidden");
  sectionCard.classList.add("hidden");
});
btn3.addEventListener("click", () => {
  servicioTresContenedor.classList.remove("hidden");
  sectionCard.classList.add("hidden");
});
btn4.addEventListener("click", () => {
  servicioCuatroContenedor.classList.remove("hidden");
  sectionCard.classList.add("hidden");
});

btn5.addEventListener("click", () => {
  servicioCincoContenedor.classList.remove("hidden");
  sectionCard.classList.add("hidden");
});
btn6.addEventListener("click", () => {
  servicioSeisContenedor.classList.remove("hidden");
  sectionCard.classList.add("hidden");
});
btn7.addEventListener("click", () => {
  servicioSieteContenedor.classList.remove("hidden");
  sectionCard.classList.add("hidden");
});

btnServicio.forEach((btn) => {
  btn.addEventListener("click", () => {
    sectionCard.classList.remove("hidden");
    servicioUnoContenedor.classList.add("hidden");
    servicioDosContenedor.classList.add("hidden");
    servicioTresContenedor.classList.add("hidden");
    servicioCuatroContenedor.classList.add("hidden");
    servicioCincoContenedor.classList.add("hidden");
    servicioSeisContenedor.classList.add("hidden");
    servicioSieteContenedor.classList.add("hidden");
  });
});
