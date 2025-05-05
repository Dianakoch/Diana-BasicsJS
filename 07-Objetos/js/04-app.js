const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true,
}

/* anteriormente se hacia de este modo
const nombre = producto.nombre;
console.log(nombre); 
*/

//ahora seutiliza el metodo de destructuring 
const { nombre, precio, disponible } = producto;//extrae la propiedad nombre y la coloca en una nueva variable nombre
console.log(nombre);
console.log(precio);
console.log(disponible);