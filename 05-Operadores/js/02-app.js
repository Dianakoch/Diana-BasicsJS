const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//igual que...
console.log(numero1 == numero3); // false
console.log(numero1 == numero2); // true, este comparador solo se fija en los valores no importa el tipo

//comprador estricto
console.log(numero1 === numero2); // false, ahora si toma el tipo de dato
console.log(numero11 === parseInt(numero2)); // true, lo convertimos a numero
console.log(typeof numero1); //number
console.log(typeof numero2); //string


//diferente de....
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); //true
console.log(numero1 != numero2); // false, no son diferentes siue siendo el mismo valor
console.log(numero1 !== numero2); //true, es un comparador estricto ambos son dediferente tipoL
console.log(numero1 !== parseInt(numero2)); //true, es un comparador estricto ambos son dediferente tipoL
