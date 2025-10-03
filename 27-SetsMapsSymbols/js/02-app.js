//wekset

const wekSeat = new WeakSet(); //solo podemos agregar objetos

const persona1 = {
    nombre: 'diana',
    edad: 23
}

const persona2 = {
    nombre: 'karla',
    edad: 25
}

wekSeat.add(persona1); //agrega al weakset solo objetos
wekSeat.add(persona2);

console.log(wekSeat);

//wekset no tiene size, no se puede iterar, no tiene forEach, no tiene clear, no se puede eliminar un elemento en particular
//solo se puede agregar, eliminar todo el weakset y verificar si existe un elemento con has

console.log(wekSeat.has(persona1)); //true
console.log(wekSeat.size); //undefined


