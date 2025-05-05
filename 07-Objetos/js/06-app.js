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


const { nombre, informacion, informacion:{ fabricacion, fabricacion: { pais } } } = producto; //esta creando la variable nombre y pais
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);
