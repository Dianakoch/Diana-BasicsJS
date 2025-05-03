//variables
var producto = "Monitor 24 pulgadas"; //inicializamos variable con valor
console.log(producto);

//las variables se pueden reasignar
producto = 'Monitor 19 plgada';
console.log(producto);

//js es un lenguaje de tipo dinamico (no se especifica)
producto = 20;
console.log(producto);


// se pueden inicializar sin valor
var disponible;
disponible=true;
disponible = false;

//inicializando multiples variables

/* en lugar de esto
var categoria = "computadora";
var marca ="LG";
var calificacion = 5;
*/

var categoria = "computadora",
    marca ="LG",
    calificacion = 5;

var dias99; //no pueden ser nombradas con numeros primero var 99dias;

var nombreProducto; //esta es la forma mas utilizada en js
var nombre_producto;
var NombreProducto; //se utiliza mas en clases