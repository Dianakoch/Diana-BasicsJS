const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JS', 'NodeJS');

//arrow function
const aprendiendo2 = tecnologia => `aprendiendo ${tecnologia}`; //cuando solo hay un parametro los parentesis son opcionales
console.log(aprendiendo2('JS')); 