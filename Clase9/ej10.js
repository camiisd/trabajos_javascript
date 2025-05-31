const prompt = require('prompt-sync')({ sigint: true });

//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. Si el número no está dentro de ese rango, muestra un mensaje de error.
let numUser = Number (prompt ('Ingrese un número del 1 al 7: '));

let dia1 = 1;
let dia2 = 2;
let dia3 = 3;
let dia4 = 4;
let dia5 = 5;
let dia6 = 6;
let dia7 = 7;

/*let dia1 = 'Lunes.';
let dia2 = 'Martes.';
let dia3 = 'Miércoles.';
let dia4 = 'Jueves.';
let dia5 = 'Viernes';
let dia6 = 'Sábado.';
let dia7 = 'Domingo.';*/

let dia = '';

if (numUser === dia1) {
    dia = 'Lunes.'
} else if (numUser === dia2) {
    dia = 'Martes.'
} else if (numUser === dia3) {
    dia = 'Miércoles.'
} else if (numUser === dia4) {
    dia = 'Jueves.'
} else if (numUser === dia5){
    dia = 'Viernes.'
} else if (numUser === dia6) {
    dia = 'Sábado.'
} else {
    dia = 'Domingo'
}


const mensaje = (numUser >= 1 && numUser <= 7)
    ? 'El número ingresado corresponde al día: ' + dia
    : 'Por favor ingrese un número entre el 1 al 7.';

console.log(mensaje);


