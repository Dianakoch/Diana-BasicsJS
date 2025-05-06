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

carrito.forEach( function(producto) { //carrito es el plural, producto habla solo de cada objeto e igual hace el recorrido con el forEach
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

//.map te crea un arreglo nuevo, llena la variable con un nuevo arreglo
const nuevoArreglo = carrito.map( function(producto) { //si intentamos hacerlo con forEach sera undefined
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

console.log(nuevoArreglo);
