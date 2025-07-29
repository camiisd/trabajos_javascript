const prompt = require ('prompt-sync')();
//Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 

let secreto = Math.floor(Math.random() * 10) + 1;

console.log('Acabo de pensar en un número del 1 al 10. Te doy 3 intentos para que lo adivines.')

let mensaje = '';

// Luego, pide al usuario que adivine el número hasta 3 intentos. 
for (let intento = 1; intento <=3; intento++) {
    let adivinar = Number(prompt('Intento n°' + intento + '. El número es: '));
    
    // Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. 
    if (adivinar === secreto) {
        mensaje = '¡Felicitaciones! Haz adivinado el número.';
        console.log(mensaje);
        break;
    } else if (adivinar !== secreto && intento<= 3){
        switch (intento) {
            case 1:
                console.log('¡Te equivocaste! Intentalo de nuevo: ');
                break;
            case 2:
                console.log('¡Te equivocaste! ¡Último intento! ');
                 break;
                // Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.
            default:
                console.log('¡Perdiste! El número es: ' + secreto);
                break;
        }
    }
}
