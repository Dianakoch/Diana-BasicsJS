class Cliente { //class declaration

    #nombre; // esta propiedad es privada, solamente se puede utilzar dentro de la clase o poor medio de esta


    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}


const Diana = new Cliente();
Diana.setNombre('Diana');

console.log(Diana.getNombre());