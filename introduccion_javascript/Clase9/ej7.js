const prompt = require('prompt-sync')({ sigint: true });

//Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)
const pesoL= 2.20462
let pesoKg = parseFloat(prompt('Por favor ingrese su peso en kilogramos: '));
// Convertir el peso de kilogramos a libras
let pesoUser = pesoKg * pesoL;
// Mostrar el resultado con un mensaje

let mensaje = 'Su peso en kilogramos equivale a ' + pesoUser + ' libras.';
console.log(mensaje);