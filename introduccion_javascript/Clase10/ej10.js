const prompt = require('prompt-sync')();

//Cálculo de Descuento: Escribe un programa que calcule el precio final de un producto después de aplicar un descuento.
// Pide al usuario que ingrese el precio original y el porcentaje de descuento, 
console.log('Para calcular el precio final con el descuento correspondiente, ingrese a continuación:');

let valorOriginal = parseFloat(prompt ('El valor original (sin descuento): '));
let descuento = parseFloat(prompt ('El porcentaje del descuento: '));

let valorDescuento = (valorOriginal *descuento) / 100;
let valorFinal = valorOriginal - valorDescuento;


// y muestra el precio final.

console.log ('El valor final es de: $' + valorFinal+ '.')