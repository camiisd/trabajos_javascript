const prompt = require ('prompt-sync')({sigint:true});
//ingresar un número entero
let numero = parseFloat (prompt ('Ingrese un número entero: '));
//si es par o no usando modulo
let verificacion = numero%2;
let mensaje = '';
if (verificacion === 0) {
    mensaje = 'par.'
} else {
    mensaje = 'impar.git '
}
// mostrar mensaje de par o impar
console.log ('El número ingresado es: ' + mensaje)