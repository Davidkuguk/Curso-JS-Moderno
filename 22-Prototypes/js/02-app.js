function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const david = new Cliente('david', 500);
const CCJ = new Empresa('Codigo con Juan', 8000, 'Cursos online')

//nos encontramos con que tenemos funciones dedicadas a una cosa y a otra pero
//llegara el momento en el que no sabremos a que va dedicada x funcion,
//por eso existen los prototypes
function formatearCliente(cliente){
    const{nombre,saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`
}

function formatearEmpresa(empresa){
    const{nombre,saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y es de categoria ${categoria}`
}

console.log(formatearCliente(david));
console.log(formatearEmpresa(CCJ));
