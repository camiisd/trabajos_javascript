const prompt = require ('prompt-sync') ({sigint:true});
/*Ejercicio 3 – Constantes / Validación de Edad: Más adelante vamos a querer validar que nuestros encuestados sean de
18 años de edad mínima y 99 años de edad máxima.
Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes (asignándoles los valores numéricos 18 y 99 respectivamente). Por último, Deberás pedirle al usuario que ingrese su
edad para validarla usando parseInt. */

//1. Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignarás los valores numéricos 18 y 99 respectivamente.
const EDAD_MINIMA = 18
const EDAD_MAXIMA = 99
// Pide al usuario que ingrese su edad. Usa “parseInt” para convertir la entrada del usuario a un número entero.

let edadUser =  parseFloat(prompt('Ingrese su edad: '));

// Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.

let edadValida = edadUser >=18 && edadUser<= 99;

const mensaje = edadValida
    ?'El número ingresado es válido.'
    :'Ingrese un número válido entre 18 y 99 años'

console.log (mensaje);
/*Pista: Las constantes se declaran con la palabra reservada const y es buena práctica que sus nombres sean declarados siempre con letras mayúsculas. Utiliza parseInt para convertir la entrada del usuario a un número entero.*/
