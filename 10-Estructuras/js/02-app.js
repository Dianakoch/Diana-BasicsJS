//comparador estricto

const puntaje = 1001;
const puntaje2 = '1000';

console.log(typeof(puntaje2));
console.log(typeof(puntaje));

if (puntaje === '1000'){ // === estricto, == no es tan estricto
    console.log('Si es diferente c:');
} else {
    console.log('No es igual :c');
}

if (puntaje !== '1000'){ // !== estricto, != no es tan estricto
    console.log('Si es diferente c:');
} else {
    console.log('No es igual :c');
}