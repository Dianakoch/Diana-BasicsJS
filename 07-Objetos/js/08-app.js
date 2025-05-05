"use strict" //modo estricto, no se permiten malas practicas. por ejemplo editar una constante en objeto
const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true
}
Object.freeze( producto ); //congelamos el objeto en especifico


producto.imagen = "iamgen.jpg"; //no va a funcionar
producto.disponible = false; //no va a fucnionar
delete producto.precio; //no va a funcionar

console.log(producto);
console.log(Object.isFrozen(producto)); //true, el objeto no podra ser modificado
