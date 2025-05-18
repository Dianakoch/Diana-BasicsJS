const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

resultado = carrito.filter( producto => producto.precio > 400 ); // nos crea un nuevo arreglo con la condicion que estamos revisando en el momento
resultado = carrito.filter( producto => producto.precio < 600);
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos'); //nos trae todos los productos a exepcion de audifonos

console.log(resultado);
