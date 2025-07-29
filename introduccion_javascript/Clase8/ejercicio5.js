const prompt = require ('prompt-sync')({sigint:true});
// solicitar al usuario que ingrese su nombre
let nombre = prompt ('Hola, ¿cómo te llamas? ');
// mostrar un saludo personalizado usando el nombre ingresado
console.log ('¡Bienvenid@ ' + nombre + ' a mi GitHub! Espero sorprenderte con mis trabajos prácticos de ADA ITW :)');
