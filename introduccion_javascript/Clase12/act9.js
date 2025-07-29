const prompt = require ('prompt-sync')( );

/*●	Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera. 
*/

let matrizEjercicio = [
    [1135, 2500,  900, 1600, 2800, 3650, 1100], // Semana 1
    [1750, 1890, 1900, 1300,  898, 1750, 2800], // Semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3
    [800, 1250, 1430, 2100, 1980, 1270,  950]  // Semana 4
]



console.log ('¡Bienvenid@ a su control de gastos!');
console.log('¿Qué acción desea realizar?' );
console.log('1. Gastos totales por día, 2. Gastos totales por semana, 3. Gastos totales del mes, 4. Semana con más gastos, 5. Día con más gastos');
let opcionUsuario = parseFloat(prompt ('Ingrese una opción: '));

switch (opcionUsuario) {
    case 1:// para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
        console.log('Para ver el total de un día especifíco, indique a continuación');
        let fila = parseInt(prompt('Semana (1 al 4): ')) - 1 ;
        let columna = parseInt(prompt('Día (1. Lunes, 2. Martes, ... 7. Domingo.): ')) - 1;
        console.log ('El total de gastos del día es $' + matrizEjercicio [fila] [columna] + '.');
    break;
    
    case 2: ////a)	Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. 
        console.log('Para ver el total de una semana especifíca, indique a continuación');
        let filaS = parseInt(prompt('Semana (1 al 4): ')) - 1 ;
        let sumaFila = 0;
        for (let i =0; i < matrizEjercicio [filaS].length; i++) {
            sumaFila += matrizEjercicio [filaS][i];
        }
        console.log ('El gasto total por semana es de $ ' + sumaFila + '.');
    break;
    
    case 3: //c)	Por último, es necesario tener el total de gastos realizados en el mes.
        let sumaMes = 0;
        for (let fila = 0; fila<matrizEjercicio.length; fila++){
             for (let columna = 0; columna < matrizEjercicio [fila].length; columna++) {
                    sumaMes += matrizEjercicio[fila][columna];
            }
        };
        console.log('El total del mes es de $' + sumaMes + '.');
    break;
    
    case 4://d) Obtener cuál fue la semana que más gastos se realizaron.
        let semanaMayor = 0;
        let mayorGasto = 0;
        for (let fila = 0; fila<matrizEjercicio.length; fila++){
            let sumaSemana = 0;
            for (let columna = 0; columna < matrizEjercicio [fila].length; columna++) {
                    sumaSemana += matrizEjercicio[fila][columna];
            }
            if (sumaSemana > mayorGasto) {
                   mayorGasto = sumaSemana
                    semanaMayor = fila
            }
        };
        console.log('La semana ' + (semanaMayor + 1) + ' es donde hubieron más gastos con un total de $' + mayorGasto +  '.');
    break;
    
    case 5:// Indicar el día que más gastos se realizaron.
        let diaMayor = 0;
        let mayorGastoDia = 0;
        let semanaMayorDia = 0;
        for (let fila = 0; fila<matrizEjercicio.length; fila++){
                for (let columna = 0; columna < matrizEjercicio [fila].length; columna++) {
                       if (mayorGastoDia < matrizEjercicio[fila][columna]) {
                            mayorGastoDia = matrizEjercicio[fila][columna];
                            diaMayor = columna;
                            semanaMayorDia = fila;
                        } 
                }
                    
        };
        console.log('El día ' + (diaMayor + 1) + ' de la semana ' + (semanaMayorDia+1) + ' es donde hubieron más gastos con un total de $' + mayorGastoDia +  '.');
    break;
    
    default:
        console.log('Indique una opción correcta.')
            
};

        
 /*

let matrizDias = [
    [
        [], //lunes
        [], //martes
        [], //miércoles
        [], //jueves
        [], //viernes
        [], //sábado
        [] //domingo
    ],// semana 1
    [
        [], //lunes
        [], //martes
        [], //miércoles
        [], //jueves
        [], //viernes
        [], //sábado
        [] //domingo
    ], // semana 2
    [
        [], //lunes
        [], //martes
        [], //miércoles
        [], //jueves
        [], //viernes
        [], //sábado
        [] //domingo
    ], // semana 3
    [
        [], //lunes
        [], //martes
        [], //miércoles
        [], //jueves
        [], //viernes
        [], //sábado
        [] //domingo
    ]// semana 4
];

switch ((opcionUsuario)){
   //haciendo pruebas con lo que sé hasta ahora
    case 2: // así pensé cómo registrar los gastos diarios
        console.log('Para registrar un gasto en un día especifíco, indique a continuación');
            let fila = parseInt(prompt('¿En qué semana querés registrar el gasto? (1 al 4)')) - 1 ;
            let columna = parseInt(prompt('¿En qué día de la semana? Recuerde siendo 1 = Lunes, 2 = Martes, ... 7. Domingo.')) - 1;
            matrizDias [fila][columna].push(parseFloat (prompt('Ingrese el valor del gasto $ ')));
    break;
    case 3:
        switch (opcionUsuario) {
            case 1:// para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
                console.log('Para ver el total de un día especifíco, indique a continuación');
               fila = parseInt(prompt('Semana (1 al 4): ')) - 1 ;
               let columna = parseInt(prompt('Día (1. Lunes, 2. Martes, ... 7. Domingo.): ')) - 1;
               let sumaDia = 0;
               for (let i = 0; i < matrizDias[fila][columna].length; i++) {
                    sumaDia += matrizDias[fila][columna][i];
                }
                console.log ('El total de gastos del día es $' + sumaDia + '.');

            break;
            case 2: ////a)	Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. 
                console.log('Para ver el total de una semana especifíca, indique a continuación');
                let fila = parseInt(prompt('Semana (1 al 4): ')) - 1 ;
                let sumaFila = 0;
                for (let columna =0; columna < matrizDias [fila].length; columna++) {
                    for (let gastos =0; gastos < matrizDias [fila][columna].length; gastos++)
                        sumaFila += matrizDias [fila][columna][gastos];
                }
                console.log ('El gasto total por semana es de $ ' + sumaFila + '.');
            break;
            case 3: //c)	Por último, es necesario tener el total de gastos realizados en el mes.
                let sumaMes = 0;
                for (let fila = 0; fila < matrizDias.length; fila++) {
                    for (let columna = 0; columna < matrizDias[fila].length; columna++) {
                            for (let g = 0; g < matrizDias[fila][columna].length; g++) {
                                    sumaMes += matrizDias[fila][columna][g];
                            }
                        }
                    }
                console.log('El total del mes es de $' + sumaMes + '.');

            break;
            case 4://d) Obtener cuál fue la semana que más gastos se realizaron.
               let semanaMayor = 0;
                let mayorGasto = 0;

                for (let fila = 0; fila < matrizDias.length; fila++) {
                    let sumaSemana = 0;
                    for (let columna = 0; columna < matrizDias[fila].length; columna++) {
                        for (let g = 0; g < matrizDias[fila][columna].length; g++) {
                            sumaSemana += matrizDias[fila][columna][g];
                        }
                    }
                    if (sumaSemana > mayorGasto) {
                        mayorGasto = sumaSemana;
                        semanaMayor = fila;
                    }
                }
                console.log('La semana ' + (semanaMayor + 1) + ' es donde hubieron más gastos con un total de $' + mayorGasto + '.');

            break;
            case 5:// Indicar el día que más gastos se realizaron.
               let diaMayor = 0;
            let mayorGastoDia = 0;
            let semanaMayorDia = 0;

            for (let fila = 0; fila < matrizDias.length; fila++) {
                for (let columna = 0; columna < matrizDias[fila].length; columna++) {
                    let sumaDia = 0;
                    for (let g = 0; g < matrizDias[fila][columna].length; g++) {
                        sumaDia += matrizDias[fila][columna][g];
                    }
                    if (sumaDia > mayorGastoDia) {
                        mayorGastoDia = sumaDia;
                        diaMayor = columna;
                        semanaMayorDia = fila;
                    }
                }
            }
            console.log('El día ' + (diaMayor + 1) + ' de la semana ' + (semanaMayorDia + 1) + ' es donde hubieron más gastos con un total de $' + mayorGastoDia + '.');

            break;
                

        }
};
*/


