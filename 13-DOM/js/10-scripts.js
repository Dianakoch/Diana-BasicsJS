const enlace = document.createElement('a');//psas la etiqueta
//agregando el texto
enlace.textContent = 'Nuevo enlace';
//agregando href
enlace.href = '/nuevo-enlace';
enlace.target = "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
//agregar funcion
enlace.onclick = miFuncion;

//mostrar enlace en la navegacion
const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]) //se le pasan los parametros de donde quieres que se coloque antes

function miFuncion(){
    alert('click')
}


// Crear un card de forma dinamica
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p')
parrafo3.textContent = '880 por persona';
parrafo3.classList.add('precio')

//crear div con clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


//crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear el card
const card = document.createElement('div');
card.classList.add('card');

//asignar imagen
card.appendChild(imagen);

//signar info
card.appendChild(info);


//insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

