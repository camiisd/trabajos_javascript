const prompt = require ('prompt-sync')({sigint:true});
//1.ingresa un número
//2.verificar si es positivo, negativo o igual a cero
//3. mostrar el mensaje

//El usuario ingresa el número que necesito sea leído como número -> uso parseFloat ()
let numero = parseFloat(prompt ('Ingresa un número: '));

//Tengo que verificar si es positivo, negativo o igual a 0
let mensaje;


if (numero === 0) {
    mensaje = ' cero.';
} 
else if (numero > 0) {
    mensaje = 'positivo.';
}
 else {
    mensaje= 'negativo.';
}

//Ahora tengo que mostrar el mensaje
console.log ('El número ingresado es: ' + mensaje);