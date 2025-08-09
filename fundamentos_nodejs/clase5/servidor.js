//Importa el módulo que te permite trabajar con servidores TCP
const net = require('net');

//Definir el puerto
const PORT = 5000;

//Crear un servidor con el método net.createServer
const server = net.createServer((socket) => {
    console.log('¡El cliente está conectado!');//Ejercicio 2. Mostrar que el cliente se ha conectado

    //Ejercicio 3. Recibir y mostrar datos del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString();
        console.log('Mensaje recibido del cliente: ', mensaje);
    })

    //Ejercicio 4. Responder al cliente
    const respuesta = '¡Hola cliente! Mensaje recibido correctamente.'
    socket.write(respuesta);

    //Ejercicio 5. Detectar cuando el cliente se desconecta
socket.on('end', () => {
    console.log('El cliente se ha desconectado.')
});

});


 
//Ejercicio 1. Mensaje en consola para confirmar que el servidor está listo.
server.listen(PORT, () => {
    console.log('El servidor escuchando en el puerto: ', PORT) 
})

//