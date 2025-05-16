// operador > < >= <=
const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

if(dinero >= totalAPagar) {
    console.log('Si puedes pagar'); //en if se ejecuta la primera condicion que se cumpla
} else if(tarjeta || cheque ) {
    console.log('Puedes pagar con tarjeta')
}else {
    console.log('Fondos insuficientes');
}
