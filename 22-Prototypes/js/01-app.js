//object literal
const cliente = {
    nombre: 'Diana',
    saldo: 500
}
console.log(cliente);

//object constructor
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const Diana = new Cliente('Diana', 500);
