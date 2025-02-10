//funcion que se asegura de que los elemntos html se hayan cargado
document.addEventListener('DOMContentLoaded', function(){
    
    //seleccionar lo elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')


    //asignando eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar);
    

    function validar(event){
        if(event.target.value.trim() === ''){
            console.log('Esta vacio');
        }else{
            console.log('si hay algo');
        }
    }


})