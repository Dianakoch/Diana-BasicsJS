const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar'];

const carrito = [
    { nombre:'Monitor', precio: 500 },
    { nombre:'Telefono', precio: 900 },
    { nombre:'Teclado', precio: 200 },
    { nombre:'Cpu', precio: 1000 },
    { nombre:'Bocinas', precio: 400 },
    { nombre:'Tablet', precio: 800 }
]


for( let pendiente of pendientes){
    console.log(pendiente);
}

for( let producto of carrito){
    console.log(producto.nombre);
}