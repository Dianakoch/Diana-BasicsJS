//object constructor
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
const Diana = new Cliente('Diana', 500);


function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}
console.log(formatearCliente(Diana));


function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre,
    this.saldo = saldo,
    this.categoria = categoria
}
const DDJ = new Empresa('Curso', 4000, 'En linea');

console.log(formatearEmpresa(DDJ));
