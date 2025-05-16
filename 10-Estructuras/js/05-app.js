const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        pagar();
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Selecciona un metodo soportado');
        break;
}

function pagar(){
    console.log('pagando....')
}