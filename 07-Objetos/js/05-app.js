const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true,
    informacion: {
        medidad: {
            peso: '1kg',
        medida: '1m'
        },
        fabricacion:{
            pais: 'china'
        }
        
    }
}


console.log(producto);

//accediendo dentro del objeto
console.log(producto.informacion.fabricacion.pais);