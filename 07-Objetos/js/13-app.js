//object literal
const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true,
}

console.log( Object.keys( producto )); // se obtienen las llaves del objeto, si es que el objeto esta vacio (parte izquierda)
console.log( Object.values( producto )); //se obtienen los valores del objeto (parte derecha)
console.log( Object.entries( producto )); //te retorna todo en pares