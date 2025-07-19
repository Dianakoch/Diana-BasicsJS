function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//
Cliente.prototype.tipoCliente = function(){ //el functio busca en el objeto actual, mientras que el arrow function siempre va a buscar en la ventana global
    let tipo;

    if(this.saldo >10000){
        tipo = 'Gold'
    }else if(this.saldo >5000){
        tipo = 'Platinum'
    }else{
        tipo = 'Normal'
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente ${this.tipoCliente()}` //mandamos a llamar un prototype dentro de otro
}

Cliente.prototype.retiraSaldo =function(retira){
    this.saldo -= retira//toma el saldo y retira la cantidad que el usuario da como parametro
}


//heredar de cliente hacia persona los datos nombre, saldo
function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//heredar funcionees entre prototypes
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;


//instanciarlo- la instancia siempre debe estar despues
const Diana = new Persona('Diana', 10000, 4494592339);
console.log(Diana)
console.log(Diana.nombreClienteSaldo())

//solo heredamos los atributos del objeto Cliente hacia Persona pero no al reves, al cual se le conoce como GODOBJECT
Persona.prototype.mostrarTelefono = function(){
    return `El telefono de ${this.nombre} es ${this.telefono}`
}

console.log(Diana.mostrarTelefono());