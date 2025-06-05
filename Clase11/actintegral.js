const prompt= require("prompt-sync") ();

/*¡Estás a cargo de organizar un desfile! Tenés que decidir cuántos personajes van a participar y qué emoji representa 
a tu equipo. Usando un bucle for, mostrá cómo desfilan uno a uno por la pasarela.*/

let cantidadPersonajes = parseInt(prompt("Ingrese la cantidad de personajes que van a participar en el desfile: "));
let equipo = prompt("Ingrese el emoji que representa a su equipo para el desfile (ej:❤️,🙌 ): ");

console.log (`¡Bienvenidos al desfile de personajes!`);

for (let i = 1; i <= cantidadPersonajes; i++) {
    console.log(i + '.' + equipo + ' Desfilando por la pasarela');
}