//variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul')




//eventos
eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}



//clases

//clase presupuesto
class Presupuesto{
    //declaramos el constructor
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = Number(this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0));
        this.restante = this.presupuesto - gastado;
        console.log(gastado);
    }
}

//Clase UI
class UI{
    //clase basade en ui -no necesita constructor
    insertarPresupuesto(cantidad){

        //extrayendo valor
        const {presupuesto, restante} = cantidad;

        //insertando HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        //crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger')
        }else{
            divMensaje.classList.add('alert-success')
        }

        //quitar alerta tras un tiempo
        setTimeout(() =>{
            divMensaje.remove();
        }, 3000)


        //mensaje de error 
        divMensaje.textContent = mensaje;

        //insertar HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario)

    }

    agregarGastoListado(gastos){

        this.limpiarHTML();

        //iterar sobre los gastos
        gastos.forEach(gasto =>{
            const {cantidad, nombre, id} = gasto;

            //crear un li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'
            nuevoGasto.dataset.id = id;
            
            //agregar en el html del gasto
            nuevoGasto.innerHTML = `
                ${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>
            `;

            //boton para borrar gasto
            const btnBorrar = document.createElement('button')
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';
            nuevoGasto.appendChild(btnBorrar)

            //agregar al html
            gastoListado.appendChild(nuevoGasto)

        })
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild)
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante
    }

}

//instancias
const ui = new UI();
let presupuesto;

//fucniones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?')
    // console.log(presupuestoUsuario);

    if(presupuestoUsuario === '' ||presupuestoUsuario <= 0 || presupuestoUsuario === null || isNaN(presupuestoUsuario) ){
        window.location.reload()
    }

    presupuesto = new Presupuesto(presupuestoUsuario)
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto)
}

function agregarGasto(e){
    e.preventDefault()

    //leer datos formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad =document.querySelector('#cantidad').value;
    //gestionar errores del input
    if(nombre.trim() === '' || cantidad.trim() === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error')
        return;
    }

    //generar objeto con el gasto

    const gasto = {nombre, cantidad: Number(cantidad), id:Date.now()}
    

    //añade nuevo gasto

    presupuesto.nuevoGasto(gasto)

    //mostrando mensaje
    ui.imprimirAlerta('Gasto agregado Correctamente');

    //imprimir los gastos
    const {gastos, restante} = presupuesto
    ui.agregarGastoListado(gastos)
    //reseteamos el formulario
    formulario.reset();
}

function limpiarInputs(){
}