const fs = require('fs');

//Definir la ruta del archivo JSON que vamos a manipular

const rutaArchivos = './productos.JSON';

//1° Leer el archivo JSON: readfile.fs

fs.readFile(rutaArchivos, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo', err);
        return; //detener ejecicio ante el error
    }

    const productos = JSON.parse (data);

    console.log('\nProductos actuales:\n', productos);

    //2° agregar un producto al listado
    // Crear un nuevo objeto que represente al nuevo producto
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: 'Auriculares',
        precio: 45
    }

    //Añadimos el nuevo producto al array existente

    productos.push(nuevoProducto);

    console.log('Productos actualizados:\n', productos)

    //3° Actualizar el archivo json
    //Convertir el obj JS a JSON con json.string

    const contenidoActualizado = JSON.stringify(productos, null, 2);

    //Escribir en el archivo JSON

    fs.writeFile(rutaArchivos, contenidoActualizado, (err) => {
        if(err){
            console.error('Error al escribir el archivo', err);
            return;
        }
        console.log('Archivo actualizado correctamente');
    })

})



