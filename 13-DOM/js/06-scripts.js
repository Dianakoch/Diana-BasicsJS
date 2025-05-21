const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

//Acceder a texto
console.log(encabezado.innerText); // si en CSS  visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // si lo va a encontrar aunque este oculto
console.log(encabezado.innerHTML); // trae al html


// const nuevoHeading = 'Nuevo heading'
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'