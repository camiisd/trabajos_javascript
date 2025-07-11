// Encuentra los nombres más cortos y transforma su formato
// Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. Queremos realizar varias tareas con esta lista:

let listaNombres = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

// o Primero, filtra los nombres que tengan menos de 5 letras.

let nombresCortos = listaNombres.filter((nombre) => {
    return nombre.length < 5        
    });

// o Luego, transforma los nombres resultantes para que estén en // mayúsculas.

let nuevaLista = nombresCortos.map(nombre => nombre.toUpperCase());

// o Finalmente, construye una frase que diga: "Los nombres // seleccionados son: [nombres]", donde [nombres] sea la lista resultante unida por comas.
// Al final, imprime la frase en la consola.
console.log ('Los nombres seleccionados son: ' + nuevaLista.join(', '));


