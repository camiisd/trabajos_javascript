const prompt = require('prompt-sync')();

/*●	Ejercicio 3: Ciclo For
Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive). Para esto, debes seguir los siguientes pasos:

1.	Solicitar al usuario que ingrese un número X.*/

console.log('Contaré los números impares desde el 0 hasta el número que me indiques.')
let numeroUsuario = parseInt(prompt('Ingrese un número: '));

//.	Inicializar una variable para contar los números impares.

let contar = 0;

//3.	Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).

for (i=0; i<= numeroUsuario; i++){

    let numeroImpar = i%2;
    let impar = numeroImpar !== 0 ? contar++ : 0;
}

console.log('La cantidad de números impares desde 0 hasta '+ numeroUsuario + ' (inclusive) es: '+ contar);

// 4.	Dentro del ciclo, verificar si el número es impar.
// 5.	Si el número es impar, incrementar el contador de números impares.
// 6.	Al finalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.
// 7.	Utiliza el operador módulo (%) para verificar si un número es impar.
// 8.	Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe imprimir: “La cantidad de números impares desde 0 hasta 10 (inclusive) es: 5”*/




