require('dotenv').config();

const readline = require('readline');

const mensajeInicial = process.env.STARTMESSAGE || '¡Bienvenido!';

console.log(mensajeInicial);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre?', (nombre) =>{
    console.log('¡Adiós ', nombre, '! Que tengas un buen día.');
    rl.close();

})

rl.on('close', ()=> {
    process.exit(0);
});
