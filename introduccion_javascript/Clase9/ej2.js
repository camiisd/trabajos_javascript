const prompt = require ('prompt-sync')({sigint:true});
//define dos constantes RANGO_MINIMO y RANGO_MAXIMO
const rango_Minimo = 2;
const rango_Maximo = 39;
//pedir el usuario que ingrese un número
let numUser = Number(prompt ('Ingrese un número '));
//verificar si está dentro del rango definido por las constantes
let mensaje = '';
if (numUser>rango_Minimo && numUser<rango_Maximo) {
    mensaje = "está en el rango asignado."
} else {
    mensaje = "no está en el rango asignado."
}
// mostrar el mensaje
console.log ('El número ingresado ' + mensaje);