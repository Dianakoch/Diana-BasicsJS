const producto = "Monitor 20 pulgadas";
const precio = '30 dolares';

console.log(producto.concat(precio)); //concatenar strings
console.log(producto+ 'Con un precio de' + precio); //concatenar variables con escrito
console.log('El producto' + producto + 'tiene un costo de' + precio);
console.log('El producto', producto, 'tiene un costo de', precio);
console.log(`El producto ${producto} tiene un precio de ${precio}`) //se agregan las variables con simbolo de ${}
