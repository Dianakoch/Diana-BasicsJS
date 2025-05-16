const autenticado = true;

if(autenticado){
    console.log('el usuario esta autenticado');
}else {
    console.log('no esta autnticado');
}

const puntaje = 100;

function revisarPuntaje(){
    if(puntaje >= 500){
        console.log('Excelente!!');
        return; //si esta linea de codigo funciona y entra, return termna la ejecucion de codigo de esta funcion
    }
    
    if(puntaje < 500) {
        console.log('Hiciste un buen trabajo...!');
        return;
    }
}
