//En actividad3.js, importa el objeto usando require().
const cursoImportado = require('./datos.js');

console.log("Nombre:", cursoImportado.curso.nombreCurso);
console.log("Duración:", cursoImportado.curso.duracion);
console.log("Temas:", cursoImportado.curso.temas);