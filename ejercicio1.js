const prompt = require('prompt-sync')({ sigint: true });
// 1- Solicitar al usuario que ingrese un número cualquiera
// 2- Calcule el doble de ese numero
// 3- Muestre el resultado por consola
let numero = prompt('Ingrese un número: ');
let doble = numero*2
console.log ('El doble de '+ numero +' es: '+ doble);
