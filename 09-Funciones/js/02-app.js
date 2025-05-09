//Declaracion de funcion (function declaration)
function sumar() { //dentro de los parentesis van los parametros
    console.log(2+2); //cuerpo de la funcion
}
sumar(); //mandas a llamar la funcion


//Expresion de funcion (function expression)
const sumar2 = function(){ //aqui la funcion no esta declarda como tal, seria mas bien una variable (sumar2)
    console.log(3+3);
}
sumar2();