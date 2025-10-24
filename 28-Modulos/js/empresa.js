import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
    constructor(nombre, apellido, espresa){
        super(nombre, apellido);
        this.empresa = espresa;
    }
    mostrarCliente(){
        return `Cliente: ${this.nombre} ${this.apellido} ${this.empresa}`;
    }
}