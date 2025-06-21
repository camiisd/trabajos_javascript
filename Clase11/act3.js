const prompt = require ('prompt-sync')();

//Crea un programa que le pida al usuario un número positivo. 
let numeroUsuario = prompt ('Ingresa un número: ');
let mensaje = (numeroUsuario<=0) ? 'Ingresa un número mayor a 0.' :'' ; 
console.log (mensaje);
//El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 

// Usa un ciclo for para realizar la tarea.
for (let i = 1; i <= numeroUsuario; i++) {
    console.log('Estamos en la vuelta número ' + i);
}


