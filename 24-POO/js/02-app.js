class Cliente { //class declaration
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} tu Saldo ${this.saldo}`; //this siempre hae referencia al objeto actual
    }

    //propiedades estaticas
    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const Diana = new Cliente('Diana', 10000);
console.log(Diana.mostrarInformacion()); //asi se acceden a los valores, muy similar a los prototypes pero con metodos

console.log(Cliente.bienvenida()) // este pertenece mas a la clase


const Cliente2 = class{ //class expresion
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} tu Saldo ${this.saldo}` //this siempre hae referencia al objeto actual
    }
}

const Diana2 = new Cliente2('Diana2', 30000);
console.log(Diana2.mostrarInformacion())