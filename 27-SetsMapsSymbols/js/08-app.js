//

const ciudades = ["Bogotá", "Lima", "Santiago", "Montevideo", "Buenos Aires"];
const ordenes = new Set([111,122,133,144,155]);
const datos = new Map();

datos.set("nombre", "Diana");
datos.set("profesión", "Desarrolladora Web");
datos.set("edad", 23);

//default
for (let ciudad of ciudades) {
    console.log(ciudad); //devuelve solo los valores
}
for (let orden of ordenes) {
    console.log(orden); //devuelve solo los valores
}  
for (let dato of datos) { // en los maps devuelve un array con llave y valor
    console.log(dato);
}


//keys iterador que devuelve SOLO LAS LLAVES de cada uno de los sets y maps
for(let keys of ciudades.keys()) {
    console.log(keys);
}
for (let keys of ordenes.keys()) {
    console.log(keys);
}   
for (let keys of datos.keys()) {
    console.log(keys);
}

//values iterador que devuelve SOLO los VALORES de cada uno de los sets y maps
for(let value of ciudades.values()) {
    console.log(value);
}

for (let value of ordenes.values()) {
    console.log(value);
}
for (let value of datos.values()) {
    console.log(value);
}   


// entries nos devuelve un iterador con los valores de cada uno de los sets y maps
for (let entry of ciudades.entries()) {
    console.log(entry);
}

for (let entry of ordenes.entries()) {
    console.log(entry); // en los sets el key y value son iguales son solo valores
}

for (let entry of datos.entries()) {
    console.log(entry);
}   
