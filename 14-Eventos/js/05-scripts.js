// swindow.addEventListener('scroll', ()=>{
//     console.log('scrolling...')
// })

// window.addEventListener('scroll', ()=>{
//     const scrollPX = window.scrollY;
//     console.log(scrollPX)
// })

window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    // console.log(ubicacion)
    if(ubicacion.top < 100){
        console.log('ya es visible')
    }else{
        console.log('aun no lo es')
    }
})

