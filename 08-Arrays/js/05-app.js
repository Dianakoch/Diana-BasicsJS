/* 
const meses = ['Enero', 'Febrero', 'Marzo'];

//agregar al final del arreglo
meses.push('Abril');
meses.push('Mayo');

console.table(meses);
*/

//EJEMPLO CARRITO DE COMPRAS
//definimos nuestro arreglo
const carrito = [];

//definimos un producto
const producto = {
    nombre: 'Monitor',
    precio: 400
}
const producto2 = {
    nombre: 'Telefono',
    precio: 800
}

//agregamos al final del arreglo con .push
carrito.push(producto);
carrito.push(producto2)

const producto3 ={
    nombre: 'teclado',
    precio: 300
}

// se agrega al inicio del array, mueve los demas
carrito.unshift(producto3);

console.table(carrito);