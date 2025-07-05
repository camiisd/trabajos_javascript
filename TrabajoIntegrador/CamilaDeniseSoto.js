//Sistema de Gestión de Biblioteca

//Punto 10: Comentando mi código
// Utilizaré las // para comentar mi código, respetando el formato Punto - Consigna - Explicación, o, de ser necesario, también usaré /* */. A excepción del presente para evitar que el mismo sea reiterativo.

//Punto 1: Estructura de Datos. 
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros.
const libros = [ //Utilizo const porque es información que no voy a reasignar pero si modificar.
            {id: 1, titulo: ' Sin querer queriendo ', autor: 'Roberto Gómez Bolaños', anio: 2006, genero: 'Biografía', disponibilidad: false }, // El uso de {} es para señalar que son propiedades de cada array.
            {id: 2, titulo: 'La última actriz', autor: 'Tamara Tenenbaum', anio: 2024, genero: 'Ficción', disponibilidad: true },// El uso de true (booleano) indica que el libro está disponible, de lo contrario, fue prestado.
            {id: 3, titulo: 'Un millón de cuartos propios', autor: 'Valeria Tentoni', anio: 2021, genero: 'Ensayo', disponibilidad: false },
            {id: 4, titulo: 'La biblioteca de la medianoche', autor: 'Matt Haig', anio: 2020, genero: 'Ficción', disponibilidad: false },
            {id: 5, titulo: ' El arte de aburrirse ', autor: 'Lars Svendsen', anio: 2007, genero: 'Ensayo', disponibilidad: true },
            {id: 6, titulo: 'La digestión es la cuestión', autor: 'Giulia Enders', anio: 2014, genero: 'No ficción', disponibilidad: false },
            {id: 7, titulo: 'Hábitos atómicos', autor: 'James Clear', anio: 2018, genero: 'Desarrollo personal', disponibilidad: true },
            {id: 8, titulo: 'La enfermedad del aburrimiento', autor: 'Enric Puig Punyet', anio: 2020, genero: 'Ensayo', disponibilidad: false},
            {id: 9, titulo: 'El cuerpo lleva la cuenta', autor: 'Bessel van der Kolk', anio: 2014, genero: 'Psicología', disponibilidad: false },
            {id: 10, titulo: 'Un animal salvaje', autor: 'Joël Dicker', anio: 2023, genero: 'Ficción', disponibilidad: true },
            {id: 11, titulo: ' El tiempo que tuvimos ', autor: 'María Oruña', anio: 2024, genero: 'Ficción', disponibilidad: false },
            {id: 12, titulo: 'El faro de los amores dormidos', autor: 'Mónica Carrillo', anio: 2020, genero: 'Ficción', disponibilidad: true },
            {id: 13, titulo: 'Matate, amor', autor: 'Ariana Harwicz', anio: 2012, genero: 'Ficción', disponibilidad: false },
            {id: 14, titulo: 'La química del amor', autor: 'Ali Hazelwood', anio: 2022, genero: 'Ficción', disponibilidad: false },
            {id: 15, titulo: 'Amigos, amantes y aquello tan terrible', autor: 'Matthew Perry', anio: 2022, genero: 'Biografía', disponibilidad: false },
            {id: 16, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', anio: 1943, genero: 'Ficción', disponibilidad: true},
            {id: 17, titulo: 'Rayuela', autor: 'Julio Cortázar', anio: 1963, genero: 'Ficción', disponibilidad: false },
            {id: 18, titulo: '1984', autor: 'George Orwell', anio: 1949, genero: 'Ficción', disponibilidad: true }
];

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. 
const usuarios = [ //Nuevamente utilizo const porque es información que no voy a reasignar pero si modificar.
            { id: 101, nombre: 'Sofía González', email: 'sofia.gonzalez@gmail.com', librosPrestados: [3] }, //En libros prestados uso corchetes porque estoy usando una propiedad del array Libros.
            { id: 102, nombre: 'Lucas Fernández', email: 'lucas.fernandez@gmail.com', librosPrestados: [1, 14] },
            { id: 103, nombre: 'Martina López', email: 'martina.lopez@gmail.com', librosPrestados: [4, 8, 17] },
            { id: 104, nombre: 'Mateo Ramírez', email: 'RAMIREZMATEO@GMAIL.COM', librosPrestados: [6] },
            { id: 105, nombre: 'Valentina Torres', email: 'valentina.torres@gmail.com', librosPrestados: [9] },
            { id: 106, nombre: 'Thiago Medina', email: 'thiago.medina@gmail.com', librosPrestados: [11] },
            { id: 107, nombre: 'Camila Herrera', email: 'CAMILAH@GMAIL.COM', librosPrestados: [13, 15] }
];

//Voy a crear esta función para ver qué libro prestado tiene cada usuario.
function mostrarLibrosDeUsuario(idUsuario) {
    const usuario = usuarios.find(u => u.id === idUsuario);

    if (!usuario) {
        console.log('Usuario no encontrado.');
        return;
    }

    console.log('\nLibros prestados');

    if (usuario.librosPrestados.length === 0) {
        console.log('Sin libros prestados.');
    } else {
        usuario.librosPrestados.forEach(idLibro => {
            const libro = libros.find(libro => libro.id === idLibro);
            if (libro) {
                console.log(`- ${libro.titulo} (Autor@: ${libro.autor})`);
            } else {
                console.log(`- Libro con id. ${idLibro} no encontrado.`);
            }
        });
    }
};
let idUsuario = '';

//Punto 8: Manejo de Cadenas

// a) Crear una función normalizarDatos() que utilice métodos de strings. 
function normalizarDatos () {//Esta función me permite manejar las cadenas dentro de los array libros y usuarios
    for (let i = 0; i < libros.length; i++) { //voy a normalizar todos las propiedades que ingresen del array libros.
        libros[i].titulo = libros[i].titulo.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //.trim() me permite eliminar espacios en blanco al inicio y al final. .toUpperCase() escribe el título en máyusculas.
            //También normalizo el uso de carácteres especiales y con .toLowerCase() lo dejo todo en minúsculas
        libros[i].autor = libros[i].autor.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        libros[i].genero = libros[i].genero.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };
    
     for (let i = 0; i < usuarios.length; i++) {//voy a normalizar todos las propiedades de libros
        usuarios[i].email = usuarios[i].email.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); //.toLowerCase me asegura que los datos ingresados estén en minúsculas para el email. 
            //También normalizo el uso de carácteres especiales
        usuarios[i].nombre = usuarios[i].nombre.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        }
};

