const prompt = require ('prompt-sync')();
//Ejercicio 1: Calcular el precio final con IVA. Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.
let precioProducto = parseFloat(prompt('Ingrese el precio del producto: '));
let porcentajeIva = parseInt(prompt('Ingrese el porcentaje del IVA: '));
let valorIva = (precioProducto*porcentajeIva)/100;
let precioFinal = (precioProducto, valorIva) => precioProducto + valorIva;

console.log('El precio final es de $' + (precioFinal (precioProducto,valorIva)) + '.');
 