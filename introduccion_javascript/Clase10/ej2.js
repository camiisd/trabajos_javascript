/*Ejercicio 2 – Usando las variables:
Escribe un programa que pida al usuario que ingrese su nombre, su
edad y su peso, y luego muestre un mensaje personalizado que incluya
toda esta información.
Desglosando el ejercicio deberás:
1. Pide al usuario que ingrese su nombre.
2. Pide al usuario que ingrese su edad.
3. Pide al usuario que ingrese su peso.
4. Muestra un mensaje personalizado que incluya el nombre, la edad
y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables.
Ahora nos toca pedir datos al usuario, por lo que usaremos promptsync para solicitar esta información.
*/

const prompt = require ('prompt-sync')({sigint:true});

//usuario ingresa nombre, edad, peso
let nombreUser = prompt('Ingresa tu nombre: ');
let edadUser = prompt('Ingrese su edad: ');
let pesoUser = prompt ('Ingrese su peso: ');

//mensaje personalizado con la info solicitada

console.log ('¡Bienvenid@ ' + nombreUser + '! Gracias por brindarnos la información solicitada. A continuación te mostraremos ejercicios a partir de ' + edadUser + ' años y acorde a tu peso de ' + pesoUser + ' kg.')