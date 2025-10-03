//set te permite crear una lista de valores únicos solo valores, no indices

const carrito = new Set(); 
carrito.add('telefono');
carrito.add('tablet');
carrito.add('monitor');

carrito.delete('monitor');

console.log(carrito.has('tablet')); //true
console.log(carrito.size); //sabe cuantos elementos tiene el set

//carrito.clear(); //elimina todo

carrito.forEach(producto => console.log(producto)); //recorre el set

console.log(carrito);

//del siguiente array eliminar los duplicados
const numeros = [10,20,30,40,50,10,20,30];

const noDuplicados = new Set(numeros); //crea un set a partir del array sin duplicados
console.log(noDuplicados);