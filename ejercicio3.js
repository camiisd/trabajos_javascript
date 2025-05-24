const prompt = require ('prompt-sync')({sigint:true});
// el usuario ingresa dos numeros
let numeroUno = parseFloat(prompt ('Ingrese el primer número: '));
let numeroDos = parseFloat(prompt ('Ingrese el segundo número:    '));
//sumar los números
let suma = numeroUno + numeroDos;
//mostrar resultado
console.log('La suma de los dos números es: ' + suma);