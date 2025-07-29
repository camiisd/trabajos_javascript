const prompt = require ('prompt-sync')();
// Ejercicio 10: Factorial de un número (Ejercicio entrevista). Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
let calcularFactorial = function (n) {
    let factorial =1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    };
    return factorial;
};

console.log('Cálculo factorial.')
n = parseInt(prompt('Ingrese un número: '))

console.log('El resultado es n! = ' + calcularFactorial (n));