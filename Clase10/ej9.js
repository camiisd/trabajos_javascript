const prompt = require ('prompt-sync') ();

//Escribe un programa que calcule el Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula: peso/altura^2
//Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
console.log ('Para calcular su IMC ingrese los siguientes datos:')

let pesoUsuario = prompt ('Su peso en kg: ');
let alturaUsuario = prompt ('Su altura en cm: ');

let peso = parseFloat (pesoUsuario);
let altura = parseFloat (alturaUsuario) / 100;

let imc = peso / (altura*altura);

console.log('Su IMC es: ' + imc + '.');
