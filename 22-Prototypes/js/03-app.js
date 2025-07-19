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
    this.saldo -= retira
}

//instanciar
const Diana = new Cliente('Diana', 20000);
console.log(Diana.tipoCliente());
console.log(Diana.nombreClienteSaldo());
Diana.retiraSaldo(1000);
console.log(Diana.nombreClienteSaldo());

console.log(Diana);

