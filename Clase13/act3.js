const prompt = require('prompt-sync')();
//Mensaje global y local 
// Declara una variable global llamada saludoGlobal con el valor "Hola desde el scope global". 
let saludoGlobal = 'Hola desde el scope global.';
// Luego, crea una función llamada mostrarMensaje que declare una variable local llamada saludoLocal con el valor "Hola desde el scope local" y que imprima ambos mensajes.
function mostrarMensaje () {
    let saludoLocal = 'Hola desde el scope local.';
   console.log (saludoGlobal);
   console.log (saludoLocal);
};

mostrarMensaje();