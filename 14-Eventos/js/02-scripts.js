const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('mouseenter', () =>{
    console.log('entrando en la navegacion') //te colocas sobre el nav

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseout', () =>{
    console.log('saliendo de la navegacion') //te colocas fuera del nav
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('dblclick', () =>{
    console.log('dobleclick') //dobleclick
    nav.style.backgroundColor = 'white';
})


//mousedown - similar al click
//click 
//dblclick - doble click al mouse
//mouseup -sueltas el mouse