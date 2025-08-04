const prompt = require ('prompt-sync') ();

/*Ejercicio 1: 
Tienes un parque de diversiones que permite la entrada a personas mayores de 12 años y menores de 60. 
Escribe una función que reciba una lista de edades y devuelva cuántas personas pueden entrar al parque.
Consigna:
• Usa un bucle for y condicionales.
• Usa un array como entrada de la función.
• Devuelve el número de personas que cumplen con los requisitos.*/
console.log('Ejercicio 1:')
let edades = [10, 15, 35, 65, 12, 59]; //Array con la lista de edades

function contarPersonasQuePuedenEntrar(edades) {//Creamos una función para contar quién puede entrar
    let contador = 0;//Declaramos un contador para las personas que puedan entrar
    
    for (i = 0; i < edades.length; i++ ) {//Recorremos el array de edades
        let edad = edades[i];//Establecemos que edad será cada lugar del array
        if (edad <= 60 && edad >= 12) {//Usamos el condicional para establecer quién pueden entrar
            contador += 1;//Por cada edad que cumpla las condiciones, se suma uno al contador
        };
    };
    return contador;//Devuelve el resultado final
};

console.log(contarPersonasQuePuedenEntrar(edades));//Llamamos a la función y mostramos el resultado



/*Ejercicio 2: El menú del día 🍽️
Escribe una función que reciba un objeto con platos y precios, y devuelva los platos cuyo precio sea menor a $20.
Consigna:
• Usa un bucle for...in.
• Usa objetos y arrays.*/
console.log('\nEjercicio 2:')
const menu = {//Declaro en un objeto el menú con los precios.
    'Ensalada': 15,
    'Sopa': 8,
    'Carne': 25,
    'Pasta': 18
};

function platosBaratos(menu) {//Declaro mi función
    let platosEconomico = [];//Declaro un array vacío para los platos que cumplan con la condición
    for (let plato in menu) {//Recorro el objeto menu por plato
        if(menu[plato]<20){//Verifico que se cumpla la condición
            platosEconomico.push(plato);//Cada plato que cumpla la función, se agrega al array vacío
        };
    };

    return platosEconomico;//Devuelvo el resultado final
}


console.log(platosBaratos(menu))//Imprimo el resultado final de la función de acuerdo a la condición solicitada



/*Ejercicio 3: Ordenando números
Crea una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor.
Consigna:
• Usa el método sort()*/

console.log('\nEjercicio 3:');

let numeros = [5, 2, 9, 1, 7];

function ordenarNumeros (numeros) {
    numeros.sort(function(a, b) { //se declara una 2° función para evitar errores
        return a - b; //compara ambos números: a - b es negativo, primero va a. si es positivo, va b. si da 0, los deja igual.
    });
    return numeros
}

console.log(ordenarNumeros (numeros))

/*Ejercicio 4: Contando vocales 🅰️🅾️
Crea una función que reciba una cadena de texto y devuelva cuántas vocales contiene.
Consigna:
• Usa un bucle for y condicionales.
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u).*/
console.log('\nEjercicio 4:');

let texto = 'Hola Mundo'

function contarVocales(texto) { 
    let contador = 0; 
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<texto.length; i++) {
        const minusculas = texto[i].toLowerCase();
        if (vocales.includes(minusculas)) {
            contador +=1
        }
    }
    return contador;

}

console.log(contarVocales(texto))

/*Ejercicio 5: Generador de iniciales 🅰️
Escribe una función que reciba un nombre completo y devuelva las
iniciales en mayúsculas.
Consigna:
• Usa el método split() para dividir el nombre.
• Usa un bucle for y métodos de string.
*/

console.log('\nEjercicio 5:');

function generarIniciales(nombreCompleto) {
    let palabras = nombreCompleto.split(" "); 
    let iniciales = "";

    for (let i = 0; i < palabras.length; i++) {
        iniciales += palabras[i][0].toUpperCase(); 
    }

    return iniciales; 
}

let nombre = 'camila denise soto'
console.log(generarIniciales(nombre));


/*Ejercicio 6: Calculadora de promedio

Escribe una función que reciba un array de números y devuelva el
promedio.
Consigna:
• Usa un bucle for para sumar los números.
• Divide la suma total entre la cantidad de elementos del array.
Ejemplo:*/
console.log('\nEjercicio 6:');

let calificaciones = [9, 8, 10, 7, 6]

function calcularPromedio (calificaciones) {
    let suma = 0;
    for (let i=0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    let promedio = suma / calificaciones.length

    return promedio
};

console.log(calcularPromedio(calificaciones));

/*Ejercicio 7: Filtrar palabras largas
Escribe una función que reciba un array de palabras y un número, y
devuelva las palabras que tienen más caracteres que el número dado.
Consigna:
• Usa el método filter().
• Usa una función flecha para simplificar el código.
Ejemplo:*/

console.log('\nEjercicio 7:');

let palabras = ['javascript', 'html', 'css', 'nodejs']
let numero = 5;

function palabrasLargas (palabras, numero) {
    return palabras.filter(palabra => palabra.length > numero);
    
};

console.log(palabrasLargas (palabras, numero))



/*Ejercicio 8: Contador de letras
Crea una función que reciba una cadena de texto y una letra, y devuelva
cuántas veces aparece esa letra en la cadena.
Consigna:
• Usa un bucle for y condicionales.
• Haz que la búsqueda no distinga entre mayúsculas y minúsculas.*/

console.log('\nEjercicio 8:');

texto = 'Programar es divertido';
letra = 'r'

function contarLetra(texto, letra) {
    let contador = 0;
    for(let i=0; i < texto.length; i++) {
        let posicion = texto[i];
        if (posicion === letra){
            contador++
        };
    };
    return contador
};

console.log(contarLetra(texto, 'r'));



/*Ejercicio 9: Números únicos
Escribe una función que reciba un array de números y devuelva un nuevo
array sin números repetidos.

Consigna:
• Usa el objeto Set para eliminar duplicados.
• Convierte el Set a un array usando el operador spread (...).*/

console.log('\nEjercicio 9:');



/*Ejercicio 10: Invertir palabras
Crea una función que reciba una cadena de texto y devuelva otra cadena
con las palabras en orden inverso.
Consigna:
• Usa el método split() para separar las palabras.
• Usa el método reverse() para invertir el array.
• Usa el método join() para unir las palabras en una nueva cadena.
Ejemplo:*/