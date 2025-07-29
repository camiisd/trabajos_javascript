const prompt = require('prompt-sync')();
//Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista). 
// Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
let convertirCelsiusAFahrenheit = function (celsius){
    return (celsius*9/5)+32
};

celsius = parseFloat (prompt('Ingrese la temperatura: ')); 
console.log('La temperatura ingresada equivale a ' + convertirCelsiusAFahrenheit (celsius) + '°F (Fahrenheit).');