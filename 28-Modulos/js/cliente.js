export const nombre = 'Diana';
export const apellido = 'Karen';

// Ejemplo de una función exportada
export function mostrarCliente(nombre, apellido) {
    return `Cliente: ${nombre} ${apellido}`;
}

export function tieneSaldo(saldo) {
    if(saldo > 0) {
        return 'El cliente tiene saldo';
    } else {
        return 'El cliente no tiene saldo';
    }
}

//exportar clase
export class Cliente {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    mostrarCliente(){
        return `Cliente: ${this.nombre} ${this.apellido}`;
    }
}

export default function nuevaFunction(){ //solo se puede un default por archivo
    console.log('Este es el export default');
}