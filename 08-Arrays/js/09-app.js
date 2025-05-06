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

for(let i = 0; i<carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`); //hace un recorrido dependiendo de cuantas posiciones hay en el array y las muestra
}

carrito.forEach( function(producto) { //carrito es el plural, producto habla solo de cada objeto e igual hace el recorrido con el forEach
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})


/*
hola() //funcion
juan.hola()//metodo
*/