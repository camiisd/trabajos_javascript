const prompt = require ('prompt-sync')();

//●	Ejercicio 5: Uso de Arrays y Condicionales
//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 

let nombre = [];

console.log ('A continuación se solicitarán 5 nombres.')

for (i=0; i < 5; i++){
    let nombreUsuario = prompt('Ingrese un nombre ' + (i+1) + ': ');
    nombre [i] = nombreUsuario;
}


// Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 

console.log ('Para verificar si ya se encuentra el nombre, escribalo a continuación.')

let nombreBuscado = prompt ('Ingrese el nombre: ');
let busqueda = false;

for (i=0; i < 5; i++){
    if (nombre [i] === nombreBuscado) {
        busqueda = true
    };
};

let mensaje = busqueda ? 'El nombre ya se encuentra registrado.' : 'El nombre buscado no se encuentra registrado.';
console.log (mensaje);
