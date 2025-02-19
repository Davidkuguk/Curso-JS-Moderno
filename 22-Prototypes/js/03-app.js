//funciones exclucivamente dedicadas a una clase

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

//empresa no tendra el metodo tipoCLiente 
const CCJ = new Empresa('Codigo con Juan', 8000, 'Cursos online');

//cliente tendra prototype tipoCliente
const pedro = new Cliente('pedro', 8000);


console.log(CCJ);

console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
console.log(pedro.retirarSaldo(200));
console.log(pedro.nombreClienteSaldo());
console.log(pedro);