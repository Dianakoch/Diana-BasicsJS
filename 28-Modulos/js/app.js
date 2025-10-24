import nuevaFunction, { nombre, apellido, mostrarCliente, tieneSaldo, Cliente  } from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFunction();

console.log( nombre );
console.log( apellido );
console.log( mostrarCliente( nombre, apellido ) );
console.log( tieneSaldo(100) );

const usuario1 = new Cliente(nombre, apellido);
console.log( usuario1.mostrarCliente() );

const empresa1 = new Empresa('Diana', 'Ortiz', 'Udemy');
console.log( empresa1.mostrarCliente() );