const prompt = require ('prompt-sync')({sigint:true});
// dos varibles booleanas condicion1 y condicion2
let input1 = prompt ('Ingresa un valor booleano (true/false) ');
let input2 = prompt ('Ingresa un valor booleano (true/false) ');
//crear dos condiciones para cada input
let condicion1 = (input1 === 'true');
let condicion2 = (input2 === 'true');
//mostrar el resultado de diversas combinaciones lógicas
console.log ('')
console.log ('Resultados lógicos')
console.log("condicion1 AND condicion2:", condicion1 && condicion2);
console.log("condicion1 OR condicion2:", condicion1 || condicion2);
console.log("NOT condicion1:", !condicion1);
console.log("NOT condicion2:", !condicion2);
