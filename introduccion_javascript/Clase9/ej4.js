const prompt = require ('prompt-sync')({sigint:true});
//declara una varible nomnbre
let nombre = '';
//pedir usuario que ingrese su nombre
nombre = prompt ('Ingrese su nombre ');
//verificar si el nombre ingresado es igual a tu nombre
const miNombre = 'Camila'
let mensaje = '';
if (nombre === miNombre) {
    mensaje = 'es igual al mío.'
} else {
    mensaje = 'no es igual al mío.'
}

console.log('Tu nombre ' + mensaje);