const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//sprear operator con arreglo de indices
const meses2 = [...meses, 'Agosto']; //Esta forma no modifica el arreglo original
console.log(meses); // llega hasta julio
console.log(meses2); //llega hasta Agosto

//spread operator con arreglo de objetos
const producto = {
    nombre: 'Disco duro',
    precio: 300
}
const carrito2 = [...carrito, producto];
console.log(carrito2);