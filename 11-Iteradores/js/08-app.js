const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar'];

// for in itera sobre objetos y for of itera sobre arreglos
for( let pendiente in pendientes){
    console.log(pendiente);
}

const automovil = {
    modelo: 'camaro',
    year: 1949,
    motor: '6.0'
}

for (let propiedad in automovil){
    console.log(`${automovil[propiedad]}`)
}

for ( let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}
