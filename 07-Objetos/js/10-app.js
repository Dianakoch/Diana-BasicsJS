const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

//UNIR DOS OBJETOS
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Spread Operator or Rest Operator
const resultado2 = { ...producto, ...medidas}; //toma una copia de producto y asignala dentro de resultado2, toma una copia de medidas y asignala a resultado2
console.log(resultado2)
