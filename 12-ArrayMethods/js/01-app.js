const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//comprobar si un valor existe en un arreglo (.includes)
meses.forEach( mes => {
    if(mes === 'Enero'){
        console.log(`${mes} existe`)
    }
})

const resultado = meses.includes('Enero'); //retorna un booleaan, .includes no soporta un arreglo de objetos
console.log(resultado); //true


//en un arreglo de objetos, se utiliza .some
const existe = carrito.some( producto => {
    return producto.nombre === 'Celular'
})
console.log(existe)


//En un arreglo tradicional con .some
const existe2 = meses.some( mes => mes === 'Febrero');