const prompt = require ('prompt-sync')();
//Ejercicio 4: Número par o impar. Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado.
function esPar (a){
    let operacion = a % 2; 
    return (operacion === 0) ? 'Es par.' : 'Es impar.'
}

let numero = parseInt (prompt('Ingrese un número: '));
console.log(esPar(numero));
