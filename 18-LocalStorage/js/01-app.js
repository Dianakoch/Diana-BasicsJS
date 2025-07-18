//solo se pueden almacenar strings, no objetos ni arrays
localStorage.setItem('nombre', 'Diana'); //los datos persisten mas ue en el sessionstorage

const producto = {
    nombre: 'diana',
    edad: 20
}

const productostring = JSON.stringify(producto);
localStorage.setItem('producto', productostring);


const meses = ['enero', 'febrero', 'marzo'];
//creando variable
const mesesstring = JSON.stringify(meses);
localStorage.setItem('meses', mesesstring);

//almacennado desde el array sin crear variable
//localStorage.setItem('meses', JSON.stringify(meses));