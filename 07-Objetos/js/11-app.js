const nombre = 'hola';
const precio = 20;


const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tienen un precio de: ${this.precio}`)//con this nos referimos al objeto en si mismo
    }
}


const producto2 = {
    nombre: "Tablet 20 pulgadas", //llave: valor
    precio: 500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tienen un precio de: ${this.precio}`)//con this nos referimos al objeto en si mismo
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();