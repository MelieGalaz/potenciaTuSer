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
