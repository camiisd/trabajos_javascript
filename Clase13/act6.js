const prompt = require ('prompt-sync')();
// Ejercicio 6: Convertir a minutos. Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos.
function convertirHorasAMinutos (horas) {
    return horas * 60
};

horas = parseInt(prompt ('Ingrese la cantidad de horas: '));

console.log('La cantidad de horas ingresadas corresponde a ' + convertirHorasAMinutos (horas) + ' minutos.')