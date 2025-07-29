const prompt = require('prompt-sync')({ sigint: true });

//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)

console.log ('Para determinar si el triángulo es equilátero, isóceles o escaleno; por favor ingrese los valores de cada lado:')

//longitudes de los lados
let ladoUno = parseFloat (prompt('Ingrese el valor del lado a: '));
let ladoDos = parseFloat(prompt('Ingrese el valor del lado b: '));
let ladoTres = parseFloat(prompt('Ingrese el valor del lado c: '));

//determinar el tipo de triangulo

/*let triEquilatero = ladoUno === ladoDos === ladoTres;
let triIsoceles = ladoUno === ladoDos || ladoUno === ladoTres || ladoDos === ladoTres
let triEscaleno = ladoUno !== ladoDos !== ladoTres;*/

let mensaje = '';

if (ladoUno === ladoDos && ladoDos === ladoTres) {
    mensaje = 'Su triángulo es Equilátero'
} else if (ladoUno === ladoDos || ladoUno === ladoTres || ladoTres === ladoDos) {
    mensaje = 'Su triángulo es Isóceles.'
} else {
    mensaje = 'Su triángulo es Escaleno.'
}

//mensaje final al usuario

console.log (mensaje);

/*let mensaje = '';

if (triEquilatero === true){
    mensaje = 'Su triángulo es Equilátero'
} else if (triIsoceles === true) {
    mensaje = 'Su triángulo es Isóceles'
} 
else {
    mensaje = 'Su triángulo es Escaleno'
}

console.log(mensaje);*/
