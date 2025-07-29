/*Ejercicio 3: Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria ['Perro', 'Gato',
'Conejo']. Llega un 'Hámster' que debe ser atendido primero. Agrega el
'Hámster' al inicio de la lista. Luego, atiende a la primera mascota de la fila y
muéstrala. Finalmente, muestra la lista actualizada.
*/

let mascotas = ['Perro', 'Gato', 'Conejo']

mascotas.unshift('Hámster'); //Agrega el 'Hámster' al inicio de la lista.

console.log(mascotas.shift()); //Luego, atiende a la primera mascota de la fila y muéstrala.

console.log(mascotas); //Finalmente, muestra la lista actualizada.