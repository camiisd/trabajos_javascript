// Encuentra la película más corta y analiza los títulos largos. Supón que tienes una lista de películas con su duración en minutos:
const peliculas = [
{ titulo: 'El Señor de los Anillos', duracion: 200 },
{ titulo: 'Inception', duracion: 148 },
{ titulo: 'Matrix', duracion: 136 },
{ titulo: 'Toy Story', duracion: 81 },
{ titulo: 'Coco', duracion: 105 }
];
// Queremos:
// o Encontrar la película más corta en duración.

let peliculaCorta = peliculas.reduce((acumulador, pelicula) => {
  return (pelicula.duracion < acumulador.duracion) ? pelicula : acumulador;
}, peliculas[0]); 


console.log('La película más corta es: ' + peliculaCorta.titulo)

// o De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.

let peliculasRestantes = peliculas.filter(pelicula => {
    pelicula !== peliculaCorta
    return pelicula.titulo.length > 10
});

// o Crear una lista de los títulos largos en minúsculas.
// o Imprime en la consola:
// o El título de la película más corta.
// o La lista de títulos largos en minúsculas.
let titulosLargos = peliculasRestantes.map(pelicula => pelicula.titulo);
console.log('La lista de títulos más largos: ' + titulosLargos.join(', ').toLowerCase());
