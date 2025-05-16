const usuario = true;
const puedePagar = false;

if (usuario && puedePagar){ //las condiciones deben cumplirse forzosamene
    console.log('Puedes comprar');
}else if(!puedePagar && !usuario){
    console.log('No puedes comprar');
} else if (!usuario){
    console.log('inicia sesion o crea una cuenta');
}else if(!puedePagar){
    console.log('Fondos insuficientes');
}