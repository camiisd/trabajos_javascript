/*Ejercicio 5: Verificar origen del auto
Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
para verificar y mostrar si el auto es de origen nacional o importado.
Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de
origen nacional.*/
const autosNacionales = ['Chevrolet', 'Ford', 'Fiat'];


/*
✔ Solicita al usuario que ingrese la marca de un auto.*/
const prompt = require ('prompt-sync')();

let ingresarMarca = prompt ('Ingrese una marca de auto: ').toLowerCase();

/*
✔ Utiliza una función flecha para determinar si la marca ingresada
corresponde a un auto de origen nacional o importado.*/
let mensajeOrigen = '';

let origenAuto = (ingresarMarca, autosNacionales) => {
    for (let i = 0; i < autosNacionales.length; i++) {
        mensajeOrigen = (ingresarMarca === autosNacionales[i].toLowerCase()) ? 'Origen Nacional.\n' : 'Origen Importado.\n';
    };
    return mensajeOrigen
};

/*✔ Muestra un mensaje indicando si el auto es de origen nacional o
importado, basado en la marca ingresada por el usuario.*/

console.log ('La marca ingresada es de ' + origenAuto(ingresarMarca, autosNacionales));

/////////////////////////////////////////////////////////////////////////////////////////
/*Ejercicio 6: El deportista
Para este ejercicio deberán definir un objeto literal “deportista”, con los
siguientes atributos: nombre, energía, experiencia.*/
let cantidadHoras = 0;

let deportista = {
    nombre: 'Nahuel',
    energia: 80,
    experiencia: 55, 
    // Ademas queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
    entrenarHoras: function (cantidadHoras)  {
        /*
        La función entrenarHoras tiene las siguientes tres características:
        ✔ Recibe por parámetro la cantidad de horas.
        ✔ Resta a su energía (this.energia) la cantidad de horas x 5.
        ✔ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.*/
        this.energia -= cantidadHoras *5;
        this.experiencia += cantidadHoras*2;
    
    }
};

/*Una vez definida la función, podemos ejecutar el código y ver cómo va
variando la energía y experiencia del deportista por consola.
 */

console.log('El deportista ' + deportista.nombre + ' tiene de energía ' + deportista.energia + ' y de experiencia ' + deportista.experiencia + '.');

cantidadHoras = parseInt(prompt('¿Cuántas horas querés que entrene? '));

deportista.entrenarHoras(cantidadHoras);

console.log('Tras entrenar, el deportista ' + deportista.nombre + ' tiene de energía ' + deportista.energia + ' y de experiencia ' + deportista.experiencia+'.\n');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔ título: una cadena con el título del libro.
✔ autor: una cadena con el nombre del autor del libro.
✔ anioPublicacion: un número con el año de publicación del libro.*/

let libro1 = {
    titulo:'El fin del amor',
    autor: 'Tamara Tenenbaum',
    anioPublicacion: 2019,

};

let libro2 = {
    titulo:'Nadie vive cerca de nadie',
    autor: 'Tamara Tenenbaum',
    anioPublicacion: 2020,

};

/*
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
como parámetro y muestre por consola la información de cada libro en el
formato especificado. */

let libro = prompt('Ingrese qué libro desea conocer (libro1/libro2): ').toLocaleLowerCase;

function mostrarLibro (libro) {
    (libro === 'libro1') ? libro = libro1 : libro = libro2;
    console.log('Título: ' + libro.titulo + '\nAutor: ' + libro.autor + '\nAño: ' + libro.anioPublicacion+'.\n');
};

mostrarLibro(libro);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 8: Funcion backEnd()
Creá la función backEnd() que recibirá 2 números como parámetros. La
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo
en cuenta los siguientes criterios:
✔ Si el número a imprimir es múltiplo del primer parámetro que se
ingresó, deberá mostrar el string “Back” en lugar del número.
✔ Si el número a imprimir es múltiplo del segundo parámetro ingresado,
deberá mostrar el string “End” en su lugar del número.
✔ Si el número a imprimir es múltiplo de ambos parámetros, deberá
mostrar el string “Back End” en lugar del número.*/

let num1 = parseInt(prompt('Ingrese un número: '));
let num2 = parseInt(prompt('Ingrese un número: '));

function backEnd(num1, num2) {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log("Back End");
        } else if (i % num1 === 0) {
            console.log("Back");
        } else if (i % num2 === 0) {
            console.log("End");
        } else {
            console.log(i);
        }
    }
};

backEnd(num1, num2);

////////////////////////////////////////////////////////////////////////
console.log('\n');
/* Ejercicio 9: Última aparición de un modelo de auto
En este ejercicio, trabajaremos con una lista de modelos de autos.
Implementa una función llamada ultimaAparicionModeloAuto(modelo) que
encuentre y muestre la última posición en la lista donde aparece el modelo
específico de auto dado por modelo.
Datos Iniciales:
✔ Utiliza un array llamado modelosAutos que contiene varios modelos de
autos, algunos repetidos para demostrar la funcionalidad.*/
let modelosAutos = [
    "Toyota Corolla",
    "Ford Fiesta",
    "Chevrolet Onix",
    "Volkswagen Golf",
    "Toyota Corolla",
    "Peugeot 208",
    "Ford Fiesta",
    "Renault Sandero",
    "Volkswagen Golf",
    "Fiat Cronos"
];

/*Funcionalidad:
✔ Implementa la función ultimaAparicionModeloAuto(modelo), que toma
modelo como parámetro (un string).
✔ Debes recorrer el array de manera manual para encontrar la última
aparición del modelo.
✔ Si el modelo se encuentra en el array, la función debe imprimir por
consola la posición (índice + 1) en la que aparece (considerando que la
numeración es de 1 a N).
✔ Si el modelo no está en el array, debe imprimir un mensaje indicando que
el modelo no está presente.
*/

function ultimaAparicionModeloAuto(modelo) {
    for (let i= 0; i< modelosAutos.length; i++) {
        ultimaPosicion = i;
    }
    if (ultimaPosicion !== -1) {
        console.log("Última aparición en la posición: " + (ultimaPosicion + 1));
    } else {
        console.log("El modelo no está presente.");
    }
};

let modelo = prompt('Ingrese el modelo del auto: ').toLowerCase()

ultimaAparicionModeloAuto(modelo);

//////////////////////////////////////////////////////////////////////////////////////////////
console.log('\n')
/* Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario
menciona sus flores favoritas. Realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.*/

let floresFavoritas = [];

/*2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
agrega cada una al array manualmente (sin usar métodos como push).*/

floresFavoritas[0] = prompt('Ingresa tu primera flor favorita: ');
floresFavoritas[1] = prompt('Ingresa tu segunda flor favorita: ');
floresFavoritas[2] = prompt('Ingresa tu tercera flor favorita: ');

/*3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas.*/
console.log('\n¿Te gustan las rosas?')
let preguntaFlores = 'Rosas';

function estaEnFavoritas (preguntaFlores) {
    let encontrada = false;

    for (let i = 0; i < floresFavoritas.length; i++) {
        if (preguntaFlores.toLowerCase() === floresFavoritas[i].toLowerCase()) {
            encontrada = true;
            break;
        }
    };

    if (encontrada) {
        console.log("Sí, está entre tus flores favoritas.");
    } else {
        console.log("No, no está entre tus flores favoritas.");
    };
};

estaEnFavoritas (preguntaFlores);

/*
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto
debe hacerse manualmente).*/

console.log("Mencionaste " + floresFavoritas.length + " flores favoritas.");
