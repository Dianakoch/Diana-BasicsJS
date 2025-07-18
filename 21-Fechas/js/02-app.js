const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM Do YYYY h:mm:ss a')) //mes dia año hora:minutos:segundo am/pm

console.log(moment().format('LLLL', diaHoy));

console.log(moment().add(3, 'days').calendar()); //fecha dentro de tres dias