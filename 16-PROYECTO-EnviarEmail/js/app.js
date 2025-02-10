//funcion que se asegura de que los elemntos html se hayan cargado
document.addEventListener('DOMContentLoaded', function(){
    
    //seleccionar lo elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //asignando eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar);
    

    function validar(event){
        if(event.target.value.trim() === ''){
            mostrarAlerta(`el campo ${event.target.id} es obligatorio`);
        }else{
            console.log('si hay algo');
        }
    }

    function mostrarAlerta(mensaje){
        //alertamos por el error
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        formulario.appendChild(error)
    }


})