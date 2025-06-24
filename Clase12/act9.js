const prompt = require ('prompt-sync')( );

/*●	Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 
*/

let matriz = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]

console.log ('¡Bienvenid@ a su control de gastos!');
console.log('¿Qué acción desea realizar? 1. Registro de gastos diario 2. Ver Estadísticas del mes' );
let opcionUsuario = Number(prompt ('Ingrese una opción'));

switch (opcionUsuario) {
    case 1:
        for (i=0; i<=6; i++) {
            
        }
}

//a)	Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. 
// Recordar que las matrices comienzan siempre en posición 0. 

let suma1= 0;
let suma2= 0;
let suma3= 0;
let suma4= 0;


//b)	La aplicación también tendrá una parte de estadísticas, 
// para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.

let dia = 0;

//c)	Por último, es necesario tener el total de gastos realizados en el mes.

let total = 0;
//✔	Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
//d) Obtener cuál fue la semana que más gastos se realizaron. 
let semanaMayor = 0;
// Indicar el día que más gastos se realizaron.
let díaMayor = 0;
