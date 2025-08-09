require('dotenv').config();

const saludo = process.env.GREETING || '¡Hola!';

const nombre = process.argv[2] || 'Invitado';

console.log(`${saludo}, ${nombre}!`);