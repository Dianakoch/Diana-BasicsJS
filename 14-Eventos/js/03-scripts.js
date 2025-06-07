//eventos sobre los inputs, teclado
const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', ()=>{
//     console.log('escribiendo');
// })

busqueda.addEventListener('blur', ()=>{
    console.log('escribiendo');
})

busqueda.addEventListener('copy', ()=>{ //paste, cut, etc
    console.log('texto copiado');
})

busqueda.addEventListener('input', (e)=>{
    if(e.target.value === ''){
        console.log('fallo l validacion')
    }else{
        console.log(e.target.value);
    }
})