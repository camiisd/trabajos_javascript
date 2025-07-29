const prompt = require ('prompt-sync')();

//Crea un programa que le pida al usuario un número 
console.log ('Aprendiendo las tablas. Ingresa el número correspondiente a la tabla que quieras conocer.')
let numero = Number(prompt('Número: '))

//y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.

for (let i = 1; i <= 10; i++) {
    let tabla = numero * i;
    console.log (numero + ' x ' + i + ' = ' + tabla)
};