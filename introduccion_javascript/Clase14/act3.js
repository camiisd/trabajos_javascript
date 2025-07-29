const prompt = require ('prompt-sync')();
//Ejercicio 3: Clasificación de edades. Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.
let edadUsuario = parseInt (prompt('Ingrese una edad: '));
const clasificacionEdad = a => {
        return respuesta = (a<= 12) ?'niñ@.' : (a<= 17) ? 'adolescente.' : (a <= 59) ? 'adult@.' : 'adult@ mayor.';
       
};

console.log('La edad ingresada corresponde a ' + clasificacionEdad(edadUsuario));
    