normalizarDatos() //Esta función la voy a dejar inicializada ya que tengo la información dentro de los arrays

function normalizarDatosUsuario(texto, enMayusculas = false) {
    //Para los datos que ingrese el usuario voy a utilizar esta función
    texto = texto.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");//.trim() elimina los espacios adelante y detrás. El resto me elimina los caracteres especiales. 
    return enMayusculas ? texto.toUpperCase() : texto.toLowerCase(); //Uso un if ternario para que en el caso que sea verdadero, el texto entre en mayúsculas y en caso de ser falso sea en minúsculas.
    }; //Esta función la voy a inicializar en cada entrada del Usuario

//Punto 2: Funciones de Gestión de Libros
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
const prompt = require('prompt-sync')(); //Inicializo la variable de normalizarDatosUsuario(prompt para que el usuario pueda interactuar con el sistema

function agregarLibro (nuevoLibro){
    let nuevoLibro = { //Primero creo un objeto con todas las propiedades para que sea más fácil guardar la información en el array 'libros'
            id: libros.length + 1, //el id lo asigna directamente el sistema para seguir la numeración del array.
            titulo: normalizarDatosUsuario(prompt ('Ingrese el título: '), true), //La última función me permite que todo se quede en minúsculas.
            autor: normalizarDatosUsuario(prompt ('Ingrese el autor: '), false),
            anio: parseInt(prompt('Ingrese el año: ')), //Me aseguro que el año sea un número entero.
            genero: normalizarDatosUsuario(prompt('Ingrese el género: '), false)
        };
    libros.push (nuevoLibro);
};

// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro (criterioBuscar, valor) {
    switch (criterioBuscar) {//Uso un switch para que cada criterio devuelve el valor correspondiente
        case 'titulo': 
            for (i=0; i < libros.length; i++) {//Utilizo el for para que busque el valor ingresado.
               if (libros[i].titulo === valor) {
                    console.log('Título: ' + libros[i].titulo + '\nAutor: ' + libros[i].autor + '\nAño: ' + libros[i].anio + '\nGénero: ' + libros[i].genero + (libros[i].disponibilidad ? '\nDisponible.' : '\nNo disponible.')); // A parti de console.log imprimo la información solicitada. /n me hace salto de líneas.
               }
            }
        break;
        
        case 'autor':
             for (i=0; i < libros.length; i++) {
               if (libros[i].autor === valor) {
                    console.log('Título: ' + libros[i].titulo + '\nAutor: ' + libros[i].autor + '\nAño: ' + libros[i].anio + '\nGénero: ' + libros[i].genero + (libros[i].disponibilidad ? '\nDisponible.' : '\nNo disponible.'));
               }
            }
        break;

        case 'genero':
             for (i=0; i < libros.length; i++) {
               if (libros[i].genero === valor) {
                    console.log('Título: ' + libros[i].titulo + '\nAutor: ' + libros[i].autor + '\nAño: ' + libros[i].anio + '\nGénero: ' + libros[i].genero + (libros[i].disponibilidad ? '\nDisponible.' : '\nNo disponible.'));
               };
            };
            
        break;

        case 'id':
            for (i=0; i < libros.length; i++) {
               if (libros[i].id === valor) {
                    console.log('Título: ' + libros[i].titulo + '\nAutor: ' + libros[i].autor + '\nAño: ' + libros[i].anio + '\nGénero: ' + libros[i].genero + (libros[i].disponibilidad ? '\nDisponible.' : '\nNo disponible.'));
                };
            };
            
        break;


        default:
            console.log('Datos inválidos.');
        break;
    }
};

// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterioOrdenar) {
    switch (criterioOrdenar) {//De acuerdo al criterio ingresado, se va a devolver el resultado correspondiente.
        case 'año':
            for (let fila =0; fila < libros.length-1; fila++) {
                for (let columna = 0; columna < libros.length - 1- fila; columna++) {//Ambos for me permiten acceder a todo el array (fila y columnas)
                    if (libros[columna].anio > libros[columna+1].anio ) {//If me permite desarrollar bubble sort: si la 1°columna es mayor a la siguiente
                        let temporal = libros [columna]; // La 1° columna se guarda en una variable temporal.
                        libros [columna ] = libros [columna+1]; //El valor de la 2° columna, se lo asigno a la posición de la 1°
                        libros [columna + 1 ] = temporal; //Mientras que el valor de la 1° columna queda asignada a la posición de la 2°
                    }
                }
            }
            for (let i = 0; i < libros.length; i++) {//Recorro el array nuevamente para imprimir la lista ordenada
                  console.log(libros[i].titulo + ' - ' + libros[i].anio);
                }
            break;
        
        case 'titulo'://Repito el proceso anterior pero el criterio es la propiedad 'título'
            for (let fila =0; fila < libros.length-1; fila++) {
                for (let columna = 0; columna < libros.length - 1- fila; columna++) {
                    if (libros[columna].titulo > libros[columna+1].titulo ) {
                        let temporal = libros [columna];
                        libros [columna ] = libros [columna+1];
                        libros [columna + 1 ] = temporal; 
                    }
                }
            }

            for (let i = 0; i < libros.length; i++) {
                  console.log(libros[i].titulo + ' - ' + libros[i].anio);
                }
            break;
        
         default:
            console.log('Datos inválidos.');
        break;

    }       
};

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(idBorrar) {
    let confirmacion = false;
    do {//Utilizo un do...while para verificar que el libro exista antes de borrarlo.
        let indice = libros.findIndex(libro => libro.id === idBorrar); // .find() permite buscar el índice del libro.

        if (indice !== -1) {//Mientras no me devuelve -1 (que indica que no existe el dato)
            let libro = libros[indice]; //asigno los valores del indice a una varible libro
            console.log('Id: ' + libro.id + '.\nTítulo: ' + libro.titulo + '.\nAutor@: ' + libro.autor + '.\nAño: ' + libro.anio + '.');//La imprimo para que el usuario la vea

            let respuesta = normalizarDatosUsuario(prompt('¿Es correcto? Si/No: ')); //Le pido que me confirme si es correcto.
            confirmacion = (respuesta === 'si') ? true : false; //Si me dice que si la variable confirmación se vuelve verdera

            if (!confirmacion) {
                idBorrar = parseInt(prompt('Intentá nuevamente. Ingrese otro id de libro: ')); //Pero si la variable confirmación continua siendo falsa, se le píde nuevamente el id.
            }

        } else {
            console.log('No se encontró un libro con ese id.');//Si me devuelve -1 le aviso al usuario que no existe ese id.
            idBorrar = parseInt(prompt('Intentá nuevamente. Ingrese otro id de libro: ')); //Nuevamente le pido otro id.
        }

    } while (confirmacion === false); //Se repite hasta que confirmación se vuelva verdaera.

    //Cuando la variable confirmación es verdadera
    let indiceFinal = libros.findIndex(libro => libro.id === idBorrar); //Busco nuevamente el indice del libro a borrar y lo declaro como indiceFinal
    if (indiceFinal !== -1) {//Mientras indiceFinal sea verdadera
        libros.splice(indiceFinal, 1);//borro ese elemento
        console.log('El libro ha sido borrado correctamente.');//Y le aviso al usuario
    }
};

//Punto 3: Gestión de Usuarios
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
function registrarUsuario(nuevoUsuario) {
    usuarios.push(nuevoUsuario);//Utilizo ese metodo para guardar la información al array Usuarios.
    console.log ('Id. ' + nuevoUsuario.id + '.\nUsuario: ' + nuevoUsuario.nombre + '.\nEmail: ' + nuevoUsuario.email + '.');
    console.log('Se ha registrado exitosamente.');
};

// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuario
function mostrarTodosLosUsuarios () {
    for (let i=0; i < usuarios.length; i++){//Recorro todo el array por sus filas.
        idUsuario = usuarios[i].id;//Indico cual es el idUsuario para poder ver los librosPrestados
        console.log('\nId.'+ usuarios[i].id + '.\nUsuario: ' + usuarios[i].nombre + '.\nEmail: ' + usuarios[i].email + '\nLibros Prestados: '); //Imprimo toda la información del array.
        mostrarLibrosDeUsuario(idUsuario);
        };
};

// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(criterioBuscarUsuario) {
    for (let i = 0; i < usuarios.length; i++) {//Recorro el array para buscar el email que coincida
        if (usuarios[i].email === criterioBuscarUsuario) {
            idUsuario = usuarios[i].id;
            console.log('Id.: ' + usuarios[i].id + '\nAutor: ' + usuarios[i].nombre + '\nAño: ' + usuarios[i].email);//Imprimo la informacion
            mostrarLibrosDeUsuario(idUsuario);
            return; // termina la función si lo encontró
        }
    }    
};

// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarUsuario(idBorrarUsuario) {
    for (let fila =0; fila < usuarios.length; fila++) {//Recorro el array usuarios
            if ( usuarios[fila].id === idBorrarUsuario) {//Comparo el valor dado con los datos del array
                usuarios.splice (fila, 1);//borro el parametro dado
                    console.log ('El usuario ha sido borrado.');//Confirmo la operación
                    return;
                }
        }
};

//Punto 4: Sistema de Préstamos
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro(idLibro, idUsuario) {
    for (let i = 0; i < libros.length; i++) { //recorro el array libros.
        do{ //Mientras no se encuentre el libro, se repite.       
            if (idLibro === libros[i].id && libros[i].disponibilidad === true) {//Solo muestro el libro si este esta en el array y disponible para ser prestado.
                console.log('Id.: ' + libros[i].id + '.\nTítulo: ' + libros[i].titulo + '.\nAutor@: ' + libros[i].autor + '.\nAño: ' + libros[i].anio + '.\nDisponibilidad: ' + (libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));
                confirmacionBuscarLibro = normalizarDatosUsuario(prompt('¿Confirma el prestámo del libro? Si/No: '));
            
                if (confirmacionBuscarLibro === 'si') { //Si hay confirmación del usuario:
                    confirmacionBuscarLibro = true; //Esta variable se vuelve verdadera para terminar con el do..while
                    idUsuario =  parseInt(prompt('Ingrese su id. de soci@: '));//Ahora si le pregunto su id.          
                    
                    for (let i = 0; i < usuarios.length; i++){//Recorro el array de usuarios
                        
                        do {//Mientras no se encuentre el usuario, se repite.
                            
                            if (idUsuario === usuarios[i].id) {//Si encuentro el usuario, lo muestro.
                                console.log('Id.: ' + usuarios[i].id + '.\nUsuari@: ' + usuarios[i].nombre + '.\nEmail: ' + usuarios[i].email );
                                mostrarLibrosDeUsuario(idUsuario)
                                
                                do{//Se repite hasta que tengo confirmación
                                    let confirmacionUsuario = normalizarDatosUsuario(prompt('¿El id. es correcto? Si/No: '));
                                    
                                    if (confirmacionUsuario === 'si') {//Si me confirma que es el usuario, proceso a asignarle ese libro.
                                        confirmacionPrestamoUsuario = true;//Para que finalize el do...while
                                        usuarios[i].librosPrestados.push(libros[i].id);//Agrego ese libro como libro prestado
                                        libros[i].disponibilidad = false; //Marco que ese libro ya no esta disponible
                                        console.log('El prestámo se realizó existosamente.');//Confirmo la operación
                                        idUsuario = usuarios[i];
                                        mostrarLibrosDeUsuario(idUsuario)//Muestro el nuevo array de libros prestados
                                        }

                                } while (confirmacionPrestamoUsuario === false);
                            
                            } else {
                                idUsuario =  parseInt(prompt('El id. es inexistente. Ingrese nuevamente su id. de soci@: '));
                            }
                        
                        } while (confirmacionBuscarUsuario === false)
                    } 
                } 
            } else {
                idLibro=  parseInt(prompt('El id. es inexistente. Ingrese nuevamente el id. del libro: '));
            }
        } while (confirmacionBuscarLibro === false);
    } 
};

// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario) {
    let usuarioEncontrado = false;
    while (!usuarioEncontrado) {//Mientras no encuentre el usuario.
        for (let i = 0; i < usuarios.length; j++) {//Recorro el array usuarios.
            
            if (idUsuario === usuarios[i].id) {//Si el idUsuario es igual a un id del array.
                console.log('Id.: ' + usuarios[i].id + '.\nUsuari@: ' + usuarios[i].nombre + '.\nEmail: ' + usuarios[i].email);//imprimo la info de ese usuario
                mostrarLibrosDeUsuario(idUsuario)
                let confirmarUsuario = normalizarDatosUsuario(prompt('¿El id. es correcto? Si/No: '));
                
                if (confirmarUsuario === 'si') {//Si me confirma que si.
                    usuarioEncontrado = true;
                    let idLibro = parseInt(prompt('Ingrese el id. del libro: '));//Le pido que ingrese el id. del libro.
                    
                    for (let i = 0; i < libros.length; i++) {//Recorro el array de libros.
                        
                        if (idLibro === libros[i].id && libros[i].disponibilidad === false) {//Si encuentro el libro y efectivamente esta no disponible.
                            console.log('Id.: ' + libros[i].id + '.\nTítulo: ' + libros[i].titulo + '.\nAutor@: ' + libros[i].autor + '.\nAño: ' + libros[i].anio + '.\nDisponibilidad: ' + (libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));//Imprimo la información
                            let confirmar = normalizarDatosUsuario(prompt('¿Confirma la devolución del libro? Si/No: '));
                            
                            if (confirmar === 'si') {//Si me confirman que es correcto, 
                                let nuevoLibrosPrestados = usuarios[i].librosPrestados.slice(libros[i].id); //Borro dicho id. de los libros prestados.
                                libros[i].disponibilidad = true;//Cambio su disponibilidad a disponible.
                                console.log('La devolución se realizó existosamente.');//Confirmo la operación
                                mostrarLibrosDeUsuario(idUsuario)//Muestro como quedo el nuevo array.
                                break;
                            }
                        } else {
                            console.log('Datos inválidos. Ingrese nuevamente.')
                        }
                    }
                }
            }
            if (!usuarioEncontrado) {//Si no encuentro el id. le aviso al usuario
                        console.log('El id. es inexistente o no fue confirmado. Intente nuevamente.');
        } break;
    };
}
};

//Punto 5: Sistema de Préstamos
// a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()).
function generarReporteLibros () { //.map .filter .reduce
    //cantidad total de libros .length
    console.log('Cantidad total: ' + libros.length + ' libros.'); //Uso la propiedad .length para saber cuántos libros hay en total en el array

    //cantidad de libros prestados .reduce
    totalLibrosPrestados = libros.reduce((contador, libros) => { //Uso reduce para contar cuántos libros tienen disponibilidad en false
        if (libros.disponibilidad === false) { //Si el libro no está disponible (fue prestado)
            return contador + 1; //Sumo uno al contador
        } else {
            return contador; //Si está disponible, no sumo nada
        }
    }, 0); //Empiezo el contador desde 0

    console.log('Cantidad de libros prestados: ' + totalLibrosPrestados); //Muestro cuántos libros están prestados


    //cantidad de libros por genero .map y .reduce
    console.log('Libros por género.') //Muestro un mensaje inicial para indicar qué se va a calcular

    totalLibrosGenero = libros.map(libro => libro.genero); //Busco los géneros de todos los libros y armo un array solo con eso

    librosPorGenero = totalLibrosGenero.reduce((contador, generoActual) => { //Uso reduce para contar cuántas veces aparece cada género

        switch (generoActual) { //Filtro los géneros que me interesan contar (los válidos)
            case 'Biografia':
            case 'Ensayo':
            case 'Desarrollo personal':
            case 'Psicologia':
            case 'Ficcion':
            case 'No ficcion':
                if (contador[generoActual]) { //Si el género ya existe en el contador, le sumo uno
                    contador[generoActual]++; //Sumo las veces que encuentre el generoActual
                } else {
                    contador[generoActual] = 1; //Si es la primera vez que aparece, lo inicializo en 1
                }
            break;
        }

        return contador; //Devuelvo el acumulador (contador) actualizado
    }, {}); //Empiezo con un objeto vacío

    for (let genero in librosPorGenero) { //Recorro el objeto final con los géneros contados
        console.log(genero + ': ' + librosPorGenero[genero]); //Muestro cada género con su cantidad correspondiente
    };

    //libro más antiguo y más nuevo .reduce
    libroMasAntiguo = libros.reduce((numero, libros) => { //Uso reduce para recorrer todos los libros y buscar el año más bajo
        if (libros.anio < numero) { //Si el año actual es menor al número acumulado
        return numero = libros.anio; //Actualizo el número con ese año más antiguo
        } else {
            return numero; //Si no es menor, mantengo el valor actual
        }
    }, libros[0].anio); //Empiezo comparando desde el año del primer libro

    console.log('El libro más antiguo es del año: ' + libroMasAntiguo); //Muestro el resultado por consola

    libroMasNuevo = libros.reduce((numero, libros) => { //Ahora uso reduce para encontrar el año más alto (más reciente)
        if (libros.anio > numero) { //Si el año actual es mayor al número acumulado
        return numero = libros.anio; //Actualizo el número con ese año más nuevo
        } else {
            return numero; //Si no es mayor, mantengo el valor actual
        }
    }, libros[0].anio); //Inicio desde el año del primer libro también

    console.log('El libro más nuevo es del año: ' + libroMasNuevo); //Muestro el resultado por consola
};

