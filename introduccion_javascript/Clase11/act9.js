const prompt = require ('prompt-sync')();

//Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. 
// El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. 
// Usa un ciclo for para realizar la cuenta regresiva.
console.log ('El despegue del cohete se hará tras la siguiente cuenta regresiva.')

for (let i=10; i >= 0; i--) {
    let mensaje = (i === 0) ? '¡Despegue!' : i + '...';
    console.log(mensaje);
};