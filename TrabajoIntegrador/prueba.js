const prompt = require ('prompt-sync')();

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

//CONSIGNA A 
function agregarLibro (id, titulo, autor, anio, genero){
let nuevoLibro = { //Primero creo un objeto con todas las propiedades para que sea más fácil guardar la información en el array 'libros'
        id: libros.length + 1, //el id lo asigna directamente el sistema para seguir la numeración del array.
        titulo: prompt ('Ingrese el título: ').toLowerCase(), //La última función me permite que todo se quede en minúsculas.
        autor: prompt ('Ingrese el autor: ').toLowerCase(),
        anio: parseInt (prompt('Ingrese el año: ')), //Me aseguro que el año sea un número entero.
        genero: prompt('Ingrese el género: ').toLowerCase()
    };

    libros.push (nuevoLibro);
};

//consigna B

let criterioBuscar = prompt ('¿Qué desea buscar? Título/Autor/Género: ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); 
let valor = prompt ('Ingrese el '+ ((criterio === 'titulo') ? 'título: ' : (criterio === 'autor') ? 'autor: ' : 'género: ')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
//CAMBIAR CRITERIO POR CRITERIOBUSCAR
//REVISAR BIEN CÓMO ESCRIBIRLO. 

function buscarLibro (criterio, valor) {
    let criterio = criterioBuscar;
    switch (criterio) {
        case 'titulo': 
            for (i=0; i < libros.length; i++) {
               if (libros[i].titulo.toLowerCase() === valor) {
                    console.log('Título: ' + libros[i].titulo);
                    console.log('Autor: ' + libros[i].autor);
                    console.log('Año: ' + libros[i].anio);
                    console.log('Género: ' + libros[i].genero);
                    console.log((libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));
               }
            }
        break;
        
        case 'autor':
             for (i=0; i < libros.length; i++) {
               if (libros[i].autor.toLowerCase() === valor) {
                    console.log('Título: ' + libros[i].titulo);
                    console.log('Autor: ' + libros[i].autor);
                    console.log('Año: ' + libros[i].anio);
                    console.log('Género: ' + libros[i].genero);
                    console.log((libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));  
               }
            }
        break;

        case 'genero':
             for (i=0; i < libros.length; i++) {
               if (libros[i].genero.toLowerCase() === valor) {
                    console.log('Título: ' + libros[i].titulo);
                    console.log('Autor: ' + libros[i].autor);
                    console.log('Año: ' + libros[i].anio);
                    console.log('Género: ' + libros[i].genero);
                    console.log((libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));
               };
            };
            
        break;

        case 'id':
            for (i=0; i < libros.length; i++) {
               if (libros[i].id.toLowerCase() === valor) {
                    console.log('Título: ' + libros[i].titulo);
                    console.log('Autor: ' + libros[i].autor);
                    console.log('Año: ' + libros[i].anio);
                };
            };
            
        break;

        case 'id':


        default:
            console.log('Datos inválidos.');
        break;
    }

};

//CONSIGNA C

let criterioOrdenar = prompt ('¿Cómo desea ordenar los libros? Título/Año: ')
let criterio = criterioOrdenar; 

function ordenarLibros(criterio) {
    switch (criterio) {
        case 'año':
        case 'anio':
            for (let fila =0; fila < libros.length-1; fila++) {
                for (let columna = 0; columna < libros.length - 1- fila; columna++) {
                    if (libros[columna].anio > libros[columna+1].anio ) {
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
        
        case 'titulo':
        case 'título':
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

    }       
}
ordenarLibros(criterio);



//consigna D
let confirmacion = false;
let idBorrar = 0;

do {

idBorrar = parseInt(prompt ('¿Qué título desea borrar? Ingrese el id.: '));

for (let i=0; i < libros.length; i++){
    if (libros[i].id === idBorrar) {
    console.log('Id: ' + libros[i].id + '. Título: '+ libros[i].titulo + '. Autor@: ' + libros[i].autor + '. Año: ' + libros [i].anio + '.');
    
    confirmacion = prompt('¿Es correcto? Si/No: ').toLowerCase();
    if (confirmacion === 'si') {
        confirmacion = true;
    } else {
        confirmacion = false;
    }
}
}} while (confirmacion === false);



function borrarLibro(idBorrar) {
    for (let fila =0; fila < libros.length; fila++) {
            if ( libros[fila].id === idBorrar) {
                libros.splice (fila, 1);
                    console.log ('El libro ha sido borrado.');
                    return;
                    }
                }
    
            }

if (confirmacion === true) {
    borrarLibro(idBorrar);
    for (let i=0; i < libros.length; i++){
            console.log('Id: ' + libros[i].id + '. Título: '+ libros[i].titulo + '. Autor@: ' + libros[i].autor + '. Año: ' + libros [i].anio + '.');
        }
    } else {
        console.log ('El libro no fue encontrado.')
    };




//PUNTO 3

//CONSIGNA A

for (let i=0; i < usuarios.length; i++){
            console.log(usuarios[i].id + usuarios[i].nombre);
        }

let nuevoUsuario = [];
let confirmacionUsuario = false;

function registrarUsuario (nombre, email){
nuevoUsuario = { //Primero creo un objeto con todas las propiedades para que sea más fácil guardar la información en el array 'libros'
        id: '10' + (usuarios.length + 1), //el id lo asigna directamente el sistema para seguir la numeración del array.
        nombre: prompt ('Ingrese su nombre y apellido: ').toLowerCase(), //La última función me permite que todo se quede en minúsculas.
        email: prompt ('Ingrese su email: ').toLowerCase(),
    };

    usuarios.push (nuevoUsuario);
};

do {
    registrarUsuario(nuevoUsuario);
    console.log ('Nombre y apellido: '+ nuevoUsuario.nombre + '. Email: ' + nuevoUsuario.email + '.');
    confirmacion = prompt('¿Es correcto? Si/No: ').toLowerCase();
    if (confirmacion === 'si') {
        confirmacion = true;
    } else {
        confirmacion = false;
    }
} while (confirmacion === false);

console.log ('Id. ' + nuevoUsuario.id + '. ' + nuevoUsuario.nombre + '. ' + nuevoUsuario.email + '.');
console.log('Se ha registrado exitosamente.');


//CONSIGNA B

const usuarios = [ //Nuevamente utilizo const porque es información que no voy a reasignar pero si modificar.
{ id: 101, nombre: 'Sofía González', email: 'sofia.gonzalez@gmail.com', librosPrestados: [3] },
{ id: 102, nombre: 'Lucas Fernández', email: 'lucas.fernandez@gmail.com', librosPrestados: [1, 14] },
{ id: 103, nombre: 'Martina López', email: 'martina.lopez@gmail.com', librosPrestados: [4, 8, 17] },
{ id: 104, nombre: 'Mateo Ramírez', email: 'RAMIREZMATEO@GMAIL.COM', librosPrestados: [6] },
{ id: 105, nombre: 'Valentina Torres', email: 'valentina.torres@gmail.com', librosPrestados: [9] },
{ id: 106, nombre: 'Thiago Medina', email: 'thiago.medina@gmail.com', librosPrestados: [11] },
{ id: 107, nombre: 'Camila Herrera', email: 'CAMILAH@GMAIL.COM', librosPrestados: [13, 15] }
];

let usuariosLista = usuarios;

function mostrarTodosLosUsuarios(usuariosLista){
    for (let i=0; i < usuarios.length; i++) {
    console.log('Id. ' + usuarios[i].id + '. Nombre y apellido: ' + usuarios[i].nombre + '. Email: ' + usuarios[i].email);
    };
};

mostrarTodosLosUsuarios(usuarios);


//CONSIGNA C



//CAMBIAR CRITERIO POR CRITERIOBUSCAR
//REVISAR BIEN CÓMO ESCRIBIRLO. 
 
let criterioBuscar;

function buscarLibro (criterio, valor) {
        switch (criterio) {
        case 'titulo': 
            for (i=0; i < libros.length; i++) {
               if (libros[i].titulo.toLowerCase() === valor) {
                    console.log('Título: ' + libros[i].titulo);
                    console.log('Autor: ' + libros[i].autor);
                    console.log('Año: ' + libros[i].anio);
                    console.log('Género: ' + libros[i].genero);
                    console.log((libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));
               }
            }
        break;
        
        case 'autor':
             for (i=0; i < libros.length; i++) {
               if (libros[i].autor.toLowerCase() === valor) {
                    console.log('Título: ' + libros[i].titulo);
                    console.log('Autor: ' + libros[i].autor);
                    console.log('Año: ' + libros[i].anio);
                    console.log('Género: ' + libros[i].genero);
                    console.log((libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));  
               }
            }
        break;

        case 'genero':
             for (i=0; i < libros.length; i++) {
               if (libros[i].genero.toLowerCase() === valor) {
                    console.log('Título: ' + libros[i].titulo);
                    console.log('Autor: ' + libros[i].autor);
                    console.log('Año: ' + libros[i].anio);
                    console.log('Género: ' + libros[i].genero);
                    console.log((libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));
               };
            };
            
        break;

        case 'id':
            for (i=0; i < libros.length; i++) {
               if (libros[i].id === valor) {
                    console.log('*Título: ' + libros[i].titulo);
                    console.log('*Autor: ' + libros[i].autor);
                    console.log('*Año: ' + libros[i].anio);
                };
            };
            
        break;

        default:
            console.log('Datos inválidos.');
        break;
    }

};



function buscarUsuario (criterioBuscarUsuario) {
        for (i=0; i < usuarios.length; i++) {
        if (usuarios[i].email === criterioBuscarUsuario) {
                    console.log('Id.: ' + usuarios[i].id);
                    console.log('Autor: ' + usuarios[i].nombre);
                    console.log('Año: ' + usuarios[i].email);
                    id = usuarios[i].librosPrestados
                    console.log('Libros prestados: ')
                    let ids = usuarios[i].librosPrestados;
                    for (let i = 0; i < ids.length; i++) {
    buscarLibro('id", ids[i])
                    };
                    
            }
        }

        };

let confirmacionBuscarUsuario = false; 
let criterioBuscarUsuario = '';

do {
    criterioBuscarUsuario = prompt ('Ingrese el email del usuario que desea buscar: '); 
    console.log('El email ingresado es: ' + criterioBuscarUsuario)
    confirmacionBuscarUsuario = prompt('¿Es correcto? Si/No: ').toLowerCase();
    if (confirmacionBuscarUsuario === 'si') {
        confirmacionBuscarUsuario = true;
    } else {
        confirmacionBuscarUsuario = false;
    } 
    
} while (confirmacionBuscarUsuario === false);

buscarUsuario (criterioBuscarUsuario);



//CONSIGNA D

let confirmacionBorrarUsuario = false;
let idBorrarUsuario = 0;
let usuarioEncontrado = false;

do {
    usuarioEncontrado = false;  
    idBorrarUsuario = parseInt(prompt ('¿Qué usuario desea borrar? Ingrese el id.: '));
    for (let i=0; i < usuarios.length; i++){
        if (usuarios[i].id === idBorrarUsuario) {
            usuarioEncontrado = true;
            console.log('Id: ' + + usuarios[i].id + '. Nombre y apellido: '+ usuarios[i].nombre + '. Email: ' + usuarios[i].email + '. Libros prestados: ' +  llamar función para los libros  + '.'); 
        }
    }
    confirmacionBorrarUsuario = prompt('¿Es correcto? Si/No: ').toLowerCase();
    if (confirmacionBorrarUsuario === 'si') {
        confirmacionBorrarUsuario = true;
    }
    if(!usuarioEncontrado) {
        console.log('Usuario no encontrado. Ingresa un id. válido.')
    }
} while (usuarioEncontrado === false);




function borrarUsuario(idBorrarUsuario) {
    for (let fila =0; fila < usuarios.length; fila++) {
            if ( usuarios[fila].id === idBorrarUsuario) {
                usuarios.splice (fila, 1);
                    console.log ('El usuario ha sido borrado.');
                    return;
                    }
                }
    
            }

if (confirmacionBorrarUsuario === true) {
    borrarUsuario(idBorrarUsuario);
    for (let i=0; i < usuarios.length; i++){
            console.log('Id: ' + usuarios[i].id + '. Nombre y apellido: '+ usuarios[i].nombre + '. Email: ' + usuarios[i].email + '. Libros prestados: ' +  llamar función para los libros  + '.');
        }
    } else {
        console.log ('El libro no fue encontrado.');
    };
    


//PUNTO 4


//consigna A


let idLibro = parseInt(prompt('Ingrese el id. del libro: '));
let idUsuario = '';
let confirmacionBuscarLibro = true;
let confirmacionPrestamoUsuario = false;
let confirmacionBuscarUsuario = false;

function prestarLibro(idLibro, idUsuario) {
    for (let i = 0; i < libros.length; i++) { 
        do{
        if (idLibro === libros[i].id && libros[i].disponibilidad === true) {
            console.log('Id.: ' + libros[i].id + '. Título: ' + libros[i].titulo + '. Autor@: ' + libros[i].autor + '. Año: ' + libros[i].anio + '. Disponibilidad: ' + (libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));
            confirmacionBuscarLibro = prompt('¿Confirma el prestámo del libro? Si/No: ').toLowerCase();
            if (confirmacionBuscarLibro === 'si') {
                confirmacionBuscarLibro = true;
                idUsuario =  parseInt(prompt('Ingrese su id. de soci@: '));          
                for (let i = 0; i < usuarios.length; i++){
                   do {
                    if (idUsuario === usuarios[i].id) {

                        console.log('Id.: ' + usuarios[i].id + '. Usuari@: ' + usuarios[i].nombre + '. Email: ' + usuarios[i].email + '. LibrosPrestados: '); //PENSAR MEJOR.
                         do{
                            let confirmacionUsuario = prompt('¿El id. es correcto? Si/No: ').toLowerCase();
                            if (confirmacionUsuario === 'si') {
                                console.log('El prestámo se realizó existosamente.');
                                confirmacionPrestamoUsuario = true;
                                usuarios[i].librosPrestados.push(libros[i].id);
                                console.log(usuarios[i].librosPrestados);
                                libros[i].disponibilidad = false; 
                                }
                        } while (confirmacionPrestamoUsuario === false);
                        } else {
                            idUsuario =  parseInt(prompt('El id. es inexistente. Ingrese nuevamente su id. de soci@: '));
                            }
                        } while (confirmacionBuscarUsuario)
                        } 
                    } 
                } 
            } while (confirmacionBuscarLibro === false);
    } 
}

prestarLibro(idLibro, idUsuario); 

let idLibro = parseInt(prompt('Ingrese el id. del libro: '));
let idUsuario = '';
let confirmacionBuscarLibro = true;
let confirmacionPrestamoUsuario = false;

function prestarLibro(idLibro, idUsuario) {
    for (let i = 0; i < libros.length; i++) {
        if (idLibro === libros[i].id && libros[i].disponibilidad === true) {
            console.log('Id.: ' + libros[i].id + '. Título: ' + libros[i].titulo + '. Autor@: ' + libros[i].autor + '. Año: ' + libros[i].anio + '. Disponibilidad: ' + (libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));

            let confirmar = prompt('¿Confirma el préstamo del libro? Si/No: ').toLowerCase();
            if (confirmar === 'si') {
                let usuarioEncontrado = false;

                while (!usuarioEncontrado) {
                    idUsuario = parseInt(prompt('Ingrese su id. de soci@: '));

                    for (let j = 0; j < usuarios.length; j++) {
                        if (idUsuario === usuarios[j].id) {
                            console.log('Id.: ' + usuarios[j].id + '. Usuari@: ' + usuarios[j].nombre + '. Email: ' + usuarios[j].email);
                            let confirmarUsuario = prompt('¿El id. es correcto? Si/No: ').toLowerCase();

                            if (confirmarUsuario === 'si') {
                                console.log('El préstamo se realizó existosamente.');
                                usuarios[j].librosPrestados.push(libros[i].id);
                                libros[i].disponibilidad = false;
                                console.log('Libros prestados:', usuarios[j].librosPrestados);
                                usuarioEncontrado = true;
                                break; // salimos del for de usuarios
                            }
                        }
                    }

                    if (!usuarioEncontrado) {
                        console.log('El id. es inexistente o no fue confirmado. Intente nuevamente.');
                    }
                }
            }

            break; // salimos del for de libros porque ya encontramos el libro
        }
    }
}

prestarLibro(idLibro, idUsuario);




//CONSIGNA B
let idLibro = '';
let idUsuario = parseInt(prompt('Ingrese su id. de soci@: '));
let confirmacionBuscarLibro = true;
let confirmacionDevolucionUsuario = false;

function devolverLibro(idLibro, idUsuario) {
    let usuarioEncontrado = false;
    while (!usuarioEncontrado) {
        for (let i = 0; i < usuarios.length; j++) {
            if (idUsuario === usuarios[i].id) {
                console.log('Id.: ' + usuarios[i].id + '. Usuari@: ' + usuarios[i].nombre + '. Email: ' + usuarios[i].email + '. Libros Prestados: ' + usuarios[i].librosPrestados);
                let confirmarUsuario = prompt('¿El id. es correcto? Si/No: ').toLowerCase();
                if (confirmarUsuario === 'si') {
                    usuarioEncontrado = true;
                    let idLibro = parseInt(prompt('Ingrese el id. del libro: '));
                    for (let i = 0; i < libros.length; i++) {
                        if (idLibro === libros[i].id && libros[i].disponibilidad === false) {
                            console.log('Id.: ' + libros[i].id + '. Título: ' + libros[i].titulo + '. Autor@: ' + libros[i].autor + '. Año: ' + libros[i].anio + '. Disponibilidad: ' + (libros[i].disponibilidad ? 'Disponible.' : 'No disponible.'));
                            let confirmar = prompt('¿Confirma la devolución del libro? Si/No: ').toLowerCase();
                            if (confirmar === 'si') {
                                let nuevoLibrosPrestados = usuarios[i].librosPrestados.slice(libros[i].id);
                                libros[i].disponibilidad = true;
                                console.log('La devolución se realizó existosamente.');
                                console.log('Libros prestados:', nuevoLibrosPrestados); //ARREGLAR COMO SE VE EL STRING DE LIBROS PRESTADOS.
                                break;
                            }
                        }
                    }
                }
            }
            if (!usuarioEncontrado) {
                        console.log('El id. es inexistente o no fue confirmado. Intente nuevamente.');
        } break;
    }
}
}
    

 

devolverLibro(idLibro, idUsuario);


//PUNTO 5

function generarReporteLibros () { //.map .filter .reduce
    //cantidad total de libros .lenght
    console.log('Cantidad total: ' + libros.length + ' libros.');

    //cantidad de libros prestados .reduce
    totalLibrosPrestados = libros.reduce ((contador, libros) => {
        if (libros.disponibilidad === false) {
            return contador + 1;
        } else {
            return contador;
        }
        
    }, 0);

    console.log('Cantidad de libros prestados: ' + totalLibrosPrestados);

    //cantidad de libros por genero .map y .reduce
    console.log('Libros por género.')
    totalLibrosGenero = libros.map(libro => libro.genero);
    librosPorGenero = totalLibrosGenero.reduce((contador, generoActual) => {
        switch (generoActual) {
            case 'Biografía':
            case 'Biografia':
            case 'Ensayo':
            case 'Desarrollo personal':
            case 'Psicología':
            case 'Psicologia':
            case 'Ficción':
            case 'Ficcion':
            case 'No ficción':
            case 'No ficcion':
                if (contador[generoActual]) {
                    contador[generoActual]++;
                } else {
                    contador[generoActual] = 1;
                }
            break;
    }       
        return contador;
    }, {})
     for (let genero in librosPorGenero) {
        console.log( genero + ': ' + librosPorGenero[genero]);
    };
    


    //libro más antiguo y más nuevo .reduce
    libroMasAntiguo = libros.reduce((numero, libros) => {
        if (libros.anio < numero) {
            return numero = libros.anio;
        } else {
            return numero;
        }
    }, libros[0].anio);
    console.log('El libro más antiguo es del año: '+ libroMasAntiguo);

    libroMasNuevo = libros.reduce((numero, libros) => {
        if (libros.anio > numero) {
            return numero = libros.anio;
        } else {
            return numero;
        }
    }, libros[0].anio);
    console.log('El libro más nuevo es del año: '+ libroMasNuevo);
}

generarReporteLibros ();


//PUNTO 6
function librosConPalabrasEnTitulo(libros) {
    const letrasValidas = 'abcdefghijklmnopqrstuvwxyz ';
    
    let librosFiltrados = libros.filter(libro => {
        // Limpiamos el título: pasamos a minúsculas, eliminamos acentos y espacios sobrantes
        let tituloLimpio = libro.titulo.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        // Verificamos que el título solo contenga letras y espacios
        for (let i = 0; i < tituloLimpio.length; i++) {
            let letra = tituloLimpio[i];
            if (!letrasValidas.includes(letra)) {
                return false;
            }
        }

        // Contamos la cantidad de palabras (usamos split por espacio)
        let palabras = tituloLimpio.split(' ');
        let cantidadPalabras = 0;
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] !== '') {
                cantidadPalabras++;
            }
        }

        // Nos quedamos solo con los títulos que tienen más de una palabra
        return cantidadPalabras > 1;
    });

    console.log('Libros con más de una palabra en el título (solo letras):');
    librosFiltrados.forEach(libro => console.log(libro.titulo));
    
    return librosFiltrados;
}

librosConPalabrasEnTitulo(libros);


//PUNTO 7

function calcularEstadisticas () {
    let aniosPublicacion = libros.map(libro => libro.anio);
    console.log('Si miramos sólo los años de publicación de nuestra colección, obtenemos las siguientes estadísticas.')


    // promedio de años de publicacion
    let suma = 0;
    for (let i = 0; i < aniosPublicacion.length; i++) {
        suma += libros[i].anio;
    };
   let promedio = Math.ceil(suma/aniosPublicacion.length);
   console.log ('En promedio, nuestra colección es del año ' + promedio + '.');

    //año publicacion más frecuente
    let moda = 0; 
    let masFrecuente = 0;
    let maxPublicaciones = 0;
    let anioFrecuente = aniosPublicacion.reduce((acumulador, anios) => {
        if (!acumulador[anios]) {
            acumulador[anios] = 0;
        };

        acumulador[anios]++

        if (acumulador[anios] > masFrecuente) {
            masFrecuente = acumulador[anios];
            moda = anios;
        }
        return acumulador; 
    }, {});

    maxPublicaciones = Math.max(...Object.values(anioFrecuente));
    
    console.log('El año con más publicaciones (cant. ' + maxPublicaciones + ') es ' + moda + '.')

    //diferencia de años entre el más antiguo y más nuevo
    let masNuevo = Math.max(...aniosPublicacion);
    let masAntiguo = Math.min(...aniosPublicacion);
    let diferencia = masNuevo - masAntiguo;

    console.log('La diferencia entre el libro más antiguo (' + masAntiguo + ') y el más nuevo (' + masNuevo + ') es de ' + diferencia + ' años.');



}

calcularEstadisticas(); 

//PUNTO 8
function normalizarDatos() {

    //convertir todos los titulos a mayusculas
    // //eliminar espacios en blanco al inicio y final
    for (let i = 0; i < libros.length; i++) {
        libros[i].titulo = libros[i].titulo.toUpperCase().trim();
    };

    //emails a minusculas
     for (let i = 0; i < usuarios.length; i++) {
        usuarios[i].email = usuarios[i].email.toLowerCase();
    };

}

normalizarDatos();

//PUNTO 9
function menuPrincipal() {
    let opcionPrincipal = 0;
    do {
        console.log('\nMENÚ PRINCIPAL');
        console.log('1. Libros');
        console.log('2. Usuarios');
        console.log('3. Préstamos');
        console.log('0. Salir');

        opcionPrincipal = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionPrincipal) {
            case 1:
                menuLibro();
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
                console.log('Ingrese una opción válida.');
        }

    } while (opcionPrincipal !== 0);
}

function menuLibro() {
    let opcionLibro = '';
    do {
        console.log('\nMENÚ LIBROS');
        console.log('a. Ver todos los libros');
        console.log('b. Ordenar libros');
        console.log('c. Buscar libro');
        console.log('d. Opciones avanzadas');
        console.log('e. Solo administrador');
        console.log('x. Volver al menú principal');

        opcionLibro = prompt('Ingrese la letra de la opción escogida: ').toLowerCase();

        switch (opcionLibro) {
            case 'a':
                // verTodosLosLibros();
                break;
            case 'b':
                // ordenarLibros();
                break;
            case 'c':
                // buscarLibro();
                break;
            case 'd':
                menuLibroAvanzado();
                break;
            case 'e':
                let esAdmin = prompt('¿Es administrador? si/no: ').toLowerCase();
                esAdmin === 'si' ? menuLibroAdministrador() : console.log('Acceso denegado.');
                break;
            case 'x':
                break;
            default:
                console.log('Ingrese una opción válida.');
        }
    } while (opcionLibro !== 'x');
}

function menuLibroAvanzado() {
    let opcionLibroAvanzado = 0;
    do {
        console.log('\nMENÚ LIBRO AVANZADO');
        console.log('1. Filtrar por palabras en título');
        console.log('2. Ver estadísticas');
        console.log('0. Volver');

        opcionLibroAvanzado = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionLibroAvanzado) {
            case 1:
                // librosConPalabrasEnTitulo();
                break;
            case 2:
                // calcularEstadisticas();
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
        console.log('\nMENÚ LIBRO ADMINISTRADOR');
        console.log('1. Agregar libro');
        console.log('2. Borrar libro');
        console.log('0. Volver');

        opcionLibroAdministrador = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionLibroAdministrador) {
            case 1:
                // agregarLibro();
                break;
            case 2:
                // borrarLibro();
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
        console.log('\nMENÚ USUARIOS');
        console.log('1. Registrar usuario');
        console.log('2. Buscar por email');
        console.log('3. Solo administrador');
        console.log('0. Volver');

        opcionUsuario = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionUsuario) {
            case 1:
                // registrarUsuario();
                break;
            case 2:
                // buscarUsuario();
                break;
            case 3:
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
        console.log('\nMENÚ USUARIO ADMINISTRADOR');
        console.log('1. Ver todos los usuarios');
        console.log('2. Borrar usuario');
        console.log('0. Volver');

        opcionUsuarioAdministrador = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionUsuarioAdministrador) {
            case 1:
                // mostrarTodosLosUsuarios();
                break;
            case 2:
                // borrarUsuario();
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
        console.log('\nMENÚ PRÉSTAMOS');
        console.log('1. Realizar préstamo');
        console.log('2. Devolver libro');
        console.log('3. Ver reporte');
        console.log('0. Volver');

        opcionPrestamo = parseInt(prompt('Ingrese el número de la opción escogida: '));

        switch (opcionPrestamo) {
            case 1:
                // prestarLibro();
                break;
            case 2:
                // devolverLibro();
                break;
            case 3:
                // generarReporteLibros();
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