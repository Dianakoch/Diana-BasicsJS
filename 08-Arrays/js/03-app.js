const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//cuanto mide el arreglo
console.log(meses.length); // 6 elementos

// primera parte del for: valor donde va a iniciar (usualmente es un let porque un const no puede ser reasignado)
// segunda parte del for: cuantas veces quieres que se ejecute el codigo
// tercera parte del for: incrementacion para el codigo
for(let i = 0; i<meses.length; i++){
    console.log(meses[i]); //hace un recorrido dependiendo de cuantas posiciones hay en el array y las muestra
}