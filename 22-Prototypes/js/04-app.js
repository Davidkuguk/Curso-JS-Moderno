//herencia de prototypes

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo >10000){
        tipo = 'Gold';
    }else if(this.saldo >5000){
        tipo = 'Platinum';
    }else{
        tipo = 'normal'
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, tipo cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function(retira){
    this.saldo -= retira
}

// function Persona(nombre, saldo, telefono){
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.telefono = telefono
// }


function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono
}

//copiar las funciones de cliente en persona
Persona.prototype = Object.create(Cliente.prototype);

//al hacer esto perdemos el constructor de cliente pero heredamos sus prototypes
//por eso creamos un nuevo constructor copiando el de cliente
Persona.prototype.constructor = Cliente;

//creamos nuevas funciones que no afectan a cliente
Persona.prototype.mostrarTelefono = function(){
    return `Telefono ${this.telefono}`
}

const david = new Persona('david', 5000, 51231312)
console.log(david);
console.log(david.tipoCliente());
console.log(david.nombreClienteSaldo());
console.log(david.mostrarTelefono());