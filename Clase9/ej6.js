//la función del prompt
const prompt = require('prompt-sync')({ sigint: true });

//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje personalizado según el caso.
let = edad = Number(prompt('Por favor ingrese su edad: '));

let edadMayor = edad >= 18;
let edadMenor = edad < 18;

const   mensaje = edadMayor
    ?'Eres mayor de edad, ¡Bienvenid@!'
    :'Lo siento, eres menor de edad. No podés ingresar.';

console.log(mensaje);