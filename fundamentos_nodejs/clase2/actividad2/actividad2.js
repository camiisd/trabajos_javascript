const fs = require('fs'); //Importo el modulo nativo fs

const estudiante = {//Crea un objeto en JavaScript que represente a un estudiante
  nombre: "Gonzalo",
  edad: 29,
  curso: "Introducción a JavaScript",
  notas: [ 7, 8, 8]
};

//Convierte este objeto a una cadena JSON usando JSON.stringify().
const estudianteJSON = JSON.stringify(estudiante, null, 2);

//Muestra la cadena JSON en la consola.
console.log('Muestra la cadena JSON usando JSON.stringify() en la consola.')
console.log(estudianteJSON);

//Luego, convierte la cadena JSON de nuevo a un objeto utilizando JSON.parse() 
const estudianteObjeto = JSON.parse(estudianteJSON);


// Muestra el objeto en la consola.
console.log('Muestra a cadena JSON de nuevo a un objeto utilizando JSON.parse()')
console.log(estudianteObjeto);