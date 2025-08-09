require('dotenv').config();

const readline = require('readline');

const mensaje = process.env.WELCOME_MESSAGE || '¡Bienvenido al conversor de temperaturas!'

console.log(mensaje);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la temperatura en grados Celsius ', (celsius) =>{
    const far = (parseFloat(celsius)*9)/5+32;
    console.log('La temperatura en °F es: ', far);
    rl.close();
});

rl.on('close',()=>{
    console.log('Gracias por utilizar el conversor.');
    process.exit(0);
});
