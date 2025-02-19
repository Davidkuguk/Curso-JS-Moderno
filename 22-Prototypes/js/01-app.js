//los prototypes estan relacionados con objetos
const cliente = {
    nombre: 'David',
    saldo: 500,
}

console.log(cliente);
console.log(typeof cliente);

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const david = new Cliente('david', 500)
console.log(david);