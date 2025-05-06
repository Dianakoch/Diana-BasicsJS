const producto = {
    nombre: "Monitor 20 pulgadas", //llave: valor
    precio: 300,
    disponible: true,
}

//ahora se utiliza el metodo de destructuring 
const { nombre } = producto;//extrae la propiedad nombre y la coloca en una nueva variable nombre, el nombre de la variable debe er igual al de la llave dentro del objeto
console.log(nombre);

// destructuring con arreglos
const numeros = [10,20,30,40,50];
const [primero, , tercero, ...cuarto] = numeros; //se asigna la variable dependiendo de la posicion, si o necesitamos las primeras solo colocamos ,
console.log(primero); //10
console.log(tercero); //30
console,log(cuarto); //[40, 50]

