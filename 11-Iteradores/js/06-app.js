// forEach

const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar'];

pendientes.forEach((pendiente, i) => {
    console.log(`${i} : ${pendiente}`)
})

const carrito = [
    { nombre:'Monitor', precio: 500 },
    { nombre:'Telefono', precio: 900 },
    { nombre:'Teclado', precio: 200 },
    { nombre:'Cpu', precio: 1000 },
    { nombre:'Bocinas', precio: 400 },
    { nombre:'Tablet', precio: 800 }
]

carrito.forEach( producto => {
    console.log(producto.nombre)
})


//map crea un arreglo nuevo y forEach no lo hace
const nuevoArreglo = carrito.forEach( producto => {
    console.log(producto.nombre)
})

const nuevoArreglo2 = carrito.map( producto => {
    console.log(producto.nombre)
})

console.log(nuevoArreglo);  // Undefined (no muestra nada porque eta utilizando un forEach)
console.log(nuevoArreglo2); // Creara un arreglo y lo almacenara en la variable