//submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e){
    e.preventDefault(); //previene la accion que realizaria el elemento por default (por ejemplo si el html tiene el action)

    console.log(e.target.action);
}

