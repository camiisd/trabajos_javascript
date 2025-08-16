//Importa el array desde estudiantes.js.
const estudiantesPrimerAnio = require('./estudiantes.js');

//Muestra en la consola los nombres de todos los estudiantes
for (let i = 0; i < estudiantesPrimerAnio.estudiantes.length; i++) {
  console.log(estudiantesPrimerAnio.estudiantes[i].nombre);
}

//Calcula y muestra el promedio de notas de un estudiante específico.
function encontrarEstudiante(nombreBuscado) {
   // usá .find sobre el array
   let estudiante = estudiantesPrimerAnio.estudiantes.find(estudiante => {
   // adentro compará estudiante.nombre con nombreBuscado 
    return estudiante.nombre.toLowerCase() === nombreBuscado.toLowerCase() 
   });
    // devolvé el objeto estudiante si lo encuentra
        return estudiante;
};

function promedio(nombreBuscado) {
   // llamá a encontrarEstudiante(nombreBuscado)
   let estudianteBuscado = encontrarEstudiante(nombreBuscado)
   
   // obtené sus notas
   let notas = estudianteBuscado.notas;
   
   // calculá el promedio sumando y dividiendo por la cantidad
    let suma = notas.reduce(function (acum, nota){
        return acum + nota;
    }, 0);
   // devolvé ese número
    let promedioNotas = suma / notas.length;
    return promedioNotas;
};

const prompt = require ('prompt-sync') ();
console.log('\nPara conocer el promedio de un estudiante a continuación indique su nombre.')
nombreBuscado = prompt('Nombre del estudiante: ')
console.log('El promedio de', nombreBuscado, 'es de ', promedio(nombreBuscado),'.')

//Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON.
let nuevoEstudiante = {
    nombre: 'Gonzalo',
    edad: 24,
    curso: 'JavaScript',
    notas: [8, 9, 6]
};

estudiantesPrimerAnio.estudiantes.push(nuevoEstudiante)

console.log('\nEstudiantes actualizados: ')
console.log (JSON.stringify(estudiantesPrimerAnio.estudiantes, null, 2));


