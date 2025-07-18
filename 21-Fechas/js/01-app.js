const diaHoy = new Date();
let valor;
valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();

valor = diaHoy.setFullYear(2010);

console.log(valor)


//personalizado
const miDia = new Date('11-20-2001'); //mes-dia-año
let dia;
dia = miDia;
console.log(dia);

