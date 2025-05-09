iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Diana');
}

function usuarioAutenticado(usuario){
    console.log('Auenticando usuario....');
    console.log(`usuario ${usuario} auteticado exitosamente!`)
}