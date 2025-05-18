const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) =>{
    if(mes === 'Abril'){
        console.log(`${mes} encontrado en el indice ${i}`);
    }
})

//Encontrar el indice de abril con el metodo .findIndex
const indice = meses.findIndex( (mes) => mes === 'Abril')
console.log(indice)


//Encntrar indice de un aarreglo de objetos
const indice2 = carrito.findIndex( (producto, i) => {
    if(producto.precio >= 500){
        console.log(producto);
    }
})