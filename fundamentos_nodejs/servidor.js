const net = require('net'); // Importamos el módulo 'net' (servidores TCP)

//Creamos un servidor TCP
const server = net.createServer((socket) => {
    consele.log('¡Un cliente se ha conectado!'); // Mensaje cuando un cliente se conecta al servidor

    socket.on('data', (data) => { //Escuchamos el evento data que se activa cuando el cliente envia datos al servidor
        //En consola, el mensaje del cliente
        console.log('Mensaje recibido del cliente: ', data.toString())
    })

    //Escuchar el evento 'end' se activa cuando el cliente se desconecte del servidor

    socket.on('end', () => {
        //Mostrar un mensaje en la consola indicando que el cliente se descontectó
        console.log('El cliente se ha desconectado');
    });
});

// Definir un puerto en el que el servidor estará escuchando conexiones 
const PORT = 4000; //El ejeercicio lo sugiere

// Iniciamos el servidor y lo ponemos a 'escuchar' en el puerto definido

server.listen(PORT, () => {
    //En consola, se muestra un mensaje que el servidor está listo
    console.log('Servidor escuchando en el puerto: ', PORT);
});

