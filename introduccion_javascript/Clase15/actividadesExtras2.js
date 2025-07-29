/*Clasificación de palabras según su longitud
Tienes una lista de palabras en una oración. */

let oracion = "JavaScript es un lenguaje poderoso y versátil";

//Debes: 1. Dividir la oración en palabras individuales.
let palabras = oracion.split(' ');   // separa por espacios
let palabrasSeparadasConComa = palabras.join(', ');  // une con comas

//2. Clasificar las palabras en dos categorías:
//▪ Cortas (menos de 5 letras)

let palabrasCortas = [];
let palabrasLargas = [];

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length < 5) {
        palabrasCortas.push(palabras[i]);
    } else {
        palabrasLargas.push(palabras[i]);
    }
}

//▪ Largas (5 letras o más)
//3. Mostrar ambas listas de palabras clasificadas.

console.log("Palabras cortas:", palabrasCortas.join(', '));
console.log("Palabras largas:", palabrasLargas.join(', '));

//4. La oración es: "JavaScript es un lenguaje poderoso y versátil"*/