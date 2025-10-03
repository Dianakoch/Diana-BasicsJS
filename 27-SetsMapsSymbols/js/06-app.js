//crear nuestro iterador

function crearIterador(persona){
    let i = 0;
    return {
        siguiente: () =>{ //este iterador ira recorriendo el arreglo hasta el final
            const fin = ( i >= persona.length ); //cuando se termina el arreglo
            const valor = !fin ? persona[i++] : undefined; //valor actual del arreglo, si no se termino el arreglo i++ para que avance

            return { fin, valor}
        }
    }
}

const persona = ['diana', 'karen', 'vane', 'vale']

//utilizar iterador
const recorrerPersona = crearIterador(persona);

console.log(recorrerPersona.siguiente());