document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMenu");
  const menuSection = document.getElementById("menu");
  const irArriba = document.getElementById("irArriba");

  toggleButton.addEventListener("click", () => {
    if (menuSection.style.display === "none") {
      menuSection.style.display = "block";
      toggleButton.textContent = "Ocultar Menú";
    } else {
      menuSection.style.display = "none";
      toggleButton.textContent = "Mostrar Menú";
    }
  });

  // Botón "Ir arriba"
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      irArriba.style.display = "block";
    } else {
      irArriba.style.display = "none";
    }
  });

  irArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Testimonios rotativos
  const testimonios = [
    '"La comida es increíble y el ambiente muy acogedor. ¡Volveremos!" - Camila G.',
    '"El mejor restaurante que he visitado en la ciudad." - Andrés P.',
    '"Excelente servicio y sabores auténticos." - Laura M.'
  ];

  let index = 0;
  const testimonialDiv = document.getElementById("testimonial");

  setInterval(() => {
    index = (index + 1) % testimonios.length;
    testimonialDiv.innerHTML = `<p>${testimonios[index].split(' - ')[0]}</p><strong>- ${testimonios[index].split(' - ')[1]}</strong>`;
  }, 5000);
});
