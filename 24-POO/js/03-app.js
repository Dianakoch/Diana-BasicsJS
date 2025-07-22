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

//herencia
class Empresa extends Cliente{ //empresa hereda todos los atributos de la clase Cliente
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo); //va hacia la clase padre y toma los atributos que necesites de esta
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida(){ //se reescribe el metodo (ignora el metodo de la clase padre aun y cuando estan nombredas igual)
        return `Bienvenido al cajero de empresas`;
    }
}

const Diana = new Cliente('Diana', 10000);
const empresa = new Empresa('Karen', 300000, 4494593232, 'Persona');


console.log(empresa.mostrarInformacion()); //este metodo esta en la clase cliente pero podemos utilizarlo
console.log(Cliente.bienvenida()); //las propiedades estatcicas son mas para la clase y no tanto para el objeto
console.log(Empresa.bienvenida())