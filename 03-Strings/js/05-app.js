const producto = "Monitor 20 pulgadas";

//.replace para remplazar texto de una cadena
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));


//.slice para cortar
console.log(producto.slice(0, 10)); //corta de los 0 a los 10 caracteres
console.log(producto.slice(8)); //lo corta hasta el caracter 8
console.log(producto.slice(2,1));//no lo corta ni hace nada ya que no se puede ir de atras en delante


// alternativa a .slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); //aqui es posible cortar de atras hacia adelante, substring lo ordena

const usuario = 'Diana';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));