localStorage.removeItem('nombre')

const mesesArray = JSON.parse( localStorage.getItem('meses'))
console.log(mesesArray);

mesesArray.push('nuevo');
console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear();