// ajustar css, cambiar-quitar clases

const encabezado = document.querySelector('h1');

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';


const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase'); //podemos mostrar y crear clases
card.classList.remove('card');
console.log(card.classList);
