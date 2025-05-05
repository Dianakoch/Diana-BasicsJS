const numero1 = 30;
const numero2 = 20;

let resultado;

resultado = Math.PI;

resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);
resultado = Math.round(2.5);

//redondear hacia arriba
resultado = Math.ceil(2.1);//3

//redondear hacia abajo
resultado = Math.floor(2.8); //2

//raiz cuadrada
resultado = Math.sqrt(144);

//valor absoluto
resultado = Math.abs(-500);

//potencia
resultado = Math.pow(2, 4); //dos a l potencia de cuatro

//obtner el valor minimo
resultado = Math.min(3,5,1,12,-3);

//obtener el valor maximo
resultado = Math.max(3,5,1,2,7);

//obtener un numero random
resultado = Math.random();
resultado = Math.floor(Math.random()*30); // aqui se obtiene un valor que va del 0 al 30 (dentro de ese rango)


console.log(resultado);
console.log(Math.PI);