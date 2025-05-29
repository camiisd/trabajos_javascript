// Simular un sistema de ingreso a una nave espacial donde los tripulantes deben pasar filtros de validación usando variables, coerción, y operadores lógicos.
// 🧩 Desarrollo:
// Pedí a tus alumnas que creen un script que haga lo siguiente:
const prompt = require('prompt-sync')({ sigint: true });

let nombre = prompt("Ingrese su nombre galáctico: ");
let edad = parseInt (prompt ('Cuál es tu edad terrestre: '));
let especie = prompt ('Cuál es tu especie (Humano, Alien, Cyborg): ');


let tienePermiso = (edad > 18 && especie !=='') || nombre === 'Capitana';

const mensaje = tienePermiso 
    ?'Bienvenido a bordo '+ (nombre || "tripulante desconocido") + '!' //if
    :'Lo siento, acceso denegado. No cumples con los requisitos para ingresar a la nave espacial.';//else

console.log(mensaje);



