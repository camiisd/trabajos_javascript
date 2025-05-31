const prompt = require('prompt-sync')({ sigint: true });

//Define una constante PI con el valor de pi (3.14159). 
const numPi = 3.14159;

// Pide al usuario que ingrese el radio de un círculo y 
let radio = parseFloat(prompt('Ingrese el valor del radio de su círculo: '));

// calcula su área y 
let areaCirculo = numPi * (radio*radio);

// perímetro utilizando la constante PI.
let perimetroCirculo = numPi * 2 * radio;

console.log('El área de su círculo es: '+ areaCirculo + '. Mientras que el perímetro es: '+ perimetroCirculo);
