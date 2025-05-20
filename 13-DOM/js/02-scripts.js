// seleccionar elementos por su clase
const header = document.getElementsByClassName('header'); //pasamos el elemento de la clase de html que queremos utiliizar
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);


//si ls clases existen mas de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


//No existe la clase
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste)