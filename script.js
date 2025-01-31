// Script para manejar el formulario de comentarios
document
  .getElementById("comentarioForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener el valor del comentario
    const comentario = document.getElementById("comentario").value;

    // Mostrar un mensaje de confirmación
    alert("¡Gracias por tu comentario! Lo hemos recibido correctamente.");

    // Limpiar el formulario
    document.getElementById("comentarioForm").reset();
  });

// Gráfico de estadísticas (ejemplo)
const ctx = document.getElementById("graficoBasura").getContext("2d");
const graficoBasura = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Basura generada (kg)",
        data: [120, 150, 200, 180, 250, 300],
        backgroundColor: "#4CAF50",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Cantidad de basura (kg)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Meses del año",
        },
      },
    },
  },
});

// Animaciones adicionales
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("animate__animated", "animate__fadeIn");
  });
});

// Función para mostrar un mensaje de bienvenida
function mostrarMensajeBienvenida() {
  const mensaje = document.createElement("div");
  mensaje.textContent = "¡Bienvenido a la página de la Secundaria Técnica 73!";
  mensaje.style.position = "fixed";
  mensaje.style.top = "20px";
  mensaje.style.right = "20px";
  mensaje.style.backgroundColor = "#4CAF50";
  mensaje.style.color = "white";
  mensaje.style.padding = "10px";
  mensaje.style.borderRadius = "5px";
  mensaje.style.zIndex = "1000";
  document.body.appendChild(mensaje);

  // Eliminar el mensaje después de 5 segundos
  setTimeout(() => {
    mensaje.remove();
  }, 5000);
}

// Llamar a la función de bienvenida al cargar la página
mostrarMensajeBienvenida();

// Función para agregar un botón de "Volver arriba"
function agregarBotonVolverArriba() {
  const boton = document.createElement("button");
  boton.textContent = "↑ Volver arriba";
  boton.style.position = "fixed";
  boton.style.bottom = "20px";
  boton.style.right = "20px";
  boton.style.backgroundColor = "#4CAF50";
  boton.style.color = "white";
  boton.style.padding = "10px";
  boton.style.border = "none";
  boton.style.borderRadius = "5px";
  boton.style.cursor = "pointer";
  boton.style.zIndex = "1000";
  boton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.appendChild(boton);
}

// Llamar a la función para agregar el botón
agregarBotonVolverArriba();
