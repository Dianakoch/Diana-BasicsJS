const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true
}

producto.disponible = false; // la propiedades si pueden ser reescritas de una contante en objeto
delete producto.precio;
console.log(producto);