//crear clases en JS
class Cliente { //class declaration
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const Diana = new Cliente('Diana', 10000);
console.log(Diana)



const Cliente2 = class{ //class expresion
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const Diana2 = new Cliente2('Diana2', 30000);
console.log(Diana2)