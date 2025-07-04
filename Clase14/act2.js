//Ejercicio 2: Calcular promedio de calificaciones. Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.
const prompt = require('prompt-sync')();

let sumaPromedio = 0;
let promedio = (sumaPromedio) => sumaPromedio/5;


for (let i = 1; i <= 5; i++) {
    calificacionUsuario = (parseFloat (prompt('Ingrese nota n° ' + i + ': '))); 
    sumaPromedio += calificacionUsuario;
};

console.log('El promedio es de ' + promedio (sumaPromedio));
