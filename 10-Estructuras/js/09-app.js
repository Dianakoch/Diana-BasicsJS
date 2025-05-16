const autenticado = true;
const puedePagar = false;

console.log( autenticado ? puedePagar ? 'Si esta autenicado y puede comprar' : 'Si autenticao, no puede pagar' : 'No puede comprar');


const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalAPagar = 600;

if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar){
    if(efectivo > totalAPagar){ // esto se le oonoce como un if anidado
        console.log('Si pagaste con efectivo');
    }else{
        console.log('No pagaste con efectivo');
    }
}else{
    console.log('No puedes pagar');
}