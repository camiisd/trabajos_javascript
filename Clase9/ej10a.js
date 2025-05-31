//le pregunté al ChatGPT si hay una versión más breve y utilizó la función array (todavía no la conozco)

const prompt = require('prompt-sync')({ sigint: true });

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
// un array es un conjunto que comienza desde el 0

const numUser = Number(prompt('Ingrese un número del 1 al 7: '));

console.log((numUser >= 1 && numUser <= 7)
    ? 'El día correspondiente es: ' + dias[numUser - 1] // le agregó el -1 porque con la función array lunes = 0
    : 'Ingrese un número entre el 1 y el 7.');