//Punto 6: Identificación Avanzada de libros
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra.
function librosConPalabrasEnTitulo(libros) {
    const letrasValidas = 'abcdefghijklmnopqrstuvwxyz '; //Defino qué caracteres son válidos: solo letras minúsculas y espacios

    let librosFiltrados = libros.filter(libro => {
        // Limpiamos el título: pasamos a minúsculas, eliminamos acentos y espacios sobrantes
        let tituloLimpio = libro.titulo.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Verificamos que el título solo contenga letras y espacios
        for (let i = 0; i < tituloLimpio.length; i++) {
            let letra = tituloLimpio[i];
            if (!letrasValidas.includes(letra)) { //Si encuentra un carácter inválido, descarta el libro
                return false;
            }
        }

        // Contamos la cantidad de palabras (usamos split por espacio)
        let palabras = tituloLimpio.split(' '); //Separo el título por espacios
        let cantidadPalabras = 0;
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] !== '') { //Ignoro los espacios vacíos
                cantidadPalabras++; //Sumo las palabras válidas
            }
        }

        // Nos quedamos solo con los títulos que tienen más de una palabra
        return cantidadPalabras > 1;
    });

    console.log('Libros con más de una palabra en el título (solo letras):'); //Imprimo un mensaje de referencia
    librosFiltrados.forEach(libro => console.log(libro.titulo)); //Muestro los títulos que cumplen la condición

    return librosFiltrados; //Devuelvo el nuevo array con los libros filtrados
};

//Punto 7: Cálculos Estadísticos
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math.
function calcularEstadisticas () {
    let aniosPublicacion = libros.map(libro => libro.anio); //Creo un array con todos los años de publicación de los libros
    console.log('Si miramos sólo los años de publicación de nuestra colección, obtenemos las siguientes estadísticas.');

    // promedio de años de publicacion
    let suma = 0;
    for (let i = 0; i < aniosPublicacion.length; i++) {
        suma += libros[i].anio; //Sumo todos los años de publicación
    };

    let promedio = Math.ceil(suma / aniosPublicacion.length); //Calculo el promedio y redondeo hacia arriba con Math.ceil()
    console.log('En promedio, nuestra colección es del año ' + promedio + '.');

    // año de publicación más frecuente (moda)
    let moda = 0; 
    let masFrecuente = 0; //Cantidad máxima encontrada de publicaciones en un año
    let maxPublicaciones = 0; //Cantidad exacta de publicaciones del año más frecuente

    //Uso reduce para contar cuántas veces se repite cada año
    let anioFrecuente = aniosPublicacion.reduce((acumulador, anios) => {
        if (!acumulador[anios]) {
            acumulador[anios] = 0; //Inicializo en 0 si el año aún no fue registrado
        };

        acumulador[anios]++; //Sumo 1 a ese año

        if (acumulador[anios] > masFrecuente) { //Si ese año supera al más frecuente hasta ahora...
            masFrecuente = acumulador[anios]; //Actualizo el número de repeticiones
            moda = anios; //Guardo el año como la moda
        }
        return acumulador; 
    }, {});

    maxPublicaciones = Math.max(...Object.values(anioFrecuente)); //Uso Math.max para encontrar el valor más alto del objeto

    console.log('El año con más publicaciones (cant. ' + maxPublicaciones + ') es ' + moda + '.');

    // diferencia de años entre el más antiguo y más nuevo
    let masNuevo = Math.max(...aniosPublicacion); //Busco el año más reciente con Math.max
    let masAntiguo = Math.min(...aniosPublicacion); //Busco el año más antiguo con Math.min
    let diferencia = masNuevo - masAntiguo; //Calculo la diferencia entre ambos

    console.log('La diferencia entre el libro más antiguo (' + masAntiguo + ') y el más nuevo (' + masNuevo + ') es de ' + diferencia + ' años.');
}


//Punto 9: Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
function menuPrincipal() {
    let opcionPrincipal = 0;
    do { //Uso do... while para que muestre al menos una vez las opciones.
        console.log('\nMENÚ PRINCIPAL' + '\n1. Libros' + '\n2. Usuarios' + '\n3. Préstamos' + '\n0. Salir'); //Imprimo las opciones que se pueden elegir.
        
        opcionPrincipal = parseInt(prompt('Ingrese el número de la opción escogida: ')); //Le permito al Usuario que ingrese una opción.

        switch (opcionPrincipal) { //Uso switch para que cada opción continue por el camino correspondiente.
            case 1:
                menuLibro(); //Utilizo otras funciones para que se abran los submenús
                break;
            case 2:
                menuUsuario();
                break;
            case 3:
                menuPrestamos();
                break;
            case 0:
                console.log('Saliendo del sistema...');
                break;
            default:
                console.log('Ingrese una opción válida.'); //Brindo una respuesta ante un posible error.
        }

    } while (opcionPrincipal !== 0); //Indico la condición: mientras opciónPrincipal valga 0 se debe ejecutar.
}

