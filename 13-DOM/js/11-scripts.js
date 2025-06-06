const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ){
        footer.classList.remove('activo');
        this.classList.remove('activo'); // en lugar de btnFlotate podemos agregar this, porque fue lo que mando a llamar a nuestra clase
        this.textContent = 'Idioma moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X cerrar';
    }

}