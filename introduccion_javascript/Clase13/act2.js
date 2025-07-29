const prompt = require('prompt-sync')();
//Ejercicio 2: Número mayor (función expresada) Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.
let numUno;
let numDos;

let encontrarMayor = function (numUno, numDos) {
    return (numUno > numDos) ?'El número ' + numUno + ' es mayor que '+ numDos+'.' :'El número ' + numDos + ' es mayor que '+ numUno+'.'
};

numUno = parseInt (prompt('Ingrese un número: '));
numDos = parseInt (prompt('Ingrese otro número: '));

console.log (encontrarMayor(numUno, numDos));