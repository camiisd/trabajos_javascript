const prompt = require ('prompt-sync')({sigint:true});
//declarar dos varibles numéricas
let numero1 = Number();
let numero2 = Number();
//pedir que ingrese dos números
numero1 = Number(prompt ('Ingrese un número '));
numero2 = Number (prompt ('Ingrese otro número '));
//mostrar cuál es el mayor o si son iguales
let mensaje = '';
if (numero1 === numero2) {
    mensaje = 'Los números son iguales.'
} else if (numero1 > numero2 ) {
    mensaje = 'El número ' + numero1 + ' es mayor al número ' + numero2
} else {
    mensaje = 'El número  ' + numero2 + ' es mayor al número ' + numero1
}

console.log (mensaje);