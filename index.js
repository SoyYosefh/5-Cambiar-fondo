// Descripción: Crea una página con un botón que cambie el color de fondo de la página al azar cada vez que se hace clic.
// JavaScript para generar colores aleatorios y cambiar el fondo.

// Función para generar colores aleatorios
function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Función para cambiar el color de fondo al azar
function changeColor() {
  document.body.style.backgroundColor = randomColor();
}

// Botón que cambia el color de fondo con id 'cambiar'
document.getElementById('cambiar').addEventListener('click', changeColor);