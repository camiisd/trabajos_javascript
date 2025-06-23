const prompt = require ('prompt-sync')();

//●	Ejercicio 2: Do While Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".

const contrasena = '1234';

let usuarioContrasena = '';
let mensaje = '';

do {
    usuarioContrasena = prompt ('Por favor, ingrese su contraseña: ');
    mensaje = (usuarioContrasena !== contrasena) ? '¡Contraseña incorrecta!' : '';
    console.log (mensaje);
} while (usuarioContrasena !== contrasena);

mensaje = '¡Contraseña correcta! Acceso concedido.';

console.log(mensaje);