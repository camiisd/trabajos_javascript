//Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. 
// Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un
//sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".

let palabras = ['hola', 'mundo', 'javascript'];

let palabrasConSigno = palabras.map(function(palabra) {
  return "¡" + palabra + "!";
});

console.log(palabrasConSigno);

//● Ejercicio 7: Filtra nombres que empiecen con la letra 'A' Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], 
// queremos quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo,
//el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.

let nombres = ['Ana', 'Luis', 'Andrea', 'María'];

let nombresConA = nombres.filter(palabra => palabra.startsWith('A'));

console.log(nombresConA)

//● Ejercicio 8: Busca un nombre específico Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. 
// Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.

nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let nombreEncontrado = nombres.find(nombre => nombre === 'Laura');

(nombreEncontrado) ? console.log('Está Laura.') : console.log('Laura no está.');


//● Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabrasImagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. 
// Queremos saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol'
//tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.

//● Ejercicio 10: Construye una frase a partir de una lista de palabras Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], 
// queremos construir una frase completa concatenando cada palabra en orden, separadas por
//espacios. Al final, deberíamos obtener el texto 'Me gusta aprender JavaScript'.
