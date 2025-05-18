const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//EVERY, se deen cumplir en todos los elementos la condicion
const resultado = carrito.every( producto => producto.precio < 1000);
console.log(resultado); //entrega un booleando

const resultado2 = carrito.some( producto => producto.precio < 1000);// alemnos uno debe cumplir la condicion
console.log(resultado); //entrega un booleando