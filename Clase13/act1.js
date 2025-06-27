const prompt = require('prompt-sync')();
//Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
// Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. 
// // La función debe devolver el área del triángulo.
let base ;
let altura; 


function calcularAreaTriangulo (base, altura) {
    return (base*altura)/2;
}

console.log('Calcular área de un triángulo. La fórmula es (base x altura) / 2 . A continuación, ingrese los valores solicitados.')
base = parseFloat (prompt('Valor de la base: '));
altura = parseFloat (prompt('Valor de la altura: '));

console.log(calcularAreaTriangulo(base, altura));

