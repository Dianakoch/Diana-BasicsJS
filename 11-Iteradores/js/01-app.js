// for loop
// for( let i = 0; i <= 10; i+=2 ){
//     console.log(`Numero: ${i}`)
// }

// for(let i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es par`)
//     }else{
//         console.log(`El numero ${i} es Impar`)
//     }
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

console.log(carrito.length);

for( let i = 0; i <= carrito.length; i++ ){
    console.log(carrito[i].nombre);
}