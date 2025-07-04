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
console.log ('Ejercicio 2.');

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
console.log ('Ejercicio 3.');

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
console.log ('Ejercicio 4.');

numeros = [1, 2, 3, 4];

let sumaNumeros = numeros.reduce( (acumulador, numero) => {
    return acumulador += numero;
});

console.log(sumaNumeros);

/* Ejercicio 5: Recorre una lista e imprime cada elemento
Tienes una lista de frutas ['manzana', 'banana', 'cereza']. Tu tarea es recorrer la
lista y mostrar el nombre de cada fruta en la consola, una por una.*/
console.log ('Ejercicio 5.');

let frutas = ['manzana', 'banana', 'cereza'];

frutas.forEach ((fruta) => {
    console.log(fruta);
});


