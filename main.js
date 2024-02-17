//***********************cerrar y abrir secciones******************************************* */

const sections = ["quienSoy", "misServicios", "contacto"];

// Ocultar todas las secciones excepto la de Balance al cargar la página
sections.forEach((sectionId) => {
  const section = document.getElementById(sectionId);
  if (sectionId !== "quienSoy") {
    section.classList.add("hidden");
  }
});

// Agregar event listeners para cada enlace del menú
const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = event.target.getAttribute("href").substring(1);
    // Ocultar todas las secciones
    sections.forEach((sectionId) => {
      document.getElementById(sectionId).classList.add("hidden");

      // //oculta el menu hamburguesa si se hace click en alguna sección
      menuHambueguesa.classList.toggle("hidden");
    });
    // Mostrar la sección correspondiente al enlace clicado
    document.getElementById(targetId).classList.remove("hidden");
  });
});
/*****************************abrir y cerral el menu hambuerguesa*********************/
const menuHambueguesa = document.getElementById("mobile-menu");

document.getElementById("hamburger").addEventListener("click", () => {
  menuHambueguesa.classList.remove("hidden");
});

document.getElementById("boton-menu-cerrar").addEventListener("click", () => {
  menuHambueguesa.classList.add("hidden");
});

// const contenedor = document.getElementById("contenedor");

// contenedor.addEventListener("mousemove", function (e) {
//   for (let i = 0; i < 3; i++) {
//     const mariposa = document.createElement("img");
//     mariposa.src = "imagenes/mariposaSinFondo.png"; // Ruta de la imagen de la mariposa
//     mariposa.classList.add("mariposaSinFondo");
//     mariposa.style.position = "fixed"; // Cambia la posición a fija para que esté relativa al viewport

//     // Ajusta las coordenadas de posición para que estén un poco más arriba del cursor
//     const offsetX = 80; // Ajusta estos valores según tu preferencia
//     const offsetY = 120; // Ajusta estos valores según tu preferencia
//     const xPos = e.pageX - offsetX;
//     const yPos = e.pageY - offsetY;

//     // Calcula un ángulo aleatorio entre 0 y 360 grados
//     const angle = Math.random() * 360;

//     // Calcula las nuevas posiciones usando el ángulo y una distancia aleatoria
//     const distance = Math.random() * 50 + 20; // Distancia entre 20 y 70 pixels
//     const newX = xPos + distance * Math.cos(angle);
//     const newY = yPos + distance * Math.sin(angle);

//     mariposa.style.left = `${newX}px`; // Utiliza la posición de la página para fijar la posición de la mariposa
//     mariposa.style.top = `${newY}px`;
//     document.body.appendChild(mariposa); // Añade la mariposa al body para que aparezca por encima de otros elementos

//     setTimeout(() => {
//       mariposa.style.transform = "translate(-50%, -50%) scale(0.2)"; // Ajusta el tamaño de la mariposa
//     }, 20);

//     setTimeout(() => {
//       mariposa.remove(); // Elimina la mariposa después de un tiempo
//     }, 1000); // Cambia este valor para ajustar la duración de las mariposas
//   }
// });

const whatsappIcon = document.getElementById("whatsapp-link");

whatsappIcon.addEventListener("mousemove", function (e) {
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
});
