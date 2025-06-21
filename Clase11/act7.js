const prompt = require ('prompt-sync') ();

//Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. .




console.log ('¡Hola! Soy una calculadora, ¿qué necesitas hacer?');
console.log ('Ingresa el número según la operación que desees realizar. Las opciones son:');

let operacion = prompt ('1. Sumar 2. Restar 3. Dividir 4. Multiplicar. ');

console.log ('Ahora ingresa dos números.')

let numeroUno = Number(prompt ('Ingresa un número: '));
let numeroDos = Number(prompt ('Ingresa un número: '));

// Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
// Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
// Usa switch para resolverlo.

let mensaje = '';

switch (operacion) {
    case '1':
        mensaje = `La suma es igual a ${numeroUno + numeroDos}.`;
        break;
    case '2':
        mensaje = `La resta es igual a ${numeroUno - numeroDos}.`;
        break;
    case '3':
        mensaje = `La división es igual a ${numeroUno / numeroDos}.`;
        break;
    case '4':
        mensaje = `La multiplicación es igual a ${numeroUno * numeroDos}.`
        break;
    default:
        mensaje = `Ingresa una opción válida (1 a 4).`;
}

console.log (mensaje);