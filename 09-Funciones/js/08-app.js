function sumar(a,b){
    return a + b; //funcion que retorna un valor
}
const resultado = sumar(2,3);
console.log(resultado);


//ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total){
    return total*1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100); //400
total = agregarCarrito(600); //1000

const totalPagar = calcularImpuesto(total); //aumenta el 15% del total con el impuesto

console.log(`El total a pagar es de ${totalPagar}`);
console.log(total);