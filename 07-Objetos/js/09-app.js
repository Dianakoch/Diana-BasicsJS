"use strict" //modo estricto, no se permiten malas practicas. por ejemplo editar una constante en objeto
const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true
}
Object.seal( producto ); //no se pueden agregar ni eliminar propiedades, pero se pueden modificar las existentes

producto.disponible = false; // si va a funcionar
delete producto.precio; //no va  funcionar

console.log(producto);
console.log(Object.isSealed(producto));