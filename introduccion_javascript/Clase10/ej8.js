//Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. 
//Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
const prompt = require('prompt-sync')();


let temperaturaUsuario = prompt ('Por favor ingrese la temperatura en grados celsius (sólo números): ');
let celsius = parseFloat (temperaturaUsuario);

const fahrenheit = (celsius * 9/5) + 32;


let mensajeFinal = `La temperatura ${celsius} °C equivale a ${fahrenheit} °F (Fahrenheit).`;

console.log (mensajeFinal);
