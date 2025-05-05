//object literal
const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true,
}


//object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('monitor 24 pulgadas', 500);
console.log(producto2);

const prodcto3 = new Producto('Television', 100);
console.log(prodcto3);