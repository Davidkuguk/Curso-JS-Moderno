//selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#formulario-cita');

//objeto de cita
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
}

//eventListeners

/**
 //opcion más facil pero estatica de escribir en un objeto
 * 
pacienteInput.addEventListener('change', (e) =>{
    citaObj.paciente = e.target.value;
});
 */

//mejor opcion
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)
formulario.addEventListener('submit', submitCita);

/**
 *Funcion dinamica para que recupere los valores
 del formulario y los escriba en el obj
 */
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
}

function submitCita(e){
    e.preventDefault();
    
    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        new Notificacion('Todos los campos son obligatorios', 'error');
        return;
    }

}

class Notificacion {
    constructor(texto,tipo){
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar(){
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm' );

        //eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove()
        

        //si es tipo error agregamos una clase
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        //le pasamos el mensaje de error 
        alerta.textContent = this.texto;

        //insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        //quitar despues de 5s
        setTimeout(() =>{
            alerta.remove()
        },3000)
    }
}

class AdminCitas{
    constructor(){
        this.citas =  [];
        console.log();
    }
}