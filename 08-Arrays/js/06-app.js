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


let resultado;
resultado = [...carrito, producto]; //toma el producto y lo agrega a la variable resultado, sin editar el carrito original
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado]; // se agrega al inicio del array

console.table(resultado);