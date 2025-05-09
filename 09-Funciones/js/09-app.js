//metodos de propiedad
const reproductor = {
    reproducir: function(id){ //en un objeto esto son propedades, pero como tiene uan funcion se le conoce como metodo de propiedad
        console.log(`reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log(`pausando..`);
    },
    borrar: function(id){
        console.log(`borrando cancion ${id}`);
    },
    crearPlaylist: function(nombrePlaylist){
        console.log(`${nombrePlaylist} ha sido creada con exito`);
    },
    reproducirPlaylist: function(nombrePlaylist){
        console.log(`reproduciendo ${nombrePlaylist}`);
    }
}

reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('KPOP');
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('KPOP');
reproductor.reproducirPlaylist('Rock');