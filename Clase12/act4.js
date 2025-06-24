const prompt = require('prompt-sync')();

//●	Ejercicio 4: Ciclo For - Array. Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:
// 1.	Crear un array para almacenar las notas.
// 2.	Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.

let notas = [];
let cantNotas = parseFloat (prompt('¿Cuántas notas querés ingresar?: '));

for (i=0; i <= cantNotas; i++){// 4.	Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.

    notasUsuario = parseFloat(prompt('Ingrese la nota del estudiante ' + (i +1) +': '));// 3.	Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
    notas [i] = notasUsuario;
// 5.	Imprime en consola las notas ingresadas usando el array notas.
};

console.log('Las notas ingresadas son: ' + notas);