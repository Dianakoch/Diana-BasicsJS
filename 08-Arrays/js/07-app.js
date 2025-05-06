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

const producto3 ={
    nombre: 'teclado',
    precio: 300
}
const producto4 ={
    nombre: 'celular2',
    precio: 1000
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);
carrito.unshift(prodcto3);

console.table(carrito);

//Eliminar ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

carrito.splice(1,1); //toma la posicion 1 y elimina solo el elemento de esa posicion
console.table(carrito);