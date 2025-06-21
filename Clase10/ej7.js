// Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.

let valorInicialUno = 'Camila';
let valorInicialDos = 'Denise';

console.log('Hola ' + valorInicialUno + ' ' + valorInicialDos );

// Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.
// Usando una variable temporal
let valorTemporal = valorInicialUno;
valorInicialUno = valorInicialDos;
valorInicialDos = valorTemporal;

console.log('Hola ' + valorInicialUno + ' ' + valorInicialDos );


let valorInicialTres = 'Gonzalo';
let valorInicialCuatro = 'Nahuel';

console.log ('Hola '+ valorInicialTres + ' ' + valorInicialCuatro);

// Usando asignación simultánea
[valorInicialTres, valorInicialCuatro] = [valorInicialCuatro, valorInicialTres];

console.log('Hola ' + valorInicialTres + ' ' + valorInicialCuatro );