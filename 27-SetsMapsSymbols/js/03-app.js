//lo maps son un conjunto de llaves y valores, a diferencia de los objetos que solo tienen llaves y valores
//a diferencia de los sets, los maps si pueden tener llaves duplicadas y cualquier tipo de dato como llave

const persona = new Map();

persona.set('nombre', 'diana'); //agrega llave y valor
persona.set('edad', 23);
persona.set('profesion', 'desarrolladora web');
persona.set(10, 'diez'); //puede ser cualquier tipo de dato
persona.set(true, 'verdadero');

console.log(persona);

console.log(persona.size); //saber cuantos elementos tiene el map
console.log(persona.has('nombre')); //true, saber si existe una llave en el map
console.log(persona.get('edad')); //23, obtener el valor de una llave

persona.delete(10); //elimina un elemento por su llave
//persona.clear(); //elimina todo el map    


const pacientes = new Map([['paciente1', 'Diana'], ['paciente2', 'karla']]); //otra forma de crear un map
console.log(pacientes);

//iterar un map
pacientes.forEach(datos => {
    console.log(datos); //recorre el map y trae los valores
})