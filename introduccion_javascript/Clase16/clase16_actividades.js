/*Ejercicio 1: Crea un nuevo array con los cuadrados de los números
Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es
crear una nueva lista donde cada número de la lista original se haya
transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse
en 4, el número 4 en 16, y así sucesivamente. Al final, imprime la nueva lista.*/
console.log ('Ejercicio 1.');

let numeros = [2, 4, 6, 8];
console.log (numeros);

let numerosMultiplicados = numeros.map((numero => numero*2));
console.log(numerosMultiplicados);

/*Ejercicio 2: Filtra los números pares de una lista
Tienes una lista con varios números: [1, 2, 3, 4, 5, 6]. Queremos separar y
guardar únicamente los números pares en una nueva lista. Los números
pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez
que hayas creado la nueva lista, muéstrala en la consola*/
console.log ('\nEjercicio 2.');

numeros = [1, 2, 3, 4, 5, 6];
console.log (numeros);

let numerosPares = numeros.filter((numeros) => {
    return numeros %2 === 0;
    });

console.log(numerosPares);

/* Ejercicio 3: Encuentra el primer número mayor a 10
Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer
número de la lista que sea mayor a 10. Recuerda que el resultado debe ser
únicamente el primer número que cumpla esta condición, no todos los
números que lo hagan.*/
console.log ('\nEjercicio 3.');

numeros = [5, 8, 12, 20, 3];

let numerosMayores = numeros.find(numero => {
    return numero > 10;
}) ;

console.log(numerosMayores);

/* Ejercicio 4: Calcula la suma total de los números
Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de
sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar,
imprime el total en la consola.
*/
console.log ('\nEjercicio 4.');

numeros = [1, 2, 3, 4];

let sumaNumeros = numeros.reduce( (acumulador, numero) => {
    return acumulador += numero;
});

console.log(sumaNumeros);

/* Ejercicio 5: Recorre una lista e imprime cada elemento
Tienes una lista de frutas ['manzana', 'banana', 'cereza']. Tu tarea es recorrer la
lista y mostrar el nombre de cada fruta en la consola, una por una.*/
console.log ('\nEjercicio 5.');

let frutas = ['manzana', 'banana', 'cereza'];

frutas.forEach ((fruta) => {
    console.log(fruta);
});

//Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. 
// Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un
//sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".
console.log ('\nEjercicio 6.');
let palabras = ['hola', 'mundo', 'javascript'];

let palabrasConSigno = palabras.map(function(palabra) {
  return "¡" + palabra + "!";
});

console.log(palabrasConSigno);

//● Ejercicio 7: Filtra nombres que empiecen con la letra 'A' Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], 
// queremos quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo,
//el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.
console.log ('\nEjercicio 7.');
let nombres = ['Ana', 'Luis', 'Andrea', 'María'];

let nombresConA = nombres.filter(palabra => palabra.startsWith('A'));

console.log(nombresConA)

//● Ejercicio 8: Busca un nombre específico Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. 
// Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.
console.log ('\nEjercicio 8.');
nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let nombreEncontrado = nombres.find(nombre => nombre === 'Laura');

(nombreEncontrado) ? console.log('Está Laura.') : console.log('Laura no está.');


//● Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras.Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. 
// Queremos saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol'
//tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.
console.log ('\nEjercicio 9.');
palabras = ['sol', 'luna', 'estrella'];

let cantidadLetras = palabras.reduce(function (acum, palabra) {
    palabra = palabra.length
    acum += palabra
    return acum;
}, 0);

console.log(cantidadLetras);

//● Ejercicio 10: Construye una frase a partir de una lista de palabras Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], 
// queremos construir una frase completa concatenando cada palabra en orden, separadas por
//espacios. Al final, deberíamos obtener el texto 'Me gusta aprender JavaScript'.
console.log ('\nEjercicio 10.');
palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];

let frase = palabras.reduce((acumulador, palabra) => {
  return acumulador + ' ' + palabra;
});

console.log(frase);