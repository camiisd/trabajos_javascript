/*Ejercicio 4 – Tipo de Datos: Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre. Además, realizar operaciones y validaciones adicionales sobre estos valores.*/

//1. Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
let verdadero = true;

// 2. Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
let texto = 'Bienvenid@';

//3. Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
let numero = 2;

//4. Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript. 
let nada = null ;

// Operaciones y Validaciones:1. Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.

let opeMate = numero + 16;
console.log (opeMate);

//2. Concatena el “string” de la variable texto con otro mensaje adicional.

let saludo = texto + ' a mi GitHub.';
console.log(saludo);

//3. Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
const mensaje = (verdadero === false)
    ?'No se enviarán más mensajes al mail ingresado.'
    :'Se ha sucripto a nuestro newsletter semanal.'
console.log(mensaje)

//4. Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.
const error = (nada === null)
    ?'Ingrese un valor válido.'
    :'Ya hemos registrado sus datos.'
console.log(error);