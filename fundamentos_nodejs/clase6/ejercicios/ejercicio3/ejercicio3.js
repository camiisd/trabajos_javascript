const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer número: ', (numero1) =>{
    rl.question('Introduce el segundo número: ', (numero2) =>{
        const suma = parseFloat(numero1)+parseFloat(numero2);
        console.log('El resultado de sumar ', numero1, 'y ', numero2,' es ', suma);
        rl.close();
    });
});

rl.on('close',() => {
    console.log('Gracias por entrar.');
    process.exit(0);
});