function menuLibro() {//Para crear un submenú, utilizo el mismo formato del menuPrincipal.
    let opcionLibro = '';
    do {
        console.log('\nMENÚ LIBROS\na. Ver todos los libros\nb. Ordenar libros\nc. Buscar libro\nd. Opciones avanzadas\ne. Solo administrador\nx. Volver al menú principal');
        opcionLibro = normalizarDatosUsuario(prompt('Ingrese la letra de la opción escogida: '));

        switch (opcionLibro) {
            case 'a':
                for (let i = 0; i < libros.length; i++) {
                    console.log('\nId. ' + libros[i].id +'\nTítulo: ' + libros[i].titulo + '\nAutor: ' + libros[i].autor + '\nAño: ' + libros[i].anio + '\nGénero: ' + libros[i].genero + (libros[i].disponibilidad ? '\nDisponible.' : '\nNo disponible.')); //Me permite ver todos los libros del array.
                }    
                break;
           
            case 'b':
                let criterioOrdenar = normalizarDatosUsuario(prompt ('¿Cómo desea ordenar los libros? Título/Año: ')); //Solicito que el usuario ingrese un criterio para ordenar los libros.
                ordenarLibros(criterioOrdenar)
                break;

            case 'c':
                let criterioBuscar = normalizarDatosUsuario(prompt ('¿Qué desea buscar? Título/Autor/Género: ')); //El usuario selecciona su criterio de búsqueda 
                let valor = normalizarDatosUsuario(prompt ('Ingrese el '+ ((criterio === 'titulo') ? 'título: ' : (criterio === 'autor') ? 'autor: ' : 'género: '))); //El usuario ingresa el valor del criterio elegido. 
                buscarLibro (criterioBuscar, valor); //Llamo a la función correspondiente.
                break;

            case 'd':
                menuLibroAvanzado();
                break;
            
            case 'e':
                let esAdmin = normalizarDatosUsuario(prompt('¿Es administrador? Si/No: '));
                esAdmin === 'si' ? menuLibroAdministrador() : console.log('Acceso denegado.');
                break;

            case 'x':
                break;

            default:
                console.log('Ingrese una opción válida.');
        }
    } while (opcionLibro !== 'x'); //Se va a ejecutar mientras el usuario no elija cerrar dicha operación.
}

function menuLibroAvanzado() {
    let opcionLibroAvanzado = 0;
    do {
        console.log('\nMENÚ LIBRO AVANZADO\n1. Filtrar por palabras en título\n2. Ver estadísticas\n0. Volver');
        opcionLibroAvanzado = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionLibroAvanzado) {
            case 1:
                librosConPalabrasEnTitulo(libros);
                break;
            case 2:
                calcularEstadisticas ();
                break;
            case 0:
                break;
            default:
                console.log('Ingrese una opción válida.');
        }
    } while (opcionLibroAvanzado !== 0);
}

function menuLibroAdministrador() {
    let opcionLibroAdministrador = 0;
    do {
        console.log('\nMENÚ LIBRO ADMINISTRADOR\n1. Agregar libro\n2. Borrar libro\n0. Volver');
        
        opcionLibroAdministrador = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionLibroAdministrador) {
            case 1:
                let nuevoLibro = [];
                agregarLibro(nuevoLibro);
                break;
                
            case 2:
                let idBorrar = parseInt(prompt ('¿Qué título desea borrar? Ingrese el id.: ')); //El usuario ingresa el número del id. Me aseguro que sea un número entero.
                borrarLibro(idBorrar);
                break;

            case 0:
                break;

            default:
                console.log('Ingrese una opción válida.');
        }
    } while (opcionLibroAdministrador !== 0);
}

function menuUsuario() {
    let opcionUsuario = 0;
    do {
       console.log('\nMENÚ USUARIOS\n1. Registrar usuario\n2. Buscar por email\n3. Solo administrador\n0. Volver');
        opcionUsuario = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionUsuario) {
            case 1:
                let nuevoUsuario = [];//Primero creo un array para luego agregarle información.
                let confirmacion = false;
                
                do {
                    nuevoUsuario = {//Primero creo un objeto con todas las propiedades para que sea más fácil guardar la información en el array 'usuarios'
                        id: '10' + (usuarios.length + 1),//el id lo asigna directamente el sistema para seguir la numeración del array.
                        nombre: normalizarDatosUsuario(prompt('Ingrese su nombre y apellido: ')),//El usuario ingresa sus datos.
                        email: normalizarDatosUsuario(prompt('Ingrese su email: '))
                    };

                    console.log('Usuario: ' + nuevoUsuario.nombre + '.\nEmail: ' + nuevoUsuario.email + '.');

                    let respuesta = normalizarDatosUsuario(prompt('¿Es correcto? Si/No: '));
                    confirmacion = (respuesta === 'si') ? true : false;

                } while (confirmacion === false);   
                
                registrarUsuario(nuevoUsuario);

                break;

            case 2:
                let criterioBuscarUsuario = ''; 
                let confirmacionBuscarUsuario = false;
                let idUsuario = '';

                do {
                    criterioBuscarUsuario = prompt('Ingrese el email del usuario que desea buscar: ');
                    console.log('El email ingresado es: ' + criterioBuscarUsuario);

                    let respuesta = normalizarDatosUsuario(prompt('¿Es correcto? Si/No: '));
                    confirmacionBuscarUsuario = (respuesta === 'si') ? true : false;

                } while (confirmacionBuscarUsuario === false);
                console.log('Usuario no encontrado.');

                buscarUsuario(criterioBuscarUsuario);

                break;
            
            case 3: //En este caso se agrega una verificación extra porque el siguiente menu permite modificar información sensible.
                let esAdmin = prompt('¿Es administrador? si/no: ').toLowerCase();
                esAdmin === 'si' ? menuUsuarioAdministrador() : console.log('Acceso denegado.');
                break;
            
            case 0:
                break;
            
            default:
                console.log('Ingrese una opción válida.');
        }
    } while (opcionUsuario !== 0);
}

function menuUsuarioAdministrador() {
    let opcionUsuarioAdministrador = 0;
    do {
        console.log('\nMENÚ USUARIO ADMINISTRADOR\n1. Ver todos los usuarios\n2. Borrar usuario\n0. Volver');


        opcionUsuarioAdministrador = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionUsuarioAdministrador) {
            case 1:
                mostrarTodosLosUsuarios();
                break;

            case 2:
                let confirmacionBorrarUsuario = false;
                let idBorrarUsuario = 0;
                let usuarioEncontrado = false;

                do {//Utilizo do...while para tener una confirmación antes de borrar al usuario.
                    usuarioEncontrado = false;  
                    idBorrarUsuario = parseInt(prompt ('¿Qué usuario desea borrar? Ingrese el id.: '));//El usuario ingresa el id. a borrar.
                    for (let i=0; i < usuarios.length; i++){//Recorro el array usuarios
                        if (usuarios[i].id === idBorrarUsuario) {
                            idUsuario = usuarios[i].id;
                            usuarioEncontrado = true;
                            console.log('Id: ' + usuarios[i].id + '.\Usuario: '+ usuarios[i].nombre + '.\nEmail: ' + usuarios[i].email); 
                            mostrarLibrosDeUsuario(idUsuario);
                        }
                    }
                    confirmacionBorrarUsuario = normalizarDatosUsuario(prompt('¿Es correcto? Si/No: '));
                    confirmacionBorrarUsuario = (respuesta === 'si') ? true : false;
                
                    if(!usuarioEncontrado) {
                        console.log('Usuario no encontrado. Ingresa un id. válido.')
                    }
                } while (usuarioEncontrado === false);

                borrarUsuario(idBorrarUsuario) 
                break;
                
            case 0:
                break;
            default:
                console.log('Ingrese una opción válida.');
        }
    } while (opcionUsuarioAdministrador !== 0);
}

function menuPrestamos() {
    let opcionPrestamo = 0;
    do {
        console.log('\nMENÚ PRÉSTAMOS\n1. Realizar préstamo\n2. Devolver libro\n3. Ver reporte\n0. Volver');

        opcionPrestamo = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionPrestamo) {
            case 1:
                idLibro = parseInt(prompt('Ingrese el id. del libro: '));//Solicito que ingre el id. del libro
                let confirmacionBuscarLibro = true;//Declaro variables booleanas para la confirmación de las operaciones
                let confirmacionPrestamoUsuario = false;
                let confirmacionBuscarUsuario = false;

                prestarLibro(idLibro, idUsuario);
                break;
           
            case 2:
                idUsuario = parseInt(prompt('Ingrese su id. de soci@: '));
                let confirmacionBuscarLibro = true;
                let confirmacionDevolucionUsuario = false;

                devolverLibro(idLibro, idUsuario);
                break;
            
            case 3:
                generarReporteLibros ();
                break;
            
            case 0:
                break;
            default:
                console.log('Ingrese una opción válida.');
        }
    } while (opcionPrestamo !== 0);
}

// Iniciar el programa
menuPrincipal();
