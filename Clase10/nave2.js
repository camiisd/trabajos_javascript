let especie = prompt("¿Cuál es tu especie? (Humano, Alien, Cyborg)");

let puedeSubir = (edad >= 18 && especie !== "") || nombre === "Capitana";

const mensaje = puedeSubir
  ? "✅ ¡Bienvenida a bordo, " + (nombre || "Tripulante Desconocido") + "!"
  : "⛔ Acceso denegado. No cumplís los requisitos.";

console.log(mensaje);

