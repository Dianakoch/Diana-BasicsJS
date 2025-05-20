//GENERALMENTE DEBE EXISTIR SOLO UN ID POR ELEMENTO DEL DOCUMENTO, NO PUEDEN REPETIRSE

// query selector (solo trae el primer elemento que encuentra)

const card = document.querySelector('.card'); //retorna el primero que encuentre
console.log(card);

//podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);


//seleccionar el segundo elemento card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2');
console.log(segundoCard);

//seleccionar el id de formulario
const formulario = document.querySelector('#formulario'); //selecciona el primero que encuentre
console.log(formulario);

//SLECCIONAR elementos de html
const navegacion = document.querySelector('nav');
console.log(navegacion)