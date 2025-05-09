const carrito = [
    {
        nombre:'Monitor',
        precio: 500
    },
    {
        nombre:'Telefono',
        precio: 900
    },
    {
        nombre:'Teclado',
        precio: 200
    },
    {
        nombre:'Cpu',
        precio: 1000
    },
    {
        nombre:'Bocinas',
        precio: 400
    },
    {
        nombre:'Tablet',
        precio: 800
    }
]

//.map te crea un arreglo nuevo, llena la variable con un nuevo arreglo
const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

carrito.forEach( producto=> `${producto.nombre} - Precio: ${producto.precio}`);

console.log(nuevoArreglo);
