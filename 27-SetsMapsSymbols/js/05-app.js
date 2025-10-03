//symbols

const sym1 = Symbol();
const sym2 = Symbol();

if(sym1 === sym2) {
    console.log('Son iguales');
} else {
    console.log('No son iguales'); //no son iguales, ninguno es igual a otro aunque se creen de la misma forma
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//agregar nombre y apellido al objeto persona
persona[nombre] = 'Diana';
persona[apellido] = 'karen';
persona.tipo = 'Admin';
persona.saldo = 5000;

console.log(persona);
//no se puede acceder a los simbolos de la forma tradicional
console.log(persona[nombre]);

//las propiedads que utilizan un symbol no son iterables
for (let i in persona){
    console.log(i); //solo muestra tipo y saldo poque son las unicas que son iterables
}

//agregar una descripcion al symbol

const nombreCliente = Symbol('nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Diana';
console.log(cliente); //muestra el symbol con la descripcion que se le agrego
console.log(cliente[nombreCliente]); //muestra Diana    

