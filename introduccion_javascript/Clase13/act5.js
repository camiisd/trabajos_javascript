const prompt = require('prompt-sync')();
//Ejercicio 5: Concatenar nombres (función expresada). 
// Crea una función expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido) como parámetros y devuelva el nombre completo concatenado.
let concatenarNombres = function (nombre, apellido) {
    return nombre + ' '+ apellido
}

nombre = prompt ('Ingrese su nombre: ');
apellido = prompt ('Ingrese su apellido: ');

console.log('Bienvenid@ ' + concatenarNombres (nombre, apellido) + ' :).');