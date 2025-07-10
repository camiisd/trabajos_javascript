/* Gestión de inventario de una tienda
Eres encargado de una tienda y tienes un inventario inicial de productos. La
lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];*/

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

/*
Debes realizar las siguientes acciones:
1. Agregar un nuevo producto "Impresora" al inventario usando el
método adecuado.*/

inventario.push("Impresora");

//2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.

let encontrar = inventario.indexOf("Tablet");

let mensaje = (encontrar != -1) ? 'El objeto (Tablet) se encuentra en el inventario.' : 'El objeto (Tablet) no se encuentra en el inventario.'

console.log('\n' + mensaje);

//3. Eliminar el primer producto del inventario.


console.log ('\n' + inventario.shift() +' fue eliminado del inventario.');

//4. Mostrar la lista actualizada de productos en una sola cadena, separados por comas.

console.log('\n El inventario actual contiene: ' + inventario.join(', '));





