//wekMap

const producto = {
    id: 10,
    nombre: 'Monitor 20 pulgadas'
}

const wekMap = new WeakMap(); //solo acepta objetos como llave

wekMap.set(producto, 'Monitor de 20 pulgadas'); //agrega llave y valor

console.log(wekMap.has(producto)); //true
console.log(wekMap.get(producto)); //Monitor de 20 pulgadas

console.log(wekMap);
console.log(wekMap.delete(producto)); //elimina el elemento

//no tiene size, no se puede eliminar un elemento en particular, no se puede iterar, no tiene forEach, no tiene clear
//solo se puede agregar, eliminar todo el weakmap y verificar si existe un elemento con has

console.log(wekMap.size); //undefined