const prompt = require ('prompt-sync')({sigint:true});
// usuario ingrese 3 números
let numUno = prompt ('Ingrese el número a: ');
let numDos = prompt ('Ingrese el número b: ');
let numTres = prompt ('Ingrese el número c: ');
// determinar cuál es el mayor
let mensaje = '';

let num1= numUno > numDos && numUno > numTres
let num2= numDos > numUno && numDos > numTres
let num3 = numTres > numUno && numTres > numDos

mensaje= ''

if (num1 === true) {
    mensaje = 'El número mayor es ' + numUno
} else if (num2 === true) {
    mensaje = 'El número mayor es ' + numDos
} else {
    mensaje = 'El número mayor es ' + numTres
}
console.log(mensaje);