// for(let i = 0; i <= 20; i++){
//     if(i === 5){
//         console.log('Cinco');
//         continue;
//     }
//     console.log(`Numero: ${i}`)
// }

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
        precio: 200,
        descuento: true
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

for( let i = 0; i < carrito.length; i ++ ){
    if( carrito[i].descuento ){
        console.log(`El articulo ${carrito[i].nombre} tiene un descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}