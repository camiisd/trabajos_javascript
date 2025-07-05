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
const prompt = require('normalizarDatosUsuario(prompt-sync')(); //Inicializo la variable de normalizarDatosUsuario(prompt para que el usuario pueda interactuar con el sistema

function agregarLibro (id, titulo, autor, anio, genero){
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