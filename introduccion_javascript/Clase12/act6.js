const prompt = require('prompt-sync')();

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

let suma = 0;
//●	Ejercicio 6: Iguales a 10 pero menores de 1000
// Dada una matriz, recorrer sus valores 
for (let fila = 0; fila<matriz.length; fila++){
       // if (matriz [])

    for (let columna = 0; columna < matriz [fila].length; columna++) {

        console.log(matriz [fila][columna]);
        if (matriz [fila][columna] >= 10 && matriz [fila][columna] <= 1000) {
            suma += matriz [fila][columna];
        }
        
    };
};
// y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.


console.log('La suma de los números mayores o iguales a 10, pero menores que 1000 es: ' + suma);