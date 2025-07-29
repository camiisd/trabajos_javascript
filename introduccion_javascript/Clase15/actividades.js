/*Ejercicio 6: Buscar la última posición de un elemento repetido
Tienes una lista de números . Encuentra y muestra la última
posición en la que aparece el número 7.
*/

let numeros = [2, 5, 7, 2, 8, 7];

console.log(numeros)
console.log('El último número 7 se encuentra en el índice: '+ numeros.lastIndexOf(7));

//////////////////////////////////////////////////////////////////////////////////////

/*Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si
"Sushi" está en la lista y muestra un mensaje que confirme si está o no.*/

let comidas = ["Pizza", "Hamburguesa", "Tacos"];

let encontrar = comidas.indexOf('Sushi');

let mensaje = (encontrar != -1) ? 'La lista de comidas contiene Sushi.' : 'Sushi no está en la lista de comidas.'

console.log('\n' + mensaje);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Ejercicio 8: Extraer una parte de una frase
Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte
"gatos" utilizando el método adecuado.*/

let frase = 'Los gatos son geniales';

console.log('\n' + frase);
console.log(frase.slice(4,9));

///////////////////////////////////////

/*Ejercicio 9: Eliminar espacios innecesarios
Tienes la siguiente cadena con espacios adicionales

Elimina los espacios al inicio y al final y muestra la cadena resultante.*/

let cadena = " Hola, mundo! ";

console.log('\n' + cadena);
console.log (cadena.trim());

/*Ejercicio 10: Reemplazar una palabra en una frase
Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por
"verano" y muestra la frase actualizada. */

let frase1 = "Me gusta el invierno";
let frase2 = frase1.replace('invierno', 'verano');

console.log('\n' + frase1 + '\n'+ frase2);