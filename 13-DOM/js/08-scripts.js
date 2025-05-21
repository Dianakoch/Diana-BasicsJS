const navegacion = document.querySelector('.navegacion');

console.log(navegacion.lastElementChild);
console.log(navegacion.firstElementChild);
// console.log(navegacion.childNodes);//los espacios en blanco dentro del html tambien son conciderados elementos
// console.log(navegacion.children); //aqui no toma los espacios y solo trae los elementos reales

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

//DE PADRE A HIJO
card.children[1].children[1].textContent = 'Nuevo texto desde traversing the DOM'
card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]); //slector que inicia desde card y empiza a navegar dentro de sus elementos

//DE HIJO A PADRE
console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);

//DE HIJO A HIJO
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4');
console.log(ultimoCard.previousElementSibling); // nos trae el elemento previo del ultimo card en html