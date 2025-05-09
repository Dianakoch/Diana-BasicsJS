//metodos de propiedad
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`reproduciendo cancion con el id ${id}`),
    pausar: () => console.log(`pausando..`),
    borrar: id => console.log(`borrando cancion ${id}`),
    crearPlaylist: nombrePlaylist => console.log(`${nombrePlaylist} ha sido creada con exito`),
    reproducirPlaylist: nombrePlaylist => console.log(`reproduciendo ${nombrePlaylist}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtnerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'One'
reproductor.obtnerCancion;

reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('KPOP');
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('KPOP');
reproductor.reproducirPlaylist('Rock');