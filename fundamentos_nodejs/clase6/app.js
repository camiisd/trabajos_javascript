const { log } = require('console');
const readline = require('readline');

require('dotenv').config();

const defaultGreeting = process.env.GREETING || '¡Hola!';

const args = process.argv.slice(2);
const userName = args[0] || 'Invitado';

console.log(defaultGreeting, userName, '!');

console.log('Información sobre el entorno de ejecución: ');

console.log(' - Directorio actual: ', process.cwd());

console.log('- Plataforma: ', process.platform);

//PASO 2: Uso de readline
const rl = readline.creatInterface({
    input: process.stdin,
    output: process.stdout
});

//El método rl.question

rl.question('¿Cuántos años tenés?', (age) => {
    console.log('Wow, ', age, ' tanto años es una gran edad.');
    rl.close();
    
});

// Manejo del evento close

rl.on('close', () => {
    console.log('Gracias por usar este programa, adiós')
    process.exit(0);
})