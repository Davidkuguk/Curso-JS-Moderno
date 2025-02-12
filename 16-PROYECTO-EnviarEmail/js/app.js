//funcion que se asegura de que los elemntos html se hayan cargado
document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: '',
    }
    
    //seleccionar lo elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const inputCC = document.querySelector('#cc')
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spiner = document.querySelector('#spinner');
    btnReset.addEventListener('click', function(event){
        event.preventDefault();

        //reiniciamos el objeto
        email.email = '';
        email.asunto= '';
        email.mensaje = ''
        formulario.reset();

        comprobarEmail();
    })
    formulario.addEventListener('submit', enviarEmail);

    function enviarEmail(e){
        e.preventDefault();
        spiner.classList.add('flex');
        spiner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');


            //reiniciamos el objeto
            email.email = '';
            email.asunto= '';
            email.mensaje = ''
            formulario.reset();
            }, 3000);

        comprobarEmail();
    }
    //asignando eventos

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar);
    inputCC.addEventListener('blur',validar )

    function validar(event){
        if(event.target.value.trim() === ''){

            
            mostrarAlerta(`el campo ${event.target.id} es obligatorio`, event.target.parentElement);
           email[event.target.name] = '';
            comprobarEmail();
            
            return;
        }

        if(event.target.id === 'email' && !validarEmail(event.target.value)){
            mostrarAlerta('El email no es valido', event.target.parentElement)
            email[event.target.name] = '';
            comprobarEmail();
            
            return;
        }

        limpiarAlerta(event.target.parentElement);

        //asignando valores al objeto
        if(event.target.name !== 'cc'){
            email[event.target.name] = event.target.value.trim().toLowerCase();

        }
        
        //comprobar email
        comprobarEmail();

    }

    /**
     * @param {*muestra en un parrafo el mensaje} mensaje 
     * @param {*es el elemento seleccionado e.target.parentElement } referencia 
     */
    function mostrarAlerta(mensaje, referencia){

        //comprobar existencia
        limpiarAlerta(referencia)
        if(referencia.querySelector('#cc')){
            return;
        }

        //alertamos por el error
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        referencia.appendChild(error)
        console.log(referencia);
    }


    function limpiarAlerta(referencia){
        //si alerta existe, eliminara la que se va a generar
        //caso contrario deja que se genere
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove()
        }
        
    }

    function validarEmail(email){

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const resultado = emailRegex.test(email);
        console.log('aqui');
        return resultado;
    }

    function comprobarEmail(){
        if(Object.values(email).includes('')){
            console.log(Object.values(email));
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        }else{
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }

})

