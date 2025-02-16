//localStorage es sensible a las mayusculas
const nombre = localStorage.getItem('Nombre')
console.log(nombre);

const productoJSON = localStorage.getItem('producto')
console.log(JSON.parse(productoJSON));

const mesesJSON = localStorage.getItem('meses')
console.log(JSON.parse(mesesJSON));