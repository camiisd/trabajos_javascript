const prompt = require ('prompt-sync')();

//Escribe un programa que le pida al usuario un número entero positivo 
let numero = parseInt(prompt('Ingrese un número: '));

let mensaje = (numero <= 0) ? 'Por favor ingrese un número mayor a 0.' : 'A continuación te mostraré los múltiplos de ese número entre 1 y 100.';

console.log(mensaje);

// y muestre todos los múltiplos de ese número entre 1 y 100. 
// Utiliza un ciclo for para resolverlo.

for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
        console.log (i)
    };
};