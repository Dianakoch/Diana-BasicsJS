const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;

//saber tipo de caracter (string, number, float etc)
console.log(typeof numero1);

//convertir a numero un string entero
console.log( Number.parseInt(numero1));

//convertir a numero un string flotante
console.log(Number.parseFloat(numero2));

console.log(Number.parseInt(numero3));//no es un numero nos retornaria NaN

//revsar si un numero es entero o no
console.log(Number.isInteger(numero3)); //false
console.log(Number.isInteger(numero4)); //true
