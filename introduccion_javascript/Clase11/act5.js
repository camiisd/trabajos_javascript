const prompt = require ('prompt-sync')();

//Escribe un programa que le pida al usuario dos números enteros (inicio y fin).

console.log('¡Hola! Por favor ingresa dos números y te mostraré los n° pares en el intervalo.');

let numInicio = Number(prompt ('El número de inicio es: '));
let numFin = Number(prompt ('El número de fin es: '));

// Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.
let mensaje = (numInicio > numFin) ? 'Los valores ingresados son inválidos' : '';

console.log (mensaje);

// El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. 
// Utiliza un ciclo for para recorrer los números entre el inicio y el fin. 
for (let i = numInicio; i <= numFin; i++){
    let modulo = i % 2;
    if (modulo === 0) {
        console.log (i)
    };
};