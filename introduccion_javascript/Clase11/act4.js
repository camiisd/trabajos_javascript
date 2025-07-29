const prompt = require('prompt-sync')();

// Escribe un programa que le pida al usuario un número 

let numero = parseInt(prompt ('Ingrese un número: ')); 
let moduloNumero = numero % 2;
// y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.
let mensaje = (moduloNumero === 0) ?'El número ingresado es par.' : 'El número ingresado es impar.';

console.log(mensaje);