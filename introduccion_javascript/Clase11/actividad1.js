const prompt = require ('prompt-sync')();

let numUsuario = prompt ('Ingrese un número cualquiera: ');

if (numUsuario > 0) {
    console.log('El número ingresado es positivo.')
} else if (numUsuario < 0) {
    console.log('El número ingresado es negativo.')
} else {
    console.log('El número ingresado es 0.')
};

