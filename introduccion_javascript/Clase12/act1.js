const prompt = require ('prompt-sync') ();

//●	Ejercicio 1: While Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados.
let suma = 0;
let numUsuario = Number(prompt ('Ingrese un número: ')); 


while (numUsuario >= 0) {
    suma += numUsuario;
    numUsuario =  Number(prompt ('Ingrese un número: ')); 
};

console.log ('La suma de los números ingresados es' + suma);