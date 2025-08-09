const fs = require('fs');

const rutaArchivo = './libro.JSON'

 //Muestra en la consola el título y el autor del libro.
fs.readFile(rutaArchivo, 'utf-8', (err,data) => {
    if (err){//Si hay un error...
        console.error('Error al leer el archivo.', err); //El mismo se imprime en pantalla.
        return; //Y se detiene el proceso
    }
    const libro = JSON.parse(data); //Convertir el texto en un objeto

    console.log('Título:', libro.titulo); //Se muestra el contenido del archivo siempre que no haya un error.
    console.log('Autor:', libro.autor);


    //Actualiza el año del libro a un valor más reciente.
    libro.anio = 2025; //actualizo el año del libro.

    let contenidoActualizado = JSON.stringify(libro, null, 2)//Convertir el obj JS a JSON con json.string
    
    fs.writeFile(rutaArchivo, contenidoActualizado, 'utf-8', (err) =>{  
        if(err){ //Control de errores
            console.error('Error al escribir el archivo.', err);
            return;
        };

        console.log('Año actualizado correctamente.', )
    });

    //Añade una nueva propiedad llamada páginas que indique el número de páginas del libro.
    
    libro.paginas= 320;

    contenidoActualizado = JSON.stringify(libro, null, 2)

    fs.writeFile(rutaArchivo, contenidoActualizado, 'utf-8', (err) =>{  
        if(err){ //Control de errores
            console.error('Error al escribir el archivo.', err);
            return;
        };

        console.log('Se añadió la propiedad "páginas" correctamente.')
    });

});

