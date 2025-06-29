//Sistema de Gestión de Biblioteca

//Punto 10: Comentando mi código
// Utilizaré las // para comentar mi código, respetando el formato Punto - Consigna - Explicación, o, de ser necesario, también usaré /* */. A excepción del presente para evitar que el mismo sea reiterativo.

const prompt = require('prompt-sync')(); //Inicializó está función al comienzo porque este sistema requiere en diversos momentos que el usuario ingrese información.

//Punto 1: Estructura de Datos. 
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros.
const libros = [ //Utilizo const porque es información que no voy a reasignar pero si modificar.
            {id: 1, titulo: "Sin querer queriendo", autor: "Roberto Gómez Bolaños", año: 2006, genero: "Biografía", disponibilidad: false }, // El uso de {} es para señalar que son propiedades de cada array.
            {id: 2, titulo: "La última actriz", autor: "Tamara Tenenbaum", año: 2024, genero: "Ficción", disponibilidad: true },// El uso de true (booleano) indica que el libro está disponible, de lo contrario, fue prestado.
            {id: 3, titulo: "Un millón de cuartos propios", autor: "Valeria Tentoni", año: 2021, genero: "Ensayo", disponibilidad: false },
            {id: 4, titulo: "La biblioteca de la medianoche", autor: "Matt Haig", año: 2020, genero: "Ficción", disponibilidad: false },
            {id: 5, titulo: "El arte de aburrirse", autor: "Lars Svendsen", año: 2007, genero: "Ensayo", disponibilidad: true },
            {id: 6, titulo: "La digestión es la cuestión", autor: "Giulia Enders", año: 2014, genero: "No ficción", disponibilidad: false },
            {id: 7, titulo: "Hábitos atómicos", autor: "James Clear", año: 2018, genero: "Desarrollo personal", disponibilidad: true },
            {id: 8, titulo: "La enfermedad del aburrimiento", autor: "Enric Puig Punyet", año: 2020, genero: "Ensayo", disponibilidad: false},
            {id: 9, titulo: "El cuerpo lleva la cuenta", autor: "Bessel van der Kolk", año: 2014, genero: "Psicología", disponibilidad: false },
            {id: 10, titulo: "Un animal salvaje", autor: "Joël Dicker", año: 2023, genero: "Ficción", disponibilidad: true },
            {id: 11, titulo: "El tiempo que tuvimos", autor: "María Oruña", año: 2024, genero: "Ficción", disponibilidad: false },
            {id: 12, titulo: "El faro de los amores dormidos", autor: "Mónica Carrillo", año: 2020, genero: "Ficción", disponibilidad: true },
            {id: 13, titulo: "Matate, amor", autor: "Ariana Harwicz", año: 2012, genero: "Ficción", disponibilidad: false },
            {id: 14, titulo: "La química del amor", autor: "Ali Hazelwood", año: 2022, genero: "Ficción", disponibilidad: false },
            {id: 15, titulo: "Amigos, amantes y aquello tan terrible", autor: "Matthew Perry", año: 2022, genero: "Biografía", disponibilidad: false }
];

// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. 
const usuarios = [ //Nuevamente utilizo const porque es información que no voy a reasignar pero si modificar.
            { id: 101, nombre: "Sofía González", email: "sofia.gonzalez@gmail.com", librosPrestados: [3] },
            { id: 102, nombre: "Lucas Fernández", email: "lucas.fernandez@gmail.com", librosPrestados: [1, 14] },
            { id: 103, nombre: "Martina López", email: "martina.lopez@gmail.com", librosPrestados: [4, 8] },
            { id: 104, nombre: "Mateo Ramírez", email: "mateo.ramirez@gmail.com", librosPrestados: [6] },
            { id: 105, nombre: "Valentina Torres", email: "valentina.torres@gmail.com", librosPrestados: [9] },
            { id: 106, nombre: "Thiago Medina", email: "thiago.medina@gmail.com", librosPrestados: [11] },
            { id: 107, nombre: "Camila Herrera", email: "camila.herrera@gmail.com", librosPrestados: [13, 15] }
];

//Punto 2: Funciones de Gestión de Libros
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

//Punto 3: Gestión de Usuarios
// a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuario
// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

//Punto 4: Sistema de Préstamos
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
// b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.

//Punto 5: Sistema de Préstamos
// a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()).

//Punto 6: Identificación Avanzada de libros
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra.

//Punto 7: Cálculos Estadísticos
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math.

//Punto 8: Manejo de Cadenas
// a) Crear una función normalizarDatos() que utilice métodos de strings. 

//Punto 9: Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().