//generador es una funcion especial que retorna un iterador

function *crearGenerador(){
    yield 1;
    yield 'Diana';
    yield 100 + 200;
    yield true;
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next().done); //done es una propiedad que nos dice si ya se termino el iterador
// console.log(iterador.next().value); //cada vez que se llama a next() se ejecuta hasta el siguiente yield

//generador personas
function *crearGeneradorPersona(personas){
    for (let i = 0; i < personas.length; i++){
        yield personas[i];
    }
}

const personas = ['diana', 'karen', 'vane', 'vale'];

const iteradorPersona = crearGeneradorPersona(personas);

console.log(iteradorPersona.next().value);