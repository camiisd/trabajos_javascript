//Calcula el total de ventas de productos seleccionados Supón que tienes una lista de productos con sus precios en formato de objeto:
const productos = [
{ item: 'Laptop', precio: 1000 },
{ item: 'Mouse', precio: 25 },
{ item: 'Teclado', precio: 50 },
{ item: 'Monitor', precio: 200 },
{ item: 'Audífonos', precio: 75 }
];
// Queremos: 
// o Seleccionar los productos cuyo precio sea mayor o igual a 50.

let valorMenorCincuenta = productos.filter((item) => {
    return item.precio <= 50        
    });

// o Obtener solo los nombres de esos productos.
console.log('Productos que valen menos o igual a $50: ');
let productosMenorCincuenta = valorMenorCincuenta.forEach ( producto => {
    console.log (producto.item)
});

// o Calcular el precio total sumando los precios de los productos seleccionados.

let totalMenorCincuenta = valorMenorCincuenta.reduce ((acumulador, producto) => {
    return acumulador += producto.precio;
},0);

console.log('Precio total: $' +totalMenorCincuenta)

// o Imprime el total y los nombres de los productos seleccionados en la consola